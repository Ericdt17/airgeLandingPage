import {
  problemEyebrow,
  problemHeadline,
  problemIntro,
  problemPainPoints,
  problemPivot,
  problemResult,
  problemTransition,
} from "../constants";

const LeProbleme = () => {
  return (
    <section
      id='probleme'
      className='relative overflow-hidden scroll-mt-24 rounded-[32px] bg-airge-bg-subtle/80'
    >
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container px-6 py-10 sm:px-10 sm:py-14 lg:px-14'>
        <p className='font-montserrat text-sm font-semibold text-airge-primary'>
          {problemEyebrow}
        </p>
        <h2 className='mt-4 max-w-4xl font-montserrat text-2xl font-bold leading-snug text-airge-foreground sm:text-3xl sm:leading-tight md:text-4xl lg:text-[44px] lg:leading-[48px]'>
          {problemHeadline}
        </h2>
        <div className='mt-4 h-1.5 w-24 rounded-full bg-airge-primary' aria-hidden='true' />

        <div className='mt-8 max-w-3xl space-y-5'>
          <p className='font-montserrat text-base leading-7 text-airge-muted sm:text-lg'>
            {problemIntro}
          </p>
          <p className='font-montserrat text-base font-semibold leading-7 text-airge-foreground sm:text-lg'>
            {problemPivot}
          </p>
          <ul className='list-none space-y-2 border-l-2 border-airge-border pl-5'>
            {problemPainPoints.map((line) => (
              <li
                key={line}
                className='font-montserrat text-base leading-7 text-airge-muted sm:text-lg'
              >
                {line}
              </li>
            ))}
          </ul>
          <p className='font-montserrat text-base font-semibold leading-7 text-airge-foreground sm:text-lg'>
            {problemResult}
          </p>
        </div>

        <p className='mt-10 max-w-3xl rounded-2xl border border-airge-border bg-airge-surface px-6 py-5 font-montserrat text-base leading-7 text-airge-foreground sm:text-lg sm:leading-8'>
          {problemTransition}
        </p>
      </div>
    </section>
  );
};

export default LeProbleme;
