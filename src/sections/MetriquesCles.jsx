import { keyMetrics } from "../constants";

const MetriquesCles = () => {
  return (
    <section
      id='impact'
      aria-labelledby='impact-heading'
      className='relative overflow-hidden scroll-mt-24 bg-brand-blue'
    >
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.06]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <h2
          id='impact-heading'
          className='sr-only'
        >
          Métriques clés
        </h2>
        <ul className='grid list-none grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-12'>
          {keyMetrics.map(({ value, label, sublabel }) => (
            <li
              key={label}
              className='flex flex-col items-center text-center'
            >
              <p className='font-montserrat text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[48px]'>
                {value}
              </p>
              <p className='mt-2 font-montserrat text-sm font-medium uppercase tracking-[1.4px] text-blue-100'>
                {label}
              </p>
              <p className='mt-2 max-w-xs font-montserrat text-xs leading-4 text-blue-100/80'>
                {sublabel}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MetriquesCles;
