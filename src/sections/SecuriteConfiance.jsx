import {
  CloudIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  securityCertBody,
  securityCertTitle,
  securityEyebrow,
  securityFeatures,
  securityHeadline,
  securityIntro,
} from "../constants";

const iconMap = {
  cloud: CloudIcon,
  lock: LockClosedIcon,
  "shield-check": ShieldCheckIcon,
};

const SecuriteConfiance = () => {
  return (
    <section id='fonctionnalites' className='relative overflow-hidden scroll-mt-24 bg-security-ink'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.06]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <div className='grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16'>
          <div>
            <p className='font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
              {securityEyebrow}
            </p>
            <h2 className='mt-4 font-montserrat text-2xl font-bold leading-snug text-white sm:text-3xl sm:leading-tight md:text-4xl lg:text-[36px] lg:leading-[40px]'>
              {securityHeadline}
            </h2>
            <p className='mt-4 max-w-xl font-montserrat text-lg leading-7 text-gray-400'>
              {securityIntro}
            </p>

            <ul className='mt-6 sm:mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2'>
              {securityFeatures.map((item) => {
                if (item.variant === "uptime") {
                  return (
                    <li
                      key='uptime'
                      className='rounded-2xl border border-white/10 bg-white/5 p-4'
                    >
                      <p className='font-montserrat text-xs font-semibold uppercase tracking-wider text-brand-blue'>
                        {item.label ?? "uptime"}
                      </p>
                      <p className='mt-2 font-montserrat text-base font-bold leading-6 text-white'>
                        <span className='block'>{item.title}</span>
                        <span className='block'>{item.titleLine2}</span>
                      </p>
                      <p className='mt-1 font-montserrat text-xs leading-4 text-gray-500'>
                        {item.subtitle}
                      </p>
                    </li>
                  );
                }

                const Icon = iconMap[item.iconId];
                return (
                  <li
                    key={item.title}
                    className='rounded-2xl border border-white/10 bg-white/5 p-4'
                  >
                    <div className='flex gap-3'>
                      <Icon
                        className='h-5 w-5 shrink-0 text-brand-blue'
                        aria-hidden='true'
                      />
                      <div>
                        <p className='font-montserrat text-base font-bold text-white'>
                          {item.title}
                        </p>
                        <p className='mt-1 font-montserrat text-xs leading-4 text-gray-500'>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='relative flex justify-center lg:justify-end'>
            <div
              className='pointer-events-none absolute left-1/2 top-1/2 h-[min(560px,90vw)] w-[min(560px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-3xl'
              aria-hidden='true'
            />
            <div className='relative w-full max-w-xl rounded-[32px] sm:rounded-[48px] border border-white/20 bg-white/10 p-6 sm:p-10 md:p-12 text-center shadow-2xl backdrop-blur-md'>
              <div className='flex justify-center'>
                <div className='rounded-2xl bg-brand-blue/20 p-5'>
                  <ShieldCheckIcon
                    className='h-14 w-14 text-brand-blue sm:h-16 sm:w-16'
                    aria-hidden='true'
                  />
                </div>
              </div>
              <h3 className='mt-8 font-montserrat text-2xl font-bold leading-tight text-white sm:text-[30px] sm:leading-9'>
                {securityCertTitle}
              </h3>
              <p className='mt-4 font-montserrat text-base leading-6 text-gray-400'>
                {securityCertBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuriteConfiance;
