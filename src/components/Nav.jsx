import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";

const CaretRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { open } = useModal();

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
    <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md'>
      <nav className='flex justify-between items-center max-container px-4 sm:px-16 h-20'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='LivSight'
            width={190}
            height={72}
            className='m-0 w-[120px] sm:w-[160px] md:w-[200px] h-full max-h-10 sm:max-h-12 md:max-h-14 object-contain'
          />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-sm text-slate-gray hover:text-black transition-colors'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={open}
            className='max-lg:hidden inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold font-montserrat text-white shadow-lg shadow-brand-blue/20 hover:opacity-95 transition-opacity'
          >
            Démarrer
            <CaretRight />
          </button>

          <button
            type='button'
            className='hidden max-lg:flex items-center justify-center w-11 h-11 rounded-full hover:bg-black/5 transition-colors'
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <img src={hamburger} alt='' width={24} height={24} />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className='lg:hidden'>
          <div
            className='fixed inset-0 bg-black/20'
            aria-hidden='true'
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className='absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg'>
            <div className='max-container padding-x py-6 flex flex-col gap-4'>
              <ul className='flex flex-col gap-4'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='font-montserrat text-base text-slate-gray hover:text-black transition-colors'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                type='button'
                onClick={() => { setIsMobileMenuOpen(false); open(); }}
                className='inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold font-montserrat text-white shadow-lg shadow-brand-blue/20 hover:opacity-95 transition-opacity'
              >
                Démarrer
                <CaretRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
