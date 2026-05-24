import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";
import {
  pricingCtaHref,
  pricingCtaLabel,
  pricingHeadline,
  pricingIntro,
  pricingOffer,
  pricingValuePhrase,
} from "../constants";

const Tarifs = () => {
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

      <div className='relative max-container padding-x py-20 sm:py-24 lg:py-28'>

        {/* Header */}
        <div className='mx-auto max-w-2xl text-center'>
          <div className='inline-flex items-center gap-2 rounded-full border border-airge-primary/30 bg-airge-primary/10 px-4 py-1.5'>
            <SparklesIcon className='h-3.5 w-3.5 text-airge-primary' aria-hidden='true' />
            <span className='font-montserrat text-xs font-semibold uppercase tracking-widest text-airge-primary'>
              Offre de lancement
            </span>
          </div>

          <h2
            id='tarifs-heading'
            className='mt-5 font-montserrat text-3xl font-extrabold tracking-tight text-airge-foreground sm:text-4xl sm:leading-tight'
          >
            {pricingHeadline}
          </h2>

          <p className='mt-4 font-montserrat text-base leading-7 text-airge-muted sm:text-lg sm:leading-8'>
            {pricingIntro}
          </p>
        </div>

        {/* Card */}
        <div className='relative mx-auto mt-14 max-w-2xl'>
          {/* Glow */}
          <div
            className='absolute -inset-3 rounded-[40px] bg-airge-primary/25 blur-2xl'
            aria-hidden='true'
          />

          <article className='relative overflow-hidden rounded-[32px] bg-airge-primary shadow-cta-final ring-1 ring-airge-primary-light/20'>

            {/* Card top strip */}
            <div className='flex items-center justify-between border-b border-airge-ink/10 px-8 py-5 sm:px-10'>
              <div>
                <p className='font-montserrat text-xs font-bold uppercase tracking-[0.14em] text-airge-ink/60'>
                  {pricingOffer.title}
                </p>
                <p className='mt-1 font-montserrat text-sm leading-snug text-airge-ink/80 sm:text-base'>
                  {pricingOffer.subtitle}
                </p>
              </div>
              <span className='hidden shrink-0 rounded-full bg-airge-ink/10 px-3 py-1 font-montserrat text-xs font-semibold text-airge-ink sm:block'>
                Accès complet
              </span>
            </div>

            {/* Features */}
            <div className='px-8 py-8 sm:px-10'>
              <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3.5'>
                {pricingOffer.bullets.map((bullet) => (
                  <li key={bullet} className='flex items-start gap-3'>
                    <CheckCircleIcon
                      className='mt-0.5 h-5 w-5 shrink-0 text-airge-ink/70'
                      aria-hidden='true'
                    />
                    <span className='font-montserrat text-sm leading-6 text-airge-ink sm:text-[15px]'>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value phrase + CTA */}
            <div className='border-t border-airge-ink/10 bg-airge-ink/5 px-8 py-7 sm:px-10'>
              <p className='font-montserrat text-sm leading-7 text-airge-ink/80 sm:text-base sm:leading-8'>
                {pricingValuePhrase}
              </p>

              <a
                href={pricingCtaHref}
                className='mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-airge-ink px-6 py-4 font-montserrat text-base font-bold leading-none text-airge-primary transition-all duration-200 hover:bg-airge-bg-deep hover:shadow-lg sm:text-lg'
              >
                {pricingCtaLabel}
                <span aria-hidden='true'>→</span>
              </a>
            </div>

          </article>
        </div>

      </div>
    </section>
  );
};

export default Tarifs;
