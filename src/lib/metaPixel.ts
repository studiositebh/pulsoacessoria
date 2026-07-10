import { analyticsConfig } from "@/config/analytics";

const SCRIPT_ID = "meta-pixel-fbevents";
const SCRIPT_SRC = "https://connect.facebook.net/en_US/fbevents.js";

/** Evita inicialização duplicada (React Strict Mode / re-mounts). */
let isInitialized = false;

/** Evita PageView duplicado para a mesma rota (React Strict Mode). */
let lastTrackedPath: string | null = null;

function getFbq(): Fbq | undefined {
  return typeof window !== "undefined" ? window.fbq : undefined;
}

/**
 * Carrega o script do Meta Pixel de forma assíncrona e inicializa o ID
 * configurado. Garante que `fbq('init', ...)` ocorra apenas uma vez.
 */
export function initMetaPixel(): void {
  if (typeof window === "undefined" || isInitialized) return;

  const fbq = getFbq();

  if (!fbq) {
    const queue: FbqQueue = [];

    const stub: Fbq = function (...args: FbqArgs) {
      if (stub.callMethod) {
        stub.callMethod(...args);
      } else {
        queue.push(args);
      }
    } as Fbq;

    stub.queue = queue;
    stub.push = stub;
    stub.loaded = true;
    stub.version = "2.0";

    window.fbq = stub;
    if (!window._fbq) window._fbq = stub;

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = SCRIPT_SRC;
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(script, firstScript);
    }
  }

  window.fbq?.("init", analyticsConfig.metaPixelId);
  isInitialized = true;
}

/** Dispara o evento PageView do Meta Pixel. */
export function trackMetaPageView(): void {
  if (typeof window === "undefined") return;
  initMetaPixel();
  window.fbq?.("track", "PageView");
}

/**
 * Dispara PageView apenas quando a rota muda, evitando duplicatas
 * causadas pelo React Strict Mode em desenvolvimento.
 */
export function trackMetaPageViewForPath(pathname: string): void {
  if (lastTrackedPath === pathname) return;
  lastTrackedPath = pathname;
  trackMetaPageView();
}
