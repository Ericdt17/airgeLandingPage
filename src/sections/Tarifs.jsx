import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "../components";
import { pricingHeadline, pricingPlans, whatsappCtaHref } from "../constants";

const Price = ({ price, currency, featured }) => (
  <div className='mt-4 flex items-end gap-1'>
    <span
      style={{ fontSize: "4rem", lineHeight: 1 }}
      className={`font-montserrat font-extrabold tracking-tight ${
        featured ? "text-white" : "text-gray-900"
      }`}
    >
      {price}
    </span>
    <span
      className={`self-end pb-1 font-montserrat text-sm font-bold ${
        featured ? "text-white" : "text-gray-900"
      }`}
    >
      {currency}
    </span>
  </div>
);

const Tarifs = () => {
  return (
    <section id='tarifs' className='overflow-hidden bg-white'>
      <div className='max-container padding-x py-16 sm:py-20 lg:py-24'>
        <h2 className='text-center font-montserrat text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight'>
          {pricingHeadline}
        </h2>

        <div className='mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.title}
                className='relative overflow-hidden rounded-[32px] bg-brand-blue p-6 text-white shadow-soft-card'
              >
                <p
                  className='text-center font-montserrat text-xs font-bold uppercase tracking-[0.14em] text-blue-100'
                >
                  {plan.title}
                </p>

                <Price price={plan.price} currency={plan.currency} featured />

                <ul className='mx-auto mt-6 flex max-w-xs list-none flex-col gap-3'>
                  {plan.bullets.map((b) => (
                    <li key={b} className='flex items-start gap-3'>
                      <CheckCircleIcon
                        className='mt-0.5 h-4 w-4 shrink-0 text-blue-100'
                        aria-hidden='true'
                      />
                      <span className='font-montserrat text-sm text-blue-100'>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className='mt-10 flex justify-center'>
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 font-montserrat text-lg font-bold leading-none text-white transition-colors hover:bg-brand-blue/90'
          >
            <WhatsAppIcon className='h-5 w-5 shrink-0' />
            Savoir plus sur nos tarifs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
