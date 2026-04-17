import {
  ctaFinalPrimaryLabel,
  ctaFinalSecondaryHref,
  ctaFinalSecondaryLabel,
  ctaFinalHeading,
  ctaFinalSubheading,
} from "../constants";
import { useModal } from "../context/ModalContext";

const CtaFinal = () => {
  const { open } = useModal();

  return (
    <section
      id='cta-final'
      className='scroll-mt-24 bg-white'
    >
      <div className='max-container padding-x py-12 sm:py-16 lg:py-20'>
        <div className='relative overflow-hidden rounded-[32px] sm:rounded-[48px] bg-brand-blue shadow-cta-final'>
          <div
            className='pointer-events-none absolute inset-0 bg-hero-grid opacity-10'
            aria-hidden='true'
          />
          <div className='relative px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-20 lg:py-20'>
            <h2 className='font-montserrat text-2xl font-extrabold leading-snug text-white sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-[48px]'>
              {ctaFinalHeading}
            </h2>
            <p className='mx-auto mt-4 sm:mt-6 max-w-2xl font-montserrat text-sm leading-6 text-blue-100 sm:text-base sm:leading-7 md:text-lg md:leading-8'>
              {ctaFinalSubheading}
            </p>
            <div className='mt-8 sm:mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4'>
              <button
                type='button'
                onClick={open}
                className='inline-flex min-h-[54px] sm:min-h-[70px] min-w-0 sm:min-w-[200px] items-center justify-center rounded-full bg-white px-8 sm:px-10 font-montserrat text-base sm:text-lg font-bold text-brand-blue shadow-lg transition-opacity hover:opacity-95'
              >
                {ctaFinalPrimaryLabel}
              </button>
              <a
                href={ctaFinalSecondaryHref}
                className='inline-flex min-h-[54px] sm:min-h-[70px] min-w-0 sm:min-w-[200px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 sm:px-10 font-montserrat text-base sm:text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20'
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
