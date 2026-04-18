import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ConfidentialitePage from "./pages/ConfidentialitePage";
import ConditionsPage from "./pages/ConditionsPage";
import SecuritePage from "./pages/SecuritePage";
import CookiesPage from "./pages/CookiesPage";
import AProposPage from "./pages/AProposPage";
import SolutionClientPage from "./pages/SolutionClientPage";
import PortailAgentPage from "./pages/PortailAgentPage";
import PortailLivreurPage from "./pages/PortailLivreurPage";
import IntegrationsApiPage from "./pages/IntegrationsApiPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/legal/confidentialite'
          element={<ConfidentialitePage />}
        />
        <Route path='/legal/conditions' element={<ConditionsPage />} />
        <Route path='/legal/securite' element={<SecuritePage />} />
        <Route path='/legal/cookies' element={<CookiesPage />} />
        <Route path='/entreprise/a-propos' element={<AProposPage />} />
        <Route path='/entreprise/contact' element={<ContactPage />} />
        <Route
          path='/plateforme/solution-client'
          element={<SolutionClientPage />}
        />
        <Route
          path='/plateforme/portail-agent'
          element={<PortailAgentPage />}
        />
        <Route
          path='/plateforme/portail-livreur'
          element={<PortailLivreurPage />}
        />
        <Route
          path='/plateforme/integrations-api'
          element={<IntegrationsApiPage />}
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
