import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  solutionBody,
  solutionClosing,
  solutionEyebrow,
  solutionHeadline,
  solutionPillars,
} from "../constants";

const pillarIconMap = {
  ia: SparklesIcon,
  training: AcademicCapIcon,
  support: ChatBubbleLeftRightIcon,
};

const Solution = () => {
  return (
    <section id='solution' className='relative max-container scroll-mt-24'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
      <div className='relative grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className='order-2 lg:order-1 flex justify-center'>
          <div className='w-full max-w-xl rounded-[40px] border border-airge-border bg-airge-surface p-6 shadow-soft-card sm:p-8'>
            <ul className='flex list-none flex-col gap-4'>
              {solutionPillars.map(({ iconId, title, description }) => {
                const Icon = pillarIconMap[iconId];
                return (
                  <li
                    key={iconId}
                    className='flex gap-4 rounded-2xl border border-airge-border bg-airge-bg-subtle/80 p-4'
                  >
                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-airge-bg-deep'>
                      <Icon className='h-5 w-5 text-airge-primary' aria-hidden='true' />
                    </div>
                    <div className='min-w-0'>
                      <h3 className='font-montserrat text-base font-bold text-airge-foreground'>
                        {title}
                      </h3>
                      <p className='mt-1 font-montserrat text-sm leading-relaxed text-airge-muted'>
                        {description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className='order-1 lg:order-2'>
          <p className='font-montserrat text-sm font-semibold text-airge-primary'>
            {solutionEyebrow}
          </p>
          <h2 className='mt-4 font-montserrat text-2xl font-bold leading-snug text-airge-foreground sm:text-3xl sm:leading-tight md:text-4xl lg:text-[44px] lg:leading-[48px]'>
            {solutionHeadline}
          </h2>

          <p className='mt-5 max-w-xl font-montserrat text-base leading-7 text-airge-muted sm:text-lg'>
            {solutionBody}
          </p>
        </div>
      </div>

      <p className='relative mt-10 max-w-4xl rounded-2xl border border-airge-border bg-airge-surface px-6 py-5 font-montserrat text-base leading-7 text-airge-foreground sm:mt-12 sm:text-lg sm:leading-8 lg:mx-auto lg:text-center'>
        {solutionClosing}
      </p>
    </section>
  );
};

export default Solution;
