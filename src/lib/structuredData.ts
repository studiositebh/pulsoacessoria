import { siteConfig } from "@/config/site";
import type { FAQItem } from "@/data/faq";

/** Schema.org Organization — dados básicos, sem inventar endereço/avaliações. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
  };
}

/** Schema.org WebSite */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    inLanguage: "pt-BR",
  };
}

/** Schema.org Service para o Seguro Condomínio. */
export function condoServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Consultoria em Seguro Condomínio",
    name: "Seguro Condomínio",
    description:
      "Consultoria para estruturação de seguro condomínio, com análise de riscos e apresentação de coberturas adequadas ao perfil do condomínio.",
    areaServed: "BR",
    provider: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
    },
  };
}

/** Schema.org FAQPage a partir da lista de perguntas frequentes. */
export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Schema.org BreadcrumbList para páginas internas. */
export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
