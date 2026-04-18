import { howItWorksHeading, howItWorksSteps } from "../constants";

const SecuriteConfiance = () => {
  return (
    <section
      id='fonctionnalites'
      className='relative overflow-hidden scroll-mt-24 rounded-[32px] bg-gray-50/80'
    >
      <div
        className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]'
        aria-hidden='true'
      />

      <div className='relative max-container px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20'>
        <h2 className='text-center font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'>
          {howItWorksHeading}
        </h2>

        <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8'>
          {howItWorksSteps.map((step) => (
            <li
              key={step.number}
              className='relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-8 py-9 shadow-soft-card'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
                <span className='font-montserrat text-lg font-bold text-gray-900'>
                  {step.number}
                </span>
              </div>

              <h3 className='mt-5 font-montserrat text-xl font-bold leading-snug text-gray-900 sm:text-2xl'>
                {step.title}
              </h3>

              <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SecuriteConfiance;
