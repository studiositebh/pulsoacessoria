import { siteConfig } from "@/config/site";

/**
 * Monta a URL do WhatsApp de forma consistente para todo o site.
 * O número é centralizado em siteConfig.whatsappNumber.
 */
export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}
