import { MapPinIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SEO } from "../components";
import { Footer } from "../sections";
import ApplicationForm from "../sections/recruitment/ApplicationForm";
import {
    APPLICATION_FORM_LABELS,
    JOB_TYPE_LABELS,
    RECRUITMENT_JOB_UI,
    STATUS_LABELS,
    entrepriseRecrutementPath,
} from "../constants";
import { getJobDetail, getJobQuestions } from "../services/recruitmentApi";

const resolveJob = (job) => ({
    id: job.id ?? job.uuid ?? job.slug ?? job._id ?? job.job_offer_id,
    title: job.title ?? job.name ?? "Poste",
    location: job.location ?? job.city ?? job.zone ?? "—",
    positions:
        job.open_positions ??
        job.positions_count ??
        job.headcount ??
        job.slots ??
        null,
    typeKey: String(
        job.job_type ?? job.role_type ?? job.type ?? "",
    ).toLowerCase(),
});

const descriptionFromApi = (job) => {
    if (!job || typeof job !== "object") return "";
    const raw =
        job.description ??
        job.body ??
        job.details ??
        job.content ??
        job.summary ??
        job.role_description ??
        job.long_description;
    return typeof raw === "string" ? raw.trim() : "";
};

const RecruitmentOfferPage = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadKind, setLoadKind] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [applying, setApplying] = useState(false);
    const [questionsFetchError, setQuestionsFetchError] = useState("");

    useEffect(() => {
        let cancelled = false;
        (async () => {
            if (jobId == null || jobId === "") {
                setJob(null);
                setLoading(false);
                setLoadKind("notfound");
                return;
            }
            setLoading(true);
            setLoadKind(null);
            setJob(null);
            const result = await getJobDetail(jobId);
            if (cancelled) return;
            setLoading(false);
            if (!result.success) {
                setLoadKind(result.status === 404 ? "notfound" : "error");
                return;
            }
            if (!result.data) {
                setLoadKind("notfound");
                return;
            }
            setJob(result.data);
        })();
        return () => {
            cancelled = true;
        };
    }, [jobId]);

    const meta = useMemo(() => (job ? resolveJob(job) : null), [job]);

    const badgeLabel = useMemo(() => {
        if (!meta) return JOB_TYPE_LABELS.default;
        if (meta.typeKey.includes("agent") || meta.typeKey === "agent")
            return JOB_TYPE_LABELS.agent;
        if (meta.typeKey.includes("livreur") || meta.typeKey === "livreur")
            return JOB_TYPE_LABELS.livreur;
        return JOB_TYPE_LABELS.default;
    }, [meta]);

    const isAgent =
        meta &&
        (meta.typeKey.includes("agent") || meta.typeKey === "agent");
    const badgeClass = isAgent
        ? "bg-primary text-brand-blue"
        : "bg-pale-blue text-brand-blue";

    const subtitle =
        meta &&
        [meta.location, badgeLabel].filter(Boolean).join(" · ");

    const descriptionText = job ? descriptionFromApi(job) : "";

    const handlePostuler = async () => {
        if (!meta?.id) return;
        setApplying(true);
        setQuestionsFetchError("");
        const result = await getJobQuestions(meta.id);
        setApplying(false);
        if (!result.success) {
            setQuestionsFetchError(STATUS_LABELS.questionsLoadError);
            return;
        }
        setQuestions(result.data);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setQuestions([]);
    };

    const offerTitle = meta?.title || "Offre d'emploi";

    return (
        <>
            <SEO
                title={offerTitle}
                canonical={`/entreprise/recrutement/offre/${jobId ?? ""}`}
            />
            <main className='min-h-[60vh] bg-white'>
                <div className='bg-brand-blue'>
                    <div className='max-container padding-x py-12 sm:py-16'>
                        <Link
                            to={entrepriseRecrutementPath}
                            className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
                        >
                            {RECRUITMENT_JOB_UI.backToOffers}
                        </Link>
                        {loading ? (
                            <>
                                <div className='mt-6 h-9 max-w-md animate-pulse rounded-lg bg-white/20' />
                                <div className='mt-3 h-4 w-48 animate-pulse rounded bg-white/15' />
                            </>
                        ) : loadKind ? (
                            <>
                                <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                                    {loadKind === "notfound"
                                        ? STATUS_LABELS.jobNotFound
                                        : STATUS_LABELS.jobDetailLoadError}
                                </h1>
                            </>
                        ) : meta ? (
                            <>
                                <span
                                    className={`mt-6 inline-flex w-fit rounded-full px-3 py-1 font-montserrat text-xs font-bold ${badgeClass}`}
                                >
                                    {badgeLabel}
                                </span>
                                <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                                    {meta.title}
                                </h1>
                                <p className='mt-2 font-montserrat text-sm text-white/60'>
                                    {subtitle}
                                </p>
                            </>
                        ) : null}
                    </div>
                </div>

                <div className='max-container padding-x pb-16'>
                    {loading && (
                        <div className='mt-10 space-y-3'>
                            <div className='h-4 w-full animate-pulse rounded bg-gray-100' />
                            <div className='h-4 w-full animate-pulse rounded bg-gray-100' />
                            <div className='h-4 w-2/3 animate-pulse rounded bg-gray-100' />
                        </div>
                    )}

                    {!loading && loadKind && (
                        <p className='mt-10 font-montserrat text-base text-gray-600'>
                            <Link
                                to={entrepriseRecrutementPath}
                                className='font-semibold text-brand-blue underline-offset-2 hover:underline'
                            >
                                {RECRUITMENT_JOB_UI.backToOffers}
                            </Link>
                        </p>
                    )}

                    {!loading && !loadKind && meta && (
                        <>
                            <div className='mt-8 flex flex-col gap-3 font-montserrat text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6'>
                                <span className='inline-flex items-center gap-2'>
                                    <MapPinIcon
                                        className='h-5 w-5 shrink-0 text-brand-blue'
                                        aria-hidden='true'
                                    />
                                    {meta.location}
                                </span>
                                {meta.positions != null && (
                                    <span className='inline-flex items-center gap-2'>
                                        <UserGroupIcon
                                            className='h-5 w-5 shrink-0 text-brand-blue'
                                            aria-hidden='true'
                                        />
                                        {meta.positions} poste
                                        {meta.positions > 1 ? "s" : ""}{" "}
                                        disponible
                                        {meta.positions > 1 ? "s" : ""}
                                    </span>
                                )}
                            </div>

                            <section
                                className='mt-10'
                                aria-labelledby='job-description-heading'
                            >
                                <h2
                                    id='job-description-heading'
                                    className='font-montserrat text-xl font-bold text-gray-900 sm:text-2xl'
                                >
                                    {RECRUITMENT_JOB_UI.descriptionHeading}
                                </h2>
                                <div className='mt-4 whitespace-pre-wrap font-montserrat text-base leading-relaxed text-gray-600'>
                                    {descriptionText ||
                                        RECRUITMENT_JOB_UI.noDescription}
                                </div>
                            </section>

                            {questionsFetchError && (
                                <p
                                    className='mt-8 rounded-2xl border border-coral-red/30 bg-red-50/80 px-4 py-3 text-center font-montserrat text-sm text-coral-red'
                                    role='alert'
                                >
                                    {questionsFetchError}
                                </p>
                            )}

                            <div className='mt-10'>
                                <button
                                    type='button'
                                    onClick={handlePostuler}
                                    disabled={applying}
                                    className='inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-blue px-8 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-opacity hover:opacity-95 disabled:opacity-60'
                                >
                                    {applying ? (
                                        <span className='inline-flex items-center gap-2'>
                                            <span
                                                className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'
                                                aria-hidden='true'
                                            />
                                            Chargement…
                                        </span>
                                    ) : (
                                        APPLICATION_FORM_LABELS.apply
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </main>

            <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
                <div
                    className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
                    aria-hidden='true'
                />
                <div className='relative'>
                    <Footer />
                </div>
            </div>

            {showForm && job && (
                <ApplicationForm
                    key={String(
                        job.id ??
                            job.uuid ??
                            job.slug ??
                            job._id ??
                            job.job_offer_id ??
                            "",
                    )}
                    jobOffer={job}
                    questions={questions}
                    onClose={handleCloseForm}
                />
            )}
        </>
    );
};

export default RecruitmentOfferPage;
