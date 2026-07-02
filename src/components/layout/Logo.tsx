import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

/**
 * Logotipo oficial da Pulso (arquivo: public/images/logo.webp — 300×95, fundo
 * transparente). Existe apenas uma versão (petrol/teal escuro), portanto NÃO
 * aplicamos filtros de cor. Em fundos escuros, o logotipo é exibido sobre um
 * "chip" claro (ver Footer) para preservar a identidade original.
 *
 * Para atualizar, substitua o arquivo mantendo o mesmo nome (ou ajuste o `src`).
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.companyName} — Página inicial`}
      className={cn("inline-flex items-center rounded-md", className)}
    >
      <img
        src="/images/logo.webp"
        alt={siteConfig.companyName}
        width={300}
        height={95}
        className="h-8 w-auto object-contain sm:h-9"
      />
    </Link>
  );
}
