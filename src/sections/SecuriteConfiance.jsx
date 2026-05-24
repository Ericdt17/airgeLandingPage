import {
  howItWorksClosing,
  howItWorksHeading,
  howItWorksIntro,
  howItWorksSteps,
} from "../constants";

const SecuriteConfiance = () => {
  return (
    <section
      id='fonctionnalites'
      className='relative overflow-hidden scroll-mt-24 rounded-[32px] bg-airge-bg-subtle/80'
    >
      <div
        className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]'
        aria-hidden='true'
      />

      <div className='relative max-container px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20'>
        <h2 className='text-center font-montserrat text-2xl font-bold leading-snug text-airge-foreground sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'>
          {howItWorksHeading}
        </h2>

        <p className='mx-auto mt-4 max-w-2xl text-center font-montserrat text-base leading-7 text-airge-muted sm:mt-6 sm:text-lg'>
          {howItWorksIntro}
        </p>

        <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:gap-8'>
          {howItWorksSteps.map((step) => (
            <li
              key={step.number}
              className='relative overflow-hidden rounded-3xl border border-airge-border bg-airge-surface px-6 py-8 shadow-soft-card sm:px-8 sm:py-9'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-airge-bg-deep'>
                <span className='font-montserrat text-lg font-bold text-airge-primary'>
                  {step.number}
                </span>
              </div>

              <h3 className='mt-5 font-montserrat text-lg font-bold leading-snug text-airge-foreground sm:text-xl'>
                {step.title}
              </h3>

              <p className='mt-3 font-montserrat text-sm leading-relaxed text-airge-muted'>
                {step.description}
              </p>
            </li>
          ))}
        </ul>

        <p className='mx-auto mt-10 max-w-3xl rounded-2xl border border-airge-border bg-airge-surface px-6 py-5 text-center font-montserrat text-base leading-7 text-airge-foreground sm:mt-12 sm:text-lg sm:leading-8'>
          {howItWorksClosing}
        </p>
      </div>
    </section>
  );
};

export default SecuriteConfiance;
