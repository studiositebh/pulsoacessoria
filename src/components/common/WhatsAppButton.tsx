import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

/**
 * Botão flutuante de WhatsApp, fixo no canto inferior direito.
 * Posicionado para não cobrir conteúdos importantes e acessível via teclado.
 */
export function WhatsAppButton() {
  const url = createWhatsAppUrl(siteConfig.whatsappMessages.default);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um consultor pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md bg-brand-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 md:block">
        Fale com um consultor
      </span>
    </a>
  );
}
