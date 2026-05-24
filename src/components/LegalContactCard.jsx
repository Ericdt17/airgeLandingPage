import { legalSupportEmail } from "../constants";

const LegalContactCard = ({ intro }) => {
  return (
    <div className='mt-14 rounded-2xl border border-airge-border bg-airge-surface/60 p-6 sm:p-8'>
      <h2 className='font-montserrat text-base font-bold text-airge-foreground sm:text-lg'>
        Nous contacter
      </h2>
      <p className='mt-2 font-montserrat text-sm leading-6 text-airge-muted sm:text-base sm:leading-7'>
        {intro}
      </p>
      <a
        href={`mailto:${legalSupportEmail}`}
        className='mt-5 inline-flex items-center justify-center rounded-full border border-airge-primary px-6 py-3 font-montserrat text-sm font-bold text-airge-primary transition-colors hover:bg-airge-primary hover:text-airge-ink'
      >
        {legalSupportEmail}
      </a>
    </div>
  );
};

export default LegalContactCard;
