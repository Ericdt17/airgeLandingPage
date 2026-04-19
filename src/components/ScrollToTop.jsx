import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Remonte la page en haut à chaque navigation (SPA : le scroll n’est pas réinitialisé par défaut).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
