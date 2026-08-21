import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function HomeHero() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.condo);

  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-4 inline-flex items-center rounded-full border border-brand-700/60 bg-brand-900/40 px-4 py-1.5 text-sm font-medium text-brand-100">
              {siteConfig.tagline}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Não começamos pelo produto.
              <br />
              Começamos pelo que precisa ser protegido.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
              A Pulso identifica riscos e busca soluções adequadas para proteger
              condomínios, empresas, patrimônios, a saúde e as pessoas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as="link" to="/seguro-condominio" variant="secondary" size="lg">
                Solicitar uma análise
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
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                Falar com um consultor
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="overflow-hidden rounded-2xl border border-brand-700/60 shadow-card">
              <img
                src="/images/home/banner-direito.webp"
                alt="Condomínio protegido pela Pulso Assessoria"
                width={1122}
                height={1402}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
