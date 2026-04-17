import { StarIcon } from "@heroicons/react/24/solid";
import {
  partnerTestimonials,
  testimonialEyebrow,
  testimonialHeadline,
} from "../constants";

const Temoignages = () => {
  return (
    <section id='temoignages' className='relative overflow-hidden scroll-mt-24 bg-white'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <p className='text-center font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
          {testimonialEyebrow}
        </p>
        <h2 className='mx-auto mt-4 max-w-3xl text-center font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[36px] lg:leading-[40px]'>
          {testimonialHeadline}
        </h2>

        <ul className='mt-12 grid list-none grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
          {partnerTestimonials.map(({ quote, name, role, rating }) => (
            <li
              key={name}
              className='flex flex-col rounded-[32px] border border-gray-100 bg-gray-50 p-5 sm:p-6 md:p-8'
            >
              <div className='flex gap-1' aria-hidden='true'>
                {Array.from({ length: rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className='h-5 w-5 text-coral-red'
                  />
                ))}
              </div>
              <span className='sr-only'>Note {rating} sur 5</span>
              <blockquote className='mt-6 flex-1 font-montserrat text-base italic leading-6 text-gray-600'>
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className='mt-8 flex items-center gap-4'>
                <div
                  className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 font-montserrat text-sm font-semibold text-gray-500'
                  aria-hidden='true'
                >
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className='font-montserrat text-base font-bold text-gray-900'>
                    {name}
                  </p>
                  <p className='font-montserrat text-xs text-gray-400'>
                    {role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Temoignages;
