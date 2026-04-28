import {
    CheckCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
    APPLICATION_FORM_LABELS,
    AVAILABILITY_OPTIONS,
    MAX_CV_BYTES,
    RECRUITMENT_MODAL_TITLE,
    STATUS_LABELS,
    TRANSPORT_OPTIONS,
} from "../../constants";
import { submitApplication } from "../../services/recruitmentApi";

const RECRUITMENT_PHOTO_FIELD =
    import.meta.env.VITE_RECRUITMENT_PHOTO_FIELD ?? "photo";
const RECRUITMENT_CV_FIELD =
    import.meta.env.VITE_RECRUITMENT_CV_FIELD ?? "cv";
const RECRUITMENT_COVER_LETTER_FIELD =
    import.meta.env.VITE_RECRUITMENT_COVER_LETTER_FIELD ?? "cover_letter";
const RECRUITMENT_JOB_ID_FIELD =
    import.meta.env.VITE_RECRUITMENT_JOB_ID_FIELD ?? "job_offer_id";
const RECRUITMENT_NEIGHBORHOOD_FIELD =
    import.meta.env.VITE_RECRUITMENT_NEIGHBORHOOD_FIELD ?? "quartier";

const ACCEPTED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

const inputClass =
    "w-full rounded-2xl border border-gray-200 px-4 py-3 font-montserrat text-base text-gray-900 outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

const selectClass =
    "w-full rounded-2xl border border-gray-200 px-4 py-3 font-montserrat text-base text-gray-900 outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 bg-white";

const stringifyEntityId = (raw) => {
    if (raw == null || raw === "") return "";
    if (typeof raw === "string" || typeof raw === "number") return String(raw);
    if (typeof raw === "object") {
        if (raw.$oid) return String(raw.$oid);
        if (typeof raw.toHexString === "function") return raw.toHexString();
        const s = String(raw);
        if (s && s !== "[object Object]") return s;
    }
    return "";
};

const resolveJobId = (job) =>
    stringifyEntityId(
        job?.id ??
            job?.uuid ??
            job?.slug ??
            job?._id ??
            job?.job_offer_id,
    );

const resolveQuestionId = (q) =>
    stringifyEntityId(q?.id ?? q?.question_id ?? q?._id);

const validatePdf = (file, setErr) => {
    if (!file) return false;
    if (file.size > MAX_CV_BYTES) {
        setErr(STATUS_LABELS.cvTooLarge);
        return false;
    }
    if (file.type !== "application/pdf") {
        setErr(STATUS_LABELS.cvNotPdf);
        return false;
    }
    return true;
};

