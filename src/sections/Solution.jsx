import { ecosystemEyebrow, ecosystemHeadline, ecosystemShowcases } from "../constants";

const Solution = () => {
  return (
    <section id='solution' className='relative max-container scroll-mt-24'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
      <p className='text-center font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
        {ecosystemEyebrow}
      </p>
      <h2 className='mx-auto mt-4 max-w-4xl text-center font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'>
        {ecosystemHeadline}
      </h2>

      <ul className='mt-10 grid list-none grid-cols-1 gap-8 sm:gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8'>
        {ecosystemShowcases.map(({ image, title, description }) => (
          <li
            key={title}
            className='flex flex-col items-center text-center'
          >
            <div className='flex w-full justify-center'>
              <img
                src={image}
                alt={`Aperçu application LivSight — ${title}`}
                className='h-auto max-h-[520px] w-auto max-w-[280px] object-contain'
              />
            </div>
            <h3 className='mt-8 font-montserrat text-2xl font-bold text-gray-900'>
              {title}
            </h3>
            <p className='mt-3 max-w-sm font-montserrat text-base leading-6 text-gray-500'>
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Solution;
