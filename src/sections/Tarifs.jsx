import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "../components";
import { pricingHeadline, pricingPlans, whatsappCtaHref } from "../constants";

const Price = ({ price, currency, featured }) => (
  <div className='mt-4 flex items-end gap-1'>
    <span
      style={{ fontSize: "4rem", lineHeight: 1 }}
      className={`font-montserrat font-extrabold tracking-tight ${
        featured ? "text-airge-ink" : "text-airge-foreground"
      }`}
    >
      {price}
    </span>
    <span
      className={`self-end pb-1 font-montserrat text-sm font-bold ${
        featured ? "text-airge-ink" : "text-airge-foreground"
      }`}
    >
      {currency}
    </span>
  </div>
);

const Tarifs = () => {
  return (
    <section id='tarifs' className='overflow-hidden bg-airge-bg'>
      <div className='max-container padding-x py-16 sm:py-20 lg:py-24'>
        <h2 className='text-center font-montserrat text-3xl font-extrabold tracking-tight text-airge-foreground sm:text-4xl sm:leading-tight'>
          {pricingHeadline}
        </h2>

        <div className='mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          {pricingPlans.map((plan, index) => {
            const featured = index === 0;
            return (
              <div
                key={plan.title}
                className={`relative overflow-hidden rounded-[32px] p-6 shadow-soft-card ${
                  featured
                    ? "bg-airge-primary text-airge-ink ring-2 ring-airge-primary-light/30"
                    : "border border-airge-border bg-airge-surface text-airge-foreground"
                }`}
              >
                <p
                  className={`text-center font-montserrat text-xs font-bold uppercase tracking-[0.14em] ${
                    featured ? "text-airge-ink/80" : "text-airge-muted"
                  }`}
                >
                  {plan.title}
                </p>

                <Price price={plan.price} currency={plan.currency} featured={featured} />

                <ul className='mx-auto mt-6 flex max-w-xs list-none flex-col gap-3'>
                  {plan.bullets.map((b) => (
                    <li key={b} className='flex items-start gap-3'>
                      <CheckCircleIcon
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          featured ? "text-airge-ink/80" : "text-airge-primary"
                        }`}
                        aria-hidden='true'
                      />
                      <span
                        className={`font-montserrat text-sm ${
                          featured ? "text-airge-ink/90" : "text-airge-muted"
                        }`}
                      >
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
            className='flex items-center justify-center gap-2 rounded-full bg-airge-primary px-8 py-4 font-montserrat text-lg font-bold leading-none text-airge-ink transition-colors hover:bg-airge-primary-hover'
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
