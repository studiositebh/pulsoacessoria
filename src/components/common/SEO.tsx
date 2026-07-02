import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  /** Caminho da rota atual, ex.: "/seguro-condominio". Usado no canonical/OG. */
  path: string;
  /** Imagem para Open Graph/Twitter (caminho relativo a partir de /). */
  image?: string;
  /** Um ou mais blocos JSON-LD (Schema.org). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Define meta robots como noindex quando true (ex.: página 404). */
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  path,
  image = "/images/og-default.svg",
  jsonLd,
  noindex = false,
}: SEOProps) {
  const url = `${siteConfig.siteUrl}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.siteUrl}${image}`;

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.companyName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLdArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
