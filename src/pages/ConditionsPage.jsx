import LegalPageShell from "../components/LegalPageShell";
import ConditionsSection from "../sections/Conditions";
import { termsPageTitle, termsPageUpdated } from "../constants";

const ConditionsPage = () => {
  return (
    <LegalPageShell
      seoTitle="Conditions générales d'utilisation"
      seoDescription="Conditions générales d'utilisation de la plateforme AIRGÉ — formations et outil IA."
      canonical='/legal/conditions'
      pageTitle={termsPageTitle}
      pageUpdated={termsPageUpdated}
    >
      <ConditionsSection />
    </LegalPageShell>
  );
};

export default ConditionsPage;
