import { hamburger } from "../assets/icons";
import NavBrand from "./NavBrand";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  navCtaLabel,
  navLinks,
  navMobileMenuCloseLabel,
  navMobileMenuOpenLabel,
  whatsappCtaHref,
} from "../constants";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-airge-border bg-airge-bg/90 backdrop-blur-md'>
      <nav className='flex justify-between items-center max-container px-4 sm:px-16 h-20'>
        <NavBrand />

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='inline-flex items-center gap-2 font-montserrat leading-normal text-sm text-airge-muted hover:text-airge-foreground transition-colors'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='max-lg:hidden inline-flex items-center gap-2 rounded-full bg-airge-primary px-6 py-3 text-sm font-semibold font-montserrat text-airge-ink shadow-cta-final hover:bg-airge-primary-hover transition-colors'
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            {navCtaLabel}
          </a>

          <button
            type='button'
            className='hidden max-lg:flex items-center justify-center w-11 h-11 rounded-full hover:bg-airge-surface transition-colors'
            aria-label={isMobileMenuOpen ? navMobileMenuCloseLabel : navMobileMenuOpenLabel}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <img src={hamburger} alt='' width={24} height={24} className='invert opacity-90' />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className='lg:hidden'>
          <div
            className='fixed inset-0 bg-black/50'
            aria-hidden='true'
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className='absolute left-0 right-0 top-full bg-airge-surface border-t border-airge-border shadow-lg'>
            <div className='max-container padding-x py-6 flex flex-col gap-4'>
              <ul className='flex flex-col gap-4'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='inline-flex items-center gap-2 font-montserrat text-base text-airge-muted hover:text-airge-foreground transition-colors'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappCtaHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-full bg-airge-primary px-6 py-3 text-sm font-semibold font-montserrat text-airge-ink shadow-cta-final hover:bg-airge-primary-hover transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                {navCtaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
