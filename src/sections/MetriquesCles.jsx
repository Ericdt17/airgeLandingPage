import {
  impactBlocks,
  impactClosing,
  impactHeadline,
  impactIntro,
} from "../constants";

const MetriquesCles = () => {
  return (
    <section
      id='impact'
      aria-labelledby='impact-heading'
      className='relative overflow-hidden scroll-mt-24 bg-airge-bg-deep'
    >
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <div
          className='pointer-events-none absolute right-[-220px] top-[-260px] h-[520px] w-[520px] rounded-full bg-airge-primary/20 blur-3xl'
          aria-hidden='true'
        />

        <h2
          id='impact-heading'
          className='mx-auto max-w-4xl text-center font-montserrat text-2xl font-bold leading-snug text-airge-foreground sm:text-3xl sm:leading-tight md:text-4xl lg:text-[44px] lg:leading-[48px]'
        >
          {impactHeadline}
        </h2>

        <p className='mx-auto mt-4 max-w-3xl text-center font-montserrat text-base leading-7 text-airge-muted sm:mt-6 sm:text-lg sm:leading-8'>
          {impactIntro}
        </p>

        <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-8'>
          {impactBlocks.map((block, index) => (
            <li
              key={block.title}
              className='rounded-3xl border border-airge-border bg-airge-surface/60 p-6 backdrop-blur-md sm:p-8'
            >
              <p className='font-montserrat text-xs font-semibold uppercase tracking-wide text-airge-primary'>
                {index + 1}
              </p>
              <h3 className='mt-3 font-montserrat text-lg font-bold leading-snug text-airge-foreground sm:text-xl'>
                {block.title}
              </h3>
              <p className='mt-3 font-montserrat text-sm leading-relaxed text-airge-muted sm:text-base sm:leading-7'>
                {block.description}
              </p>
            </li>
          ))}
        </ul>

        <p className='mx-auto mt-10 max-w-3xl rounded-2xl border border-airge-border bg-airge-surface/60 px-6 py-5 text-center font-montserrat text-base leading-7 text-airge-foreground backdrop-blur-md sm:mt-12 sm:text-lg sm:leading-8'>
          {impactClosing}
        </p>
      </div>
    </section>
  );
};

export default MetriquesCles;
