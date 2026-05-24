import { Nav, SEO } from "../components";
import {
  CtaFinal,
  Faq,
  Footer,
  Hero,
  LeProbleme,
  MetriquesCles,
  SecuriteConfiance,
  Solution,
  Tarifs,
} from "../sections";

const Landing = () => {
  return (
    <>
      <SEO
        title='Crée du contenu qui te fait connaître et te rapporte des opportunités'
        description="AIRGÉ t'aide à trouver quoi publier, structurer tes vidéos, construire une audience et transformer ta visibilité en clients, ventes, collaborations ou brand deals."
        canonical='/'
      />
      <Nav />
      <main className='relative overflow-hidden bg-airge-bg'>
        <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
        <div className='relative'>
          <div className='xl:padding-l wide:padding-r padding-b'>
            <Hero />
          </div>
          <div className='padding'>
            <LeProbleme />
          </div>
          <div className='padding'>
            <Solution />
          </div>
          <SecuriteConfiance />
          <MetriquesCles />
          <Tarifs />
          <Faq />
          <div className='padding-x sm:py-16 py-12 w-full'>
            <CtaFinal />
          </div>
        </div>
      </main>
      <div className='relative overflow-hidden border-t border-airge-border bg-airge-bg padding-x padding-t pb-8'>
        <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
        <div className='relative'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
