import LegalContactCard from "../components/LegalContactCard";
import { termsContactIntro, termsGroups, termsPageIntro } from "../constants";

const ConditionsSection = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'>
      <p className='font-montserrat text-base leading-7 text-airge-muted sm:text-lg sm:leading-8'>
        {termsPageIntro}
      </p>

      <div className='mt-12 flex flex-col gap-12'>
        {termsGroups.map((group) => (
          <div key={group.groupTitle}>
            <h2 className='font-montserrat text-sm font-bold uppercase tracking-[0.14em] text-airge-primary'>
              {group.groupTitle}
            </h2>
            <div className='mt-8 flex flex-col gap-10'>
              {group.articles.map((article) => (
                <div key={article.art}>
                  <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                    <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-airge-primary'>
                      Art. {article.art}
                    </span>
                    <h3 className='font-montserrat text-lg font-bold text-airge-foreground sm:text-xl'>
                      {article.title}
                    </h3>
                  </div>
                  <div className='mt-3 flex flex-col gap-3'>
                    {article.paragraphs.map((para, idx) => (
                      <p
                        key={`${article.art}-${idx}`}
                        className='font-montserrat text-sm leading-6 text-airge-muted sm:text-base sm:leading-7'
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {article.highlightLine ? (
                    <p className='mt-4 rounded-xl border border-airge-border bg-airge-surface/60 px-4 py-3 font-montserrat text-sm font-semibold leading-6 text-airge-foreground sm:text-base'>
                      {article.highlightLine}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <LegalContactCard intro={termsContactIntro} />
    </div>
  );
};

export default ConditionsSection;
