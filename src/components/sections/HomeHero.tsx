import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function HomeHero() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.condo);

  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      {/* Imagem de fundo (placeholder — substituir por foto profissional) */}
      <img
        src="/images/home/hero-condominio.svg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/50"
      />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-700/60 bg-brand-900/40 px-4 py-1.5 text-sm font-medium text-brand-100">
            {siteConfig.tagline}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Proteção inteligente para condomínios, empresas e patrimônios
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            A Pulso oferece uma consultoria especializada para identificar riscos
            e apresentar soluções de seguros, proteção e benefícios adequadas às
            necessidades de cada cliente.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button as="link" to="/seguro-condominio" variant="secondary" size="lg">
              Solicitar uma cotação
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar com um consultor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
