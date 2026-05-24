import LegalContactCard from "../components/LegalContactCard";
import {
  cookieBrowserHints,
  cookieGroups,
  cookieRecapColumnLabels,
  cookieRecapRows,
  cookiesContactIntro,
  cookiesPageIntro,
} from "../constants";

const CookieRecapTable = () => {
  const { type, name, role, duration, active } = cookieRecapColumnLabels;

  return (
    <div className='mt-4 overflow-x-auto rounded-xl border border-airge-border'>
      <table className='w-full min-w-[640px] border-collapse text-left font-montserrat text-sm text-airge-muted'>
        <thead>
          <tr className='border-b border-airge-border bg-airge-surface'>
            <th className='px-3 py-3 font-bold text-airge-foreground sm:px-4' scope='col'>
              {type}
            </th>
            <th className='px-3 py-3 font-bold text-airge-foreground sm:px-4' scope='col'>
              {name}
            </th>
            <th className='px-3 py-3 font-bold text-airge-foreground sm:px-4' scope='col'>
              {role}
            </th>
            <th className='px-3 py-3 font-bold text-airge-foreground sm:px-4' scope='col'>
              {duration}
            </th>
            <th className='px-3 py-3 font-bold text-airge-foreground sm:px-4' scope='col'>
              {active}
            </th>
          </tr>
        </thead>
        <tbody>
          {cookieRecapRows.map((row) => (
            <tr
              key={`${row.type}-${row.name}`}
              className='border-b border-airge-border/60 last:border-b-0'
            >
              <td className='px-3 py-3 align-top sm:px-4'>{row.type}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.name}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.role}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.duration}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BrowserHintsList = () => (
  <ul className='mt-4 flex list-none flex-col gap-3 border-l-2 border-airge-primary/30 pl-4'>
    {cookieBrowserHints.map((item) => (
      <li
        key={item.browser}
        className='font-montserrat text-sm leading-6 text-airge-muted sm:text-base sm:leading-7'
      >
        <span className='font-bold text-airge-foreground'>{item.browser}</span>
        {" — "}
        {item.steps}
      </li>
    ))}
  </ul>
);

const CookiesSection = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'>
      <p className='font-montserrat text-base leading-7 text-airge-muted sm:text-lg sm:leading-8'>
        {cookiesPageIntro}
      </p>

      <div className='mt-12 flex flex-col gap-12'>
        {cookieGroups.map((group) => (
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
                  {article.showCookieTable ? <CookieRecapTable /> : null}
                  {article.showBrowserHints ? <BrowserHintsList /> : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <LegalContactCard intro={cookiesContactIntro} />
    </div>
  );
};

export default CookiesSection;
