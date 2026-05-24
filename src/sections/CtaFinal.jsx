import { WhatsAppIcon } from "../components";
import {
  ctaFinalPrimaryHref,
  ctaFinalPrimaryLabel,
  ctaFinalSecondaryHref,
  ctaFinalSecondaryLabel,
  ctaFinalHeading,
  ctaFinalSubheading,
} from "../constants";

const CtaFinal = () => {
  return (
    <section
      id='cta-final'
      className='scroll-mt-24 bg-airge-bg'
    >
      <div className='max-container padding-x py-12 sm:py-16 lg:py-20'>
        <div className='relative overflow-hidden rounded-[32px] sm:rounded-[48px] bg-airge-bg-deep border border-airge-border shadow-cta-final'>
          <div
            className='pointer-events-none absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]'
            aria-hidden='true'
          />
          <div className='relative px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-20 lg:py-20'>
            <h2 className='font-montserrat text-2xl font-extrabold leading-snug text-airge-foreground sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-[48px]'>
              {ctaFinalHeading}
            </h2>
            <p className='mx-auto mt-4 sm:mt-6 max-w-2xl font-montserrat text-sm leading-6 text-airge-muted sm:text-base sm:leading-7 md:text-lg md:leading-8'>
              {ctaFinalSubheading}
            </p>
            <div className='mt-8 sm:mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4'>
              <a
                href={ctaFinalPrimaryHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-[54px] sm:min-h-[70px] min-w-0 sm:min-w-[200px] items-center justify-center gap-2 rounded-full bg-airge-primary px-8 sm:px-10 font-montserrat text-base sm:text-lg font-bold text-airge-ink shadow-lg transition-colors hover:bg-airge-primary-hover'
              >
                <WhatsAppIcon className='h-5 w-5 shrink-0' />
                {ctaFinalPrimaryLabel}
              </a>
              <a
                href={ctaFinalSecondaryHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-[54px] sm:min-h-[70px] min-w-0 sm:min-w-[200px] items-center justify-center gap-2 rounded-full border border-airge-border bg-airge-surface/50 px-8 sm:px-10 font-montserrat text-base sm:text-lg font-bold text-airge-foreground backdrop-blur-sm transition-colors hover:bg-airge-surface'
              >
                <WhatsAppIcon className='h-5 w-5 shrink-0' />
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
