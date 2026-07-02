import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { Notice } from "@/components/common/Notice";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { solutionsList } from "@/data/solutions";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { breadcrumbSchema } from "@/lib/structuredData";

export default function Solutions() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.solutions);

  return (
    <>
      <SEO
        title="Soluções em Seguros, Rastreamento e Benefícios | Pulso"
        description="Conheça as soluções da Pulso: seguro condomínio, seguros empresariais e patrimoniais, planos de saúde, rastreamento veicular e benefícios."
        path="/solucoes"
        jsonLd={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Soluções", path: "/solucoes" },
        ])}
      />

      <PageHero
        title="Soluções de proteção, seguros e benefícios"
        subtitle="Atuamos de forma consultiva para identificar a alternativa mais adequada a cada necessidade. Conheça as principais áreas de atuação da Pulso."
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Soluções", path: "/solucoes" },
        ]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {solutionsList.map(
              ({ id, title, description, icon: Icon, to, featured }, index) => (
                <Reveal
                  key={id}
                  as="article"
                  delay={index * 60}
                  className={
                    featured
                      ? "flex h-full flex-col rounded-2xl border-2 border-accent-200 bg-brand-900 p-8 text-white shadow-card-hover lg:col-span-2 lg:flex-row lg:items-center lg:gap-8"
                      : "flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  }
                >
                  <div className={featured ? "lg:flex-1" : ""}>
                    <span
                      className={
                        featured
                          ? "flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-accent-300"
                          : "flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-accent-600"
                      }
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    {featured && (
                      <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent-300">
                        Solução principal
                      </p>
                    )}
                    <h2
                      className={
                        featured
                          ? "mt-2 text-2xl font-bold text-white sm:text-3xl"
                          : "mt-4 text-xl font-bold text-brand-900"
                      }
                    >
                      {title}
                    </h2>
                    <p
                      className={
                        featured
                          ? "mt-3 max-w-2xl text-brand-100"
                          : "mt-2 text-sm leading-relaxed text-ink-soft"
                      }
                    >
                      {description}
                    </p>
                  </div>

                  <div className={featured ? "mt-6 lg:mt-0 lg:shrink-0" : "mt-6"}>
                    {to ? (
                      <Button as="link" to={to} variant="secondary" size="lg">
                        Conhecer o Seguro Condomínio
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    ) : (
                      <Button
                        as="a"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                      >
                        <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                        Falar sobre esta solução
                      </Button>
                    )}
                  </div>
                </Reveal>
              ),
            )}
          </div>

          <Reveal className="mt-10">
            <Notice>
              As soluções são apresentadas de acordo com o perfil do risco, por
              meio de parceiros especializados. Não trabalhamos com preços fixos:
              cada análise é feita conforme a necessidade do cliente.
            </Notice>
          </Reveal>
        </Container>
      </section>

      <FinalCTA
        title="Não sabe por onde começar?"
        text="Fale com um consultor da Pulso. Vamos entender a sua necessidade e indicar o melhor caminho."
        primaryTo="/contato"
        primaryLabel="Falar com a Pulso"
        whatsappMessage={siteConfig.whatsappMessages.solutions}
      />
    </>
  );
}
