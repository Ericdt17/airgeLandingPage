import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useModal } from "../context/ModalContext";
import {
  tarifsBillingAnnual,
  tarifsBillingMonthly,
  tarifsCtaPrimary,
  tarifsCtaSecondary,
  tarifsCtaSecondaryHref,
  tarifsEyebrow,
  tarifsFeaturesLeft,
  tarifsFeaturesRight,
  tarifsHeadline,
  tarifsPlanBadge,
  tarifsPlanDescription,
  tarifsPlanTitle,
  tarifsPriceAnnual,
  tarifsPriceMonthly,
  tarifsPricePrefix,
} from "../constants";

const FeatureRow = ({ label }) => (
  <li className='flex items-start gap-3'>
    <span className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue'>
      <CheckIcon className='h-4 w-4 text-white' aria-hidden='true' />
    </span>
    <span className='font-montserrat text-base leading-6 text-gray-300'>
      {label}
    </span>
  </li>
);

const Tarifs = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { open } = useModal();

  const price = isAnnual ? tarifsPriceAnnual : tarifsPriceMonthly;

  return (
    <section id='tarifs' className='relative overflow-hidden bg-gray-50'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <p className='text-center font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
          {tarifsEyebrow}
        </p>
        <h2 className='mx-auto mt-4 max-w-4xl text-center font-montserrat text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[48px] lg:leading-[48px]'>
          {tarifsHeadline}
        </h2>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
          <span
            className={`font-montserrat text-sm font-medium ${
              !isAnnual ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {tarifsBillingMonthly}
          </span>
          <button
            type='button'
            role='switch'
            aria-checked={isAnnual}
            aria-label={
              isAnnual
                ? "Basculer vers la facturation mensuelle"
                : "Basculer vers la facturation annuelle"
            }
            onClick={() => setIsAnnual((v) => !v)}
            className='relative h-7 w-14 shrink-0 rounded-full bg-brand-blue/20 transition-colors'
          >
            <span
              className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-brand-blue shadow transition-transform duration-200 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`font-montserrat text-sm font-medium ${
              isAnnual ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {tarifsBillingAnnual}
          </span>
        </div>

        <div className='relative mx-auto mt-12 max-w-5xl'>
          <div
            className='pointer-events-none absolute -right-4 -top-16 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl lg:right-8'
            aria-hidden='true'
          />
          <div className='relative overflow-hidden rounded-[32px] sm:rounded-[48px] border border-white/10 bg-security-ink shadow-tarif-card'>
            <div className='relative flex flex-col gap-6 border-b border-white/10 p-5 sm:p-8 md:p-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8'>
              <div>
                <h3 className='font-montserrat text-2xl font-bold text-white sm:text-[30px] sm:leading-9'>
                  {tarifsPlanTitle}
                </h3>
                <p className='mt-4 max-w-xl font-montserrat text-lg leading-8 text-gray-400'>
                  {tarifsPlanDescription}
                </p>
                <p className='mt-4 font-montserrat text-base text-gray-300'>
                  {tarifsPricePrefix}
                </p>
              </div>
              <span className='inline-flex shrink-0 self-start rounded-full bg-brand-blue px-6 py-2 font-montserrat text-xs font-bold uppercase tracking-[1.4px] text-white lg:self-center'>
                {tarifsPlanBadge}
              </span>
            </div>

            <div className='border-b border-white/10 px-5 py-6 sm:px-8 sm:py-8 md:px-10'>
              <div key={isAnnual ? "annual" : "monthly"} className='flex flex-wrap items-baseline gap-2 transition-opacity duration-150'>
                <span className='font-montserrat text-4xl font-extrabold text-brand-blue sm:text-5xl md:text-6xl md:leading-[60px]'>
                  {price.amount}
                </span>
                <span className='font-montserrat text-lg text-gray-400'>
                  {price.period}
                </span>
              </div>
              {isAnnual && tarifsPriceAnnual.subline && (
                <p className='mt-2 font-montserrat text-sm text-gray-500'>
                  {tarifsPriceAnnual.subline}
                </p>
              )}
            </div>

            <div className='grid grid-cols-1 gap-4 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 md:px-10 md:gap-8'>
              <ul className='flex list-none flex-col gap-4'>
                {tarifsFeaturesLeft.map((label) => (
                  <FeatureRow key={label} label={label} />
                ))}
              </ul>
              <ul className='flex list-none flex-col gap-4'>
                {tarifsFeaturesRight.map((label) => (
                  <FeatureRow key={label} label={label} />
                ))}
              </ul>
            </div>

            <div className='flex flex-col items-stretch gap-3 px-5 pb-8 pt-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:px-8 sm:pb-10 md:px-10'>
              <button
                type='button'
                onClick={open}
                className='inline-flex min-h-[54px] sm:min-h-[68px] items-center justify-center rounded-full bg-brand-blue px-8 sm:px-10 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/30 transition-opacity hover:opacity-95'
              >
                {tarifsCtaPrimary}
              </button>
              <a
                href={tarifsCtaSecondaryHref}
                className='inline-flex min-h-[54px] sm:min-h-[68px] items-center justify-center rounded-full border-2 border-white/20 px-8 sm:px-10 font-montserrat text-base font-bold text-white transition-colors hover:border-white/40'
              >
                {tarifsCtaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
