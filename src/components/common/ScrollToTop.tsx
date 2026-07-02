import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Gerencia a rolagem em mudanças de rota:
 * - Se houver um hash (ex.: #formulario), rola suavemente até o elemento.
 * - Caso contrário, rola a página para o topo.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Aguarda o próximo frame para garantir que o elemento já foi renderizado.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, left: 0 });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
