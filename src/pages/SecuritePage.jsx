import LegalPageShell from "../components/LegalPageShell";
import SecuriteSection from "../sections/Securite";
import { securityPageTitle, securityPageUpdated } from "../constants";

const SecuritePage = () => {
  return (
    <LegalPageShell
      seoTitle='Sécurité'
      seoDescription="Engagements AIRGÉ en matière de sécurité du compte, des données et de l'outil IA."
      canonical='/legal/securite'
      pageTitle={securityPageTitle}
      pageUpdated={securityPageUpdated}
    >
      <SecuriteSection />
    </LegalPageShell>
  );
};

export default SecuritePage;
