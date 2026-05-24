import LegalPageShell from "../components/LegalPageShell";
import CookiesSection from "../sections/Cookies";
import { cookiesPageTitle, cookiesPageUpdated } from "../constants";

const CookiesPage = () => {
  return (
    <LegalPageShell
      seoTitle='Politique cookies'
      seoDescription="Politique cookies du site AIRGÉ (video-story.com) — cookies techniques et analytics."
      canonical='/legal/cookies'
      pageTitle={cookiesPageTitle}
      pageUpdated={cookiesPageUpdated}
    >
      <CookiesSection />
    </LegalPageShell>
  );
};

export default CookiesPage;