const ApplicationForm = ({
    jobOffer,
    questions: questionsProp = [],
    onClose,
    onSuccess,
}) => {
    const questions = Array.isArray(questionsProp) ? questionsProp : [];
    const hasQuestions = questions.length > 0;

    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [transport, setTransport] = useState("");
    const [availability, setAvailability] = useState("");
    const [photoFile, setPhotoFile] = useState(null);
    const [photoError, setPhotoError] = useState("");
    const [cvFile, setCvFile] = useState(null);
    const [cvError, setCvError] = useState("");
    const [coverLetterFile, setCoverLetterFile] = useState(null);
    const [coverLetterError, setCoverLetterError] = useState("");
    const [textAnswers, setTextAnswers] = useState({});
    const [mcqAnswers, setMcqAnswers] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState("idle");
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    useEffect(() => {
        setStep(1);
        setFullName("");
        setPhone("");
        setNeighborhood("");
        setTransport("");
        setAvailability("");
        setPhotoFile(null);
        setPhotoError("");
        setCvFile(null);
        setCvError("");
        setCoverLetterFile(null);
        setCoverLetterError("");
        setTextAnswers({});
        setMcqAnswers({});
        setFieldErrors({});
        setSubmitStatus("idle");
        setSubmitError("");
    }, [jobOffer, questionsProp]);

    const handlePhotoChange = (e) => {
        const file = e.target.files?.[0];
        setPhotoError("");
        if (!file) {
            setPhotoFile(null);
            return;
        }
        if (file.size > MAX_CV_BYTES) {
            setPhotoError(STATUS_LABELS.photoTooLarge);
            setPhotoFile(null);
            e.target.value = "";
            return;
        }
        if (!ACCEPTED_PHOTO_TYPES.includes(file.type)) {
            setPhotoError(STATUS_LABELS.photoInvalidType);
            setPhotoFile(null);
            e.target.value = "";
            return;
        }
        setPhotoFile(file);
    };

    const handleCvChange = (e) => {
        const file = e.target.files?.[0];
        setCvError("");
        if (!file) {
            setCvFile(null);
            return;
        }
        if (!validatePdf(file, setCvError)) {
            setCvFile(null);
            e.target.value = "";
            return;
        }
        setCvFile(file);
        if (fieldErrors.cv) {
            setFieldErrors((prev) => ({ ...prev, cv: false }));
        }
    };

    const handleCoverLetterChange = (e) => {
        const file = e.target.files?.[0];
        setCoverLetterError("");
        if (!file) {
            setCoverLetterFile(null);
            return;
        }
        if (!validatePdf(file, setCoverLetterError)) {
            setCoverLetterFile(null);
            e.target.value = "";
            return;
        }
        setCoverLetterFile(file);
        if (fieldErrors.coverLetter) {
            setFieldErrors((prev) => ({ ...prev, coverLetter: false }));
        }
    };

    const validateStep1 = () => {
        const err = {};
        if (!fullName.trim()) err.fullName = true;
        if (!phone.trim()) err.phone = true;
        if (!cvFile) err.cv = true;
        else if (!validatePdf(cvFile, setCvError)) err.cv = true;
        if (!coverLetterFile) err.coverLetter = true;
        else if (!validatePdf(coverLetterFile, setCoverLetterError))
            err.coverLetter = true;
        setFieldErrors(err);
        return Object.keys(err).length === 0;
    };

    const validateStep2 = () => {
        const err = {};
        for (const q of questions) {
            if (!q.is_required) continue;
            const id = resolveQuestionId(q);
            if (!id) continue;
            if (q.question_type === "text" || q.question_type === "long_text") {
                if (!(textAnswers[id] || "").trim()) err[id] = true;
            } else if (q.question_type === "mcq" || q.question_type === "choice") {
                if (!mcqAnswers[id]) err[id] = true;
            }
        }
        setFieldErrors(err);
        return Object.keys(err).length === 0;
    };

    const buildAnswersJson = () => {
        const rows = [];
        for (const q of questions) {
            const id = resolveQuestionId(q);
            if (!id) continue;
            if (q.question_type === "text" || q.question_type === "long_text") {
                rows.push({
                    question_id: id,
                    answer_text: (textAnswers[id] || "").trim(),
                });
            } else {
                rows.push({
                    question_id: id,
                    answer_text: mcqAnswers[id] || "",
                });
            }
        }
        return JSON.stringify(rows);
    };

    const appendCommonFields = (formData) => {
        const jobId = resolveJobId(jobOffer);
        if (!jobId) return null;
        formData.append(RECRUITMENT_JOB_ID_FIELD, jobId);
        formData.append("full_name", fullName.trim());
        formData.append("phone", phone.trim());
        const n = neighborhood.trim();
        if (n) formData.append(RECRUITMENT_NEIGHBORHOOD_FIELD, n);
        if (transport) formData.append("transport", transport);
        if (availability) formData.append("availability", availability);
        if (photoFile) formData.append(RECRUITMENT_PHOTO_FIELD, photoFile, photoFile.name);
        formData.append(RECRUITMENT_CV_FIELD, cvFile, cvFile.name);
        formData.append(
            RECRUITMENT_COVER_LETTER_FIELD,
            coverLetterFile,
            coverLetterFile.name,
        );
        formData.append(
            "answers",
            hasQuestions ? buildAnswersJson() : "[]",
        );
        return jobId;
    };

    const runSubmit = async () => {
        setSubmitError("");
        if (!validateStep1()) return;

        const jobId = resolveJobId(jobOffer);
        if (!jobId) {
            setSubmitError(STATUS_LABELS.submitErrorMissingJobId);
            return;
        }

        const formData = new FormData();
        if (!appendCommonFields(formData)) {
            setSubmitError(STATUS_LABELS.submitErrorMissingJobId);
            return;
        }

        setSubmitStatus("loading");
        const result = await submitApplication(formData);

        if (result.success) {
            setSubmitStatus("success");
            return;
        }

        setSubmitStatus("idle");
        if (result?.error === "network") {
            // Aucun body lisible (CORS / proxy / réseau). On affiche un message actionnable.
            setSubmitError(STATUS_LABELS.submitErrorNetwork);
            return;
        }
        if (result.status === 413) {
            setSubmitError(STATUS_LABELS.submitError413);
            return;
        }
        if (result.status === 409) {
            setSubmitError(STATUS_LABELS.submitError409);
            return;
        }
        if (result.status === 503) {
            setSubmitError(STATUS_LABELS.submitError503);
            return;
        }
        if (result.status === 400) {
            setSubmitError(
                result.message || STATUS_LABELS.submitError400Fallback,
            );
            return;
        }
        if (result?.message) {
            setSubmitError(result.message);
            return;
        }
        setSubmitError(STATUS_LABELS.submitErrorGeneric);
    };

    const handleNext = () => {
        if (!validateStep1()) return;
        if (!hasQuestions) {
            runSubmit();
            return;
        }
        setStep(2);
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep2()) return;
        await runSubmit();
    };

    const handleCloseSuccess = () => {
        if (typeof onSuccess === "function") {
            onSuccess();
        }
        onClose();
    };

    const step1Fields = (
        <>
            <p className='font-montserrat text-sm font-semibold text-brand-blue'>
                {APPLICATION_FORM_LABELS.step1Title}
            </p>
            <div>
                <label
                    htmlFor='full_name'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.fullName} *
                </label>
                <input
                    id='full_name'
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.fullName
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                    autoComplete='name'
                />
            </div>
            <div>
                <label
                    htmlFor='phone'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.phone} *
                </label>
                <input
                    id='phone'
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={
                        APPLICATION_FORM_LABELS.phonePlaceholder
                    }
                    className={`${inputClass} mt-1 ${
                        fieldErrors.phone
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                    autoComplete='tel'
                />
            </div>
            <div>
                <label
                    htmlFor='neighborhood'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.neighborhood}
                </label>
                <input
                    id='neighborhood'
                    type='text'
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className={`${inputClass} mt-1`}
                />
            </div>
            <div>
                <label
                    htmlFor='transport'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.transport}
                </label>
                <select
                    id='transport'
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    className={`${selectClass} mt-1`}
                >
                    <option value=''>
                        {APPLICATION_FORM_LABELS.selectTransport}
                    </option>
                    {TRANSPORT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label
                    htmlFor='availability'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.availability}
                </label>
                <select
                    id='availability'
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className={`${selectClass} mt-1`}
                >
                    <option value=''>
                        {APPLICATION_FORM_LABELS.selectAvailability}
                    </option>
                    {AVAILABILITY_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label
                    htmlFor='photo'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.photo}
                </label>
                <input
                    id='photo'
                    type='file'
                    accept='image/jpeg,image/png,image/webp'
                    onChange={handlePhotoChange}
                    className='mt-2 w-full font-montserrat text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white'
                />
                {photoFile && (
                    <p className='mt-2 font-montserrat text-xs text-gray-600'>
                        {photoFile.name}
                    </p>
                )}
                {photoError && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {photoError}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='cv'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.cv} *
                </label>
                <input
                    id='cv'
                    type='file'
                    accept='.pdf,application/pdf'
                    onChange={handleCvChange}
                    className='mt-2 w-full font-montserrat text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white'
                />
                {cvFile && (
                    <p className='mt-2 font-montserrat text-xs text-gray-600'>
                        {cvFile.name}
                    </p>
                )}
                {(cvError || fieldErrors.cv) && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {cvError || "CV requis (PDF, max 5 Mo)."}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='cover_letter'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.coverLetter} *
                </label>
                <input
                    id='cover_letter'
                    type='file'
                    accept='.pdf,application/pdf'
                    onChange={handleCoverLetterChange}
                    className='mt-2 w-full font-montserrat text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white'
                />
                {coverLetterFile && (
                    <p className='mt-2 font-montserrat text-xs text-gray-600'>
                        {coverLetterFile.name}
                    </p>
                )}
                {(coverLetterError || fieldErrors.coverLetter) && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {coverLetterError ||
                            "Lettre requise (PDF, max 5 Mo)."}
                    </p>
                )}
            </div>
        </>
    );

    return (
        <div
            className='fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center'
            role='presentation'
        >
            <div
                className='absolute inset-0 bg-black/40 backdrop-blur-sm'
                onClick={
                    submitStatus === "loading" ? undefined : onClose
                }
                aria-hidden='true'
            />

            <div
                className='relative max-h-[min(90vh,800px)] w-full max-w-lg overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl sm:rounded-[32px] sm:p-8'
                role='dialog'
                aria-modal='true'
                aria-labelledby='application-modal-title'
            >
                <button
                    type='button'
                    onClick={onClose}
                    disabled={submitStatus === "loading"}
                    className='absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50'
                    aria-label='Fermer'
                >
                    <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                </button>

                {submitStatus === "success" && (
                    <div className='flex flex-col items-center py-6 text-center'>
                        <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-pale-blue'>
                            <CheckCircleIcon
                                className='h-10 w-10 text-brand-blue'
                                aria-hidden='true'
                            />
                        </div>
                        <p className='mt-6 font-montserrat text-2xl font-bold text-gray-900'>
                            {STATUS_LABELS.submitSuccessTitle}
                        </p>
                        <p className='mt-2 font-montserrat text-base leading-6 text-gray-500'>
                            {STATUS_LABELS.submitSuccessSubtitle}
                        </p>
                        <button
                            type='button'
                            onClick={handleCloseSuccess}
                            className='mt-8 rounded-full bg-brand-blue px-8 py-3 font-montserrat text-base font-bold text-white transition-opacity hover:opacity-95'
                        >
                            {APPLICATION_FORM_LABELS.close}
                        </button>
                    </div>
                )}

                {submitStatus !== "success" && (
                    <>
                        <h2
                            id='application-modal-title'
                            className='pr-10 font-montserrat text-xl font-bold text-gray-900 sm:text-2xl'
                        >
                            {RECRUITMENT_MODAL_TITLE}
                        </h2>
                        <p className='mt-1 font-montserrat text-sm text-gray-500'>
                            {jobOffer?.title ?? jobOffer?.name ?? "Poste"}
                        </p>

                        <form
                            className='mt-6 flex flex-col gap-4'
                            onSubmit={
                                step === 2 && hasQuestions
                                    ? handleFinalSubmit
                                    : (e) => e.preventDefault()
                            }
                            noValidate
                        >
                            {step === 1 && step1Fields}

                            {step === 2 && hasQuestions && (
                                <div className='flex flex-col gap-6'>
                                    <p className='font-montserrat text-sm font-semibold text-brand-blue'>
                                        {APPLICATION_FORM_LABELS.step2Title}
                                    </p>
                                    {questions
                                        .filter((q) =>
                                            Boolean(resolveQuestionId(q)),
                                        )
                                        .map((q, index) => {
                                        const qid = resolveQuestionId(q);
                                        const num = index + 1;
                                        const qtype = q.question_type || "text";
                                        if (
                                            qtype === "text" ||
                                            qtype === "long_text"
                                        ) {
                                            return (
                                                <div key={String(qid)}>
                                                    <label
                                                        htmlFor={`q-${qid}`}
                                                        className='font-montserrat text-sm font-medium text-gray-700'
                                                    >
                                                        {num}. {q.question_text}
                                                        {q.is_required
                                                            ? " *"
                                                            : ""}
                                                    </label>
                                                    <textarea
                                                        id={`q-${qid}`}
                                                        rows={4}
                                                        value={
                                                            textAnswers[qid] ||
                                                            ""
                                                        }
                                                        onChange={(e) =>
                                                            setTextAnswers(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    [qid]: e
                                                                        .target
                                                                        .value,
                                                                }),
                                                            )
                                                        }
                                                        placeholder={
                                                            APPLICATION_FORM_LABELS.textareaPlaceholder
                                                        }
                                                        className={`${inputClass} mt-1 min-h-[100px] resize-y ${
                                                            fieldErrors[qid]
                                                                ? "border-coral-red ring-2 ring-coral-red/20"
                                                                : ""
                                                        }`}
                                                    />
                                                    {fieldErrors[qid] && (
                                                        <p className='mt-1 font-montserrat text-xs text-coral-red'>
                                                            Réponse requise.
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        }
                                        const options = Array.isArray(q.options)
                                            ? q.options
                                            : [];
                                        return (
                                            <fieldset
                                                key={String(qid)}
                                                className='border-0 p-0'
                                            >
                                                <legend className='font-montserrat text-sm font-medium text-gray-700'>
                                                    {num}. {q.question_text}
                                                    {q.is_required ? " *" : ""}
                                                </legend>
                                                <div className='mt-2 flex flex-col gap-2'>
                                                    {options.map((opt, idx) => {
                                                        const val =
                                                            typeof opt ===
                                                            "string"
                                                                ? opt
                                                                : opt.value ??
                                                                  opt.label ??
                                                                  String(idx);
                                                        const lab =
                                                            typeof opt ===
                                                            "string"
                                                                ? opt
                                                                : opt.label ??
                                                                  opt.value ??
                                                                  String(idx);
                                                        return (
                                                            <label
                                                                key={`${qid}-${val}`}
                                                                className='flex cursor-pointer items-start gap-2 font-montserrat text-sm text-gray-800'
                                                            >
                                                                <input
                                                                    type='radio'
                                                                    name={`question-${qid}`}
                                                                    value={val}
                                                                    checked={
                                                                        mcqAnswers[
                                                                            qid
                                                                        ] ===
                                                                        val
                                                                    }
                                                                    onChange={() =>
                                                                        setMcqAnswers(
                                                                            (
                                                                                prev,
                                                                            ) => ({
                                                                                ...prev,
                                                                                [qid]: val,
                                                                            }),
                                                                        )
                                                                    }
                                                                    className='mt-1 h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue'
                                                                />
                                                                <span>
                                                                    {lab}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                                {fieldErrors[qid] && (
                                                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                                                        Réponse requise.
                                                    </p>
                                                )}
                                            </fieldset>
                                        );
                                    })}

                                    <div className='flex flex-col gap-3 sm:flex-row sm:justify-between'>
                                        <button
                                            type='button'
                                            onClick={() => setStep(1)}
                                            disabled={
                                                submitStatus === "loading"
                                            }
                                            className='rounded-full border border-gray-200 px-6 py-3 font-montserrat text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 disabled:opacity-50'
                                        >
                                            ← {APPLICATION_FORM_LABELS.back}
                                        </button>
                                        <button
                                            type='submit'
                                            disabled={
                                                submitStatus === "loading"
                                            }
                                            className='rounded-full bg-brand-blue px-6 py-3 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-opacity hover:opacity-95 disabled:opacity-60'
                                        >
                                            {submitStatus === "loading" ? (
                                                <span className='inline-flex items-center justify-center gap-2'>
                                                    <span
                                                        className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'
                                                        aria-hidden='true'
                                                    />
                                                    Envoi…
                                                </span>
                                            ) : (
                                                APPLICATION_FORM_LABELS.submit
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 1 && (
                                <button
                                    type='button'
                                    onClick={handleNext}
                                    disabled={submitStatus === "loading"}
                                    className='mt-2 w-full rounded-full bg-brand-blue px-6 py-3.5 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-opacity hover:opacity-95 disabled:opacity-60'
                                >
                                    {submitStatus === "loading" &&
                                    !hasQuestions ? (
                                        <span className='inline-flex items-center justify-center gap-2'>
                                            <span
                                                className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'
                                                aria-hidden='true'
                                            />
                                            Envoi…
                                        </span>
                                    ) : hasQuestions ? (
                                        `${APPLICATION_FORM_LABELS.next} →`
                                    ) : (
                                        APPLICATION_FORM_LABELS.submit
                                    )}
                                </button>
                            )}

                            {submitError && (
                                <p className='mt-2 text-center font-montserrat text-sm text-coral-red'>
                                    {submitError}
                                </p>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;
