import {
  ctaFinalHeading,
  ctaFinalPrimaryHref,
  ctaFinalPrimaryLabel,
  ctaFinalSecondaryHref,
  ctaFinalSecondaryLabel,
  ctaFinalSubheading,
} from "../constants";

const isExternalHref = (href) => /^https?:\/\//i.test(href);

const CtaFinal = () => {
  const primaryExternal = isExternalHref(ctaFinalPrimaryHref);
  const secondaryExternal = isExternalHref(ctaFinalSecondaryHref);

  return (
    <section id='cta-final' className='scroll-mt-24 bg-airge-bg'>
      <div className='max-container padding-x py-12 sm:py-16 lg:py-20'>
        <div className='relative overflow-hidden rounded-[32px] border border-airge-border bg-airge-bg-deep shadow-cta-final sm:rounded-[48px]'>
          <div
            className='pointer-events-none absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]'
            aria-hidden='true'
          />
          <div className='relative px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-20 lg:py-20'>
            <h2 className='font-montserrat text-2xl font-extrabold leading-snug text-airge-foreground sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-[48px]'>
              {ctaFinalHeading}
            </h2>
            <p className='mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-6 text-airge-muted sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8'>
              {ctaFinalSubheading}
            </p>
            <div className='mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4'>
              <a
                href={ctaFinalPrimaryHref}
                {...(primaryExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className='inline-flex min-h-[54px] min-w-0 items-center justify-center rounded-full bg-airge-primary px-8 font-montserrat text-base font-bold text-airge-ink shadow-lg transition-colors hover:bg-airge-primary-hover sm:min-h-[70px] sm:min-w-[200px] sm:px-10 sm:text-lg'
              >
                {ctaFinalPrimaryLabel}
              </a>
              <a
                href={ctaFinalSecondaryHref}
                {...(secondaryExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className='inline-flex min-h-[54px] min-w-0 items-center justify-center rounded-full border border-airge-border bg-airge-surface/50 px-8 font-montserrat text-base font-bold text-airge-foreground backdrop-blur-sm transition-colors hover:bg-airge-surface sm:min-h-[70px] sm:min-w-[200px] sm:px-10 sm:text-lg'
              >
                {ctaFinalSecondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
