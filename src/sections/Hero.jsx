import { Button } from "../components";
import {
  heroBadge,
  heroCtaPrimaryHref,
  heroCtaPrimaryLabel,
  heroCtaSecondaryHref,
  heroCtaSecondaryLabel,
  heroHeadline,
  heroMicrotext,
  heroSubheadline,
} from "../constants";

const Hero = () => {
  return (
    <section
      id='home'
      className='relative w-full overflow-hidden bg-transparent'
    >
      <div className='relative max-container padding-x pt-6 sm:pt-16 lg:pt-28 pb-8 sm:pb-14 lg:pb-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='inline-flex items-center rounded-full border border-airge-border bg-airge-surface px-4 py-1.5'>
            <span className='font-montserrat text-[11px] sm:text-xs font-semibold text-airge-primary'>
              {heroBadge}
            </span>
          </div>

          <h1 className='mt-6 font-palanquin font-extrabold text-airge-foreground text-[28px] leading-[1.12] tracking-tight sm:text-4xl sm:leading-[1.1] lg:text-[56px] lg:leading-[1.08] lg:tracking-[-1.2px]'>
            {heroHeadline}
          </h1>

          <p className='mt-4 sm:mt-6 font-montserrat text-base leading-6 text-airge-muted sm:text-lg sm:leading-8'>
            {heroSubheadline}
          </p>

          <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
            <Button
              label={heroCtaPrimaryLabel}
              backgroundColor='bg-airge-primary hover:bg-airge-primary-hover'
              textColor='text-airge-ink'
              borderColor='border-airge-primary'
              fullWidth
              href={heroCtaPrimaryHref}
            />
            <a
              href={heroCtaSecondaryHref}
              className='inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center rounded-full border border-airge-border bg-airge-surface/50 px-7 py-4 font-montserrat text-lg font-bold leading-none text-airge-foreground transition-colors hover:bg-airge-surface hover:border-airge-primary/50'
            >
              {heroCtaSecondaryLabel}
            </a>
          </div>

          <p className='mt-6 font-montserrat text-xs leading-5 text-airge-muted sm:text-sm sm:leading-6'>
            {heroMicrotext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
