import LegalPageShell from "../components/LegalPageShell";
import ConfidentialiteSection from "../sections/Confidentialite";
import { privacyPageTitle, privacyPageUpdated } from "../constants";

const ConfidentialitePage = () => {
  return (
    <LegalPageShell
      seoTitle='Politique de confidentialité'
      seoDescription="Politique de confidentialité AIRGÉ — données de compte, formations et outil IA."
      canonical='/legal/confidentialite'
      pageTitle={privacyPageTitle}
      pageUpdated={privacyPageUpdated}
    >
      <ConfidentialiteSection />
    </LegalPageShell>
  );
};

export default ConfidentialitePage;
