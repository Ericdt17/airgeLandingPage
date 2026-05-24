import { Link } from "react-router-dom";
import SEO from "./SEO";
import { Footer } from "../sections";

const LegalPageShell = ({
  seoTitle,
  seoDescription,
  canonical,
  pageTitle,
  pageUpdated,
  children,
}) => {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} canonical={canonical} />
      <main className='min-h-[60vh] bg-airge-bg'>
        <div className='border-b border-airge-border bg-airge-bg-deep'>
          <div className='max-container padding-x py-12 sm:py-16'>
            <Link
              to='/'
              className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-airge-muted transition-colors hover:text-airge-foreground'
            >
              ← Retour à l&apos;accueil
            </Link>
            <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-airge-foreground sm:text-4xl'>
              {pageTitle}
            </h1>
            <p className='mt-2 font-montserrat text-sm text-airge-muted'>
              {pageUpdated}
            </p>
          </div>
        </div>

        <div className='max-container padding-x'>{children}</div>
      </main>

      <div className='relative overflow-hidden border-t border-airge-border bg-airge-bg padding-x padding-t pb-8'>
        <div
          className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]'
          aria-hidden='true'
        />
        <div className='relative'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LegalPageShell;
