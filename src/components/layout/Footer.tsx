import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/layout/Logo";
import { mainNav, footerSolutions } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.default);

  const socials = [
    { key: "instagram", url: siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
    { key: "linkedin", url: siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { key: "facebook", url: siteConfig.social.facebook, Icon: Facebook, label: "Facebook" },
  ].filter((s) => s.url);

  return (
    <footer className="border-t border-brand-100 bg-brand-950 text-brand-100">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Fundo claro para preservar as cores originais do logotipo sobre o rodapé escuro */}
            <span className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm">
              <Logo />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
              {siteConfig.shortDescription}
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex items-center gap-3">
                {socials.map(({ key, url, Icon, label }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-md border border-brand-800 p-2 text-brand-200 transition-colors hover:border-accent-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-brand-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluções">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Soluções
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerSolutions.map((item, index) => (
                <li key={`${item.to}-${index}`}>
                  <Link
                    to={item.to}
                    className="text-brand-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-200 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneDisplay.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-brand-200 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-brand-200 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-200">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.businessHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-800 pt-8">
          <p className="text-xs leading-relaxed text-brand-300">
            As coberturas, limites, franquias, carências, exclusões e condições
            dependem da solução contratada e das condições da respectiva apólice.
            Os conteúdos deste site possuem caráter informativo.
          </p>
          <div className="mt-5 flex flex-col items-start justify-between gap-3 text-xs text-brand-300 sm:flex-row sm:items-center">
            <p>
              © {year} {siteConfig.companyName}. Todos os direitos reservados.
            </p>
            <Link
              to="/politica-de-privacidade"
              className="transition-colors hover:text-white"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
