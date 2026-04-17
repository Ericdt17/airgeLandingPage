import { ComingSoonModal, Nav } from "./components";
import { ModalProvider } from "./context/ModalContext";
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
  Temoignages,
  TrustedBy,
} from "./sections";

const App = () => {
  return (
    <ModalProvider>
      <ComingSoonModal />
      <Nav />
      <main className='relative'>
        <div className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </div>
        <TrustedBy />
        <div className='padding'>
          <LeProbleme />
        </div>
        <div className='padding'>
          <Solution />
        </div>
        <MetriquesCles />
        <Temoignages />
        <SecuriteConfiance />
        <Tarifs />
        <Faq />
        <div className='padding-x sm:py-16 py-12 w-full'>
          <CtaFinal />
        </div>
      </main>
      <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
        <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
        <div className='relative'>
          <Footer />
        </div>
      </div>
    </ModalProvider>
  );
};

export default App;
