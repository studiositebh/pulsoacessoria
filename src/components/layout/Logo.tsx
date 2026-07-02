import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Usa a variante clara (para fundos escuros). */
  light?: boolean;
  className?: string;
}

/**
 * Logotipo oficial da Pulso.
 *
 * O arquivo do logotipo fica em `public/images/logo.webp`.
 * Para atualizar o logotipo, substitua esse arquivo mantendo o mesmo nome
 * (ou ajuste o `src` abaixo). Para fundos escuros usamos um filtro que deixa
 * o logotipo branco (variante `light`).
 */
export function Logo({ light = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.companyName} — Página inicial`}
      className={cn("inline-flex items-center rounded-md", className)}
    >
      <img
        src="/images/logo.webp"
        alt={siteConfig.companyName}
        width={140}
        height={40}
        className={cn(
          "h-8 w-auto sm:h-9",
          // Deixa o logotipo (originalmente escuro) branco sobre fundos escuros.
          light && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
