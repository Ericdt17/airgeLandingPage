import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";
import {
  pricingBadgeLabel,
  pricingCtaFootnote,
  pricingCtaHref,
  pricingCtaLabel,
  pricingHeadline,
  pricingIntro,
  pricingOffer,
  pricingPaymentLabel,
  pricingPaymentMethods,
  pricingPriceLine,
  pricingPriceSubline,
  pricingValuePhrase,
} from "../constants";

const isExternalHref = (href) => /^https?:\/\//i.test(href);

const Tarifs = () => {
  const ctaExternal = isExternalHref(pricingCtaHref);
  const showSectionIntro = Boolean(pricingIntro?.trim());
  const showPriceSubline = Boolean(pricingPriceSubline?.trim());
  const showValuePhrase = Boolean(pricingValuePhrase?.trim());

  return (
    <section
      id='tarifs'
      aria-labelledby='tarifs-heading'
      className='relative overflow-hidden bg-airge-bg-subtle'
    >
      <div
        className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.10]'
        aria-hidden='true'
      />

      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <div className='mx-auto max-w-xl text-center'>
          <div className='inline-flex items-center gap-2 rounded-full border border-airge-primary/30 bg-airge-primary/10 px-4 py-1.5'>
            <SparklesIcon className='h-3.5 w-3.5 text-airge-primary' aria-hidden='true' />
            <span className='font-montserrat text-xs font-semibold uppercase tracking-widest text-airge-primary'>
              {pricingBadgeLabel}
            </span>
          </div>

          {showSectionIntro ? (
            <>
              <h2
                id='tarifs-heading'
                className='mt-5 font-montserrat text-3xl font-extrabold tracking-tight text-airge-foreground sm:text-4xl sm:leading-tight'
              >
                {pricingHeadline}
              </h2>
              <p className='mt-4 font-montserrat text-base leading-7 text-airge-muted sm:text-lg sm:leading-8'>
                {pricingIntro}
              </p>
            </>
          ) : (
            <h2
              id='tarifs-heading'
              className='sr-only'
            >
              {pricingHeadline}
            </h2>
          )}
        </div>

        <div className='relative mx-auto mt-10 max-w-lg sm:mt-12'>
          <div
            className='absolute -inset-3 rounded-[36px] bg-airge-primary/25 blur-2xl'
            aria-hidden='true'
          />

          <article className='relative overflow-hidden rounded-[28px] bg-airge-primary shadow-cta-final ring-1 ring-airge-primary-light/20'>
            <div className='border-b border-airge-ink/10 px-6 py-6 text-center sm:px-8'>
              <p className='font-montserrat text-lg font-bold text-airge-ink sm:text-xl'>
                {pricingHeadline}
              </p>
              <p className='mt-2 font-montserrat text-4xl font-extrabold tracking-tight text-airge-ink sm:text-5xl'>
                {pricingPriceLine}
              </p>
              {showPriceSubline ? (
                <p className='mt-2 font-montserrat text-sm text-airge-ink/80'>
                  {pricingPriceSubline}
                </p>
              ) : null}

              <div className='mt-5'>
                <p className='font-montserrat text-xs font-semibold uppercase tracking-wide text-airge-ink/70'>
                  {pricingPaymentLabel}
                </p>
                <ul className='mt-3 flex list-none flex-wrap items-center justify-center gap-3'>
                  {pricingPaymentMethods.map((method) => (
                    <li key={method.name}>
                      <img
                        src={method.logo}
                        alt={method.name}
                        width={120}
                        height={32}
                        className='h-8 w-auto rounded-md object-contain'
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='px-6 py-6 sm:px-8'>
              <p className='font-montserrat text-sm font-bold uppercase tracking-wide text-airge-ink/70'>
                {pricingOffer.title}
              </p>
              <ul className='mt-4 flex list-none flex-col gap-2.5'>
                {pricingOffer.bullets.map((bullet) => (
                  <li key={bullet} className='flex items-start gap-3'>
                    <CheckCircleIcon
                      className='mt-0.5 h-4 w-4 shrink-0 text-airge-ink/70'
                      aria-hidden='true'
                    />
                    <span className='font-montserrat text-sm leading-6 text-airge-ink'>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='border-t border-airge-ink/10 bg-airge-ink/5 px-6 py-6 sm:px-8'>
              {showValuePhrase ? (
                <p className='mb-5 font-montserrat text-sm leading-7 text-airge-ink/80'>
                  {pricingValuePhrase}
                </p>
              ) : null}

              <a
                href={pricingCtaHref}
                {...(ctaExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className='flex w-full items-center justify-center gap-2 rounded-full bg-airge-ink px-6 py-3.5 font-montserrat text-base font-bold leading-none text-airge-primary transition-all duration-200 hover:bg-airge-bg-deep hover:shadow-lg'
              >
                {pricingCtaLabel}
                <span aria-hidden='true'>→</span>
              </a>

              <p className='mt-3 text-center font-montserrat text-xs leading-5 text-airge-ink/70'>
                {pricingCtaFootnote}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
