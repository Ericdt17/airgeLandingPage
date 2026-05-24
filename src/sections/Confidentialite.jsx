import LegalContactCard from "../components/LegalContactCard";
import { privacyContactIntro, privacyPageIntro, privacySections } from "../constants";

const ConfidentialiteSection = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'>
      <p className='font-montserrat text-base leading-7 text-airge-muted sm:text-lg sm:leading-8'>
        {privacyPageIntro}
      </p>

      <div className='mt-12 flex flex-col gap-10'>
        {privacySections.map((section) => (
          <div key={section.number}>
            <div className='flex items-baseline gap-3'>
              <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-airge-primary'>
                {section.number}
              </span>
              <h2 className='font-montserrat text-lg font-bold text-airge-foreground sm:text-xl'>
                {section.title}
              </h2>
            </div>

            <p className='mt-3 font-montserrat text-sm leading-6 text-airge-muted sm:text-base sm:leading-7'>
              {section.body}
            </p>

            {section.items.length > 0 && (
              <ul className='mt-3 flex flex-col gap-2'>
                {section.items.map((item) => (
                  <li key={item} className='flex items-start gap-2.5'>
                    <span
                      className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-airge-primary'
                      aria-hidden='true'
                    />
                    <span className='font-montserrat text-sm leading-6 text-airge-muted sm:text-base sm:leading-7'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <LegalContactCard intro={privacyContactIntro} />
    </div>
  );
};

export default ConfidentialiteSection;
