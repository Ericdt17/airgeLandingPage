import {
  ArrowTrendingDownIcon,
  ClockIcon,
  ExclamationCircleIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { problemEyebrow, problemHeadline, problemPoints } from "../constants";

const iconMap = {
  exclamation: ExclamationCircleIcon,
  "eye-slash": EyeSlashIcon,
  clock: ClockIcon,
  "trending-down": ArrowTrendingDownIcon,
};

const LeProbleme = () => {
  return (
    <section id='probleme' className='relative max-container scroll-mt-24'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
      <p className='text-center font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
        {problemEyebrow}
      </p>
      <h2 className='mx-auto mt-4 max-w-4xl text-center font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'>
        {problemHeadline}
      </h2>

      <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-8'>
        {problemPoints.map(({ iconId, title, description }) => {
          const Icon = iconMap[iconId];
          return (
            <li
              key={title}
              className='flex flex-col items-center rounded-3xl border border-gray-100 bg-white px-5 py-6 sm:px-8 sm:py-8 text-center shadow-soft-card transition-transform duration-200 hover:-translate-y-1'
            >
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50'>
                <Icon
                  className='h-6 w-6 text-coral-red'
                  aria-hidden='true'
                />
              </div>
              <h3 className='mt-6 font-montserrat text-lg font-bold text-gray-900'>
                {title}
              </h3>
              <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-500'>
                {description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LeProbleme;
