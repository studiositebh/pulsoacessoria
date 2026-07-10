import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initMetaPixel, trackMetaPageViewForPath } from "@/lib/metaPixel";

/**
 * Integração do Meta Pixel para SPA:
 * - inicializa o pixel uma única vez;
 * - dispara PageView no carregamento inicial;
 * - dispara PageView a cada mudança de rota (pathname).
 */
export function MetaPixel() {
  const { pathname } = useLocation();

  useEffect(() => {
    initMetaPixel();
    trackMetaPageViewForPath(pathname);
  }, [pathname]);

  return null;
}
