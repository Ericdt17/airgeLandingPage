/**
 * Footer — navigation from `src/constants/index.js`.
 */
import { Link } from "react-router-dom";
import NavBrand from "../components/NavBrand";
import {
  footerColumns,
  footerCopyright,
  footerSocialLinks,
  footerSpaPaths,
  footerTagline,
} from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className='max-container grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8'>
        <div className='flex flex-col'>
          <NavBrand />
          <p className='mt-6 max-w-xs font-montserrat text-base leading-6 text-airge-muted'>
            {footerTagline}
          </p>
          <div className='mt-6 flex gap-3'>
            {footerSocialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='flex h-10 w-10 items-center justify-center rounded-full border border-airge-border bg-airge-surface text-airge-foreground transition-colors hover:border-airge-primary hover:bg-airge-bg-deep'
              >
                <img src={icon} alt='' width={20} height={20} className='m-0 invert opacity-80' />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className='font-montserrat text-base font-bold text-airge-foreground'>
              {column.title}
            </h4>
            <ul className='mt-6 flex list-none flex-col gap-3'>
              {column.links.map((item) => (
                <li key={item.label}>
                  {footerSpaPaths.includes(item.href) ? (
                    <Link
                      to={item.href}
                      className='font-montserrat text-sm leading-5 text-airge-muted transition-colors hover:text-airge-primary'
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className='font-montserrat text-sm leading-5 text-airge-muted transition-colors hover:text-airge-primary'
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='max-container mt-8 border-t border-airge-border pt-6 sm:mt-12 sm:pt-8'>
        <p className='font-montserrat text-xs leading-4 text-airge-muted'>
          {footerCopyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
