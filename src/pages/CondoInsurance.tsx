import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Notice } from "@/components/common/Notice";
import { Reveal } from "@/components/common/Reveal";
import { FAQ } from "@/components/common/FAQ";
import { QuoteForm } from "@/components/common/QuoteForm";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { condoCoverages, riskExamples } from "@/data/condoCoverages";
import { condoFaq } from "@/data/faq";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  condoServiceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/structuredData";

const consultingSteps = [
  { title: "Solicitação de contato", description: "Você entra em contato ou solicita uma análise." },
  { title: "Levantamento", description: "Levantamos as características do condomínio." },
  { title: "Identificação de riscos", description: "Identificamos os principais riscos e prioridades." },
  { title: "Apresentação de alternativas", description: "Apresentamos as opções adequadas ao perfil." },
  { title: "Contratação", description: "Você contrata a opção selecionada." },
  { title: "Acompanhamento", description: "A Pulso acompanha o cliente após a contratação." },
];

export default function CondoInsurance() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.condo);

  return (
    <>
      <SEO
        title="Seguro Condomínio | Proteção para Condomínios e Síndicos | Pulso"
        description="Seguro condomínio com consultoria especializada: análise de riscos, coberturas para áreas comuns, responsabilidade civil do síndico e mais. Solicite uma análise."
        path="/seguro-condominio"
        jsonLd={[
          condoServiceSchema(),
          faqSchema(condoFaq),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Seguro Condomínio", path: "/seguro-condominio" },
          ]),
        ]}
      />

      {/* 8.1 Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <img
          src="/images/seguro-condominio/hero.svg"
          alt=""
          aria-hidden="true"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/50"
        />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-700/60 bg-brand-900/40 px-4 py-1.5 text-sm font-medium text-brand-100">
              <ShieldCheck className="h-4 w-4 text-accent-300" aria-hidden="true" />
              Seguro Condomínio
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Seu condomínio está realmente protegido?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
              Um seguro bem estruturado ajuda a proteger o patrimônio, as áreas
              comuns, a administração e terceiros diante de diferentes
              imprevistos.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as="link" to="#formulario" variant="secondary" size="lg">
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
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar com um consultor
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 8.2 Introdução */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              title="A cobertura básica pode não ser suficiente"
              description="Muitos condomínios contratam apenas as proteções mínimas e só percebem as limitações quando ocorre um sinistro. Avaliar as necessidades com antecedência ajuda a evitar surpresas e a proteger melhor o patrimônio coletivo."
            />
          </Reveal>
        </Container>
      </section>

      {/* 8.3 Proteções e coberturas possíveis */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Coberturas"
              title="Proteções e coberturas possíveis"
              description="Exemplos de coberturas que podem compor o seguro do condomínio, de acordo com a necessidade identificada."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {condoCoverages.map(({ id, title, description, icon: Icon }, index) => (
              <Reveal
                key={id}
                as="article"
                delay={index * 50}
                className="group h-full rounded-xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600 transition-colors group-hover:bg-accent-50">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Notice>
              As coberturas dependem da contratação e das condições da apólice.
              Este conteúdo é informativo e não representa uma oferta de cobertura.
            </Notice>
          </Reveal>
        </Container>
      </section>

      {/* 8.4 Situações práticas */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Na prática"
              title="Situações práticas"
              description="Exemplos de acontecimentos comuns na rotina de um condomínio."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {riskExamples.map((example, index) => (
              <Reveal
                key={example.id}
                delay={index * 50}
                className="flex gap-4 rounded-xl border border-brand-100 bg-white p-6 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-brand-900">
                    {example.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {example.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8.5 Seção específica para o síndico */}
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300">
                Para o síndico
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ser síndico também envolve riscos e responsabilidades
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                Determinadas coberturas podem ajudar a proteger o síndico em
                situações relacionadas ao exercício da função, respeitando os
                limites, exclusões e condições previstas na apólice contratada.
              </p>
              <div className="mt-7">
                <Button
                  as="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Conversar sobre a proteção do síndico
                </Button>
              </div>
            </Reveal>
            <Reveal>
              <ul className="space-y-4">
                {[
                  "Responsabilidade em decisões administrativas",
                  "Situações relacionadas à gestão do condomínio",
                  "Questionamentos no exercício da função",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-brand-800/60 p-5"
                  >
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-300"
                      aria-hidden="true"
                    />
                    <span className="text-brand-50">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8.6 Seguro obrigatório */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Informação importante"
              title="Condomínios possuem obrigações relacionadas ao seguro"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                A legislação brasileira estabelece a obrigatoriedade de seguro
                para edificações em condomínio, especialmente em relação a riscos
                de incêndio ou destruição. As exigências e coberturas aplicáveis
                devem ser avaliadas de acordo com as características do imóvel e a
                legislação vigente.
              </p>
            </div>
            <Notice className="mt-6">
              Este conteúdo é meramente informativo e não substitui orientação
              jurídica ou análise técnica especializada.
            </Notice>
          </Reveal>
        </Container>
      </section>

      {/* 8.7 Como funciona a consultoria */}
      <HowItWorksSection
        eyebrow="Consultoria"
        title="Como funciona a consultoria"
        description="Um processo estruturado para entender o condomínio e apresentar as alternativas certas."
        steps={consultingSteps}
        variant="muted"
      />

      {/* 8.8 Formulário de cotação */}
      <section id="formulario" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Solicite uma análise"
                title="Peça uma análise para o seu condomínio"
                description="Preencha os dados abaixo. Ao enviar, uma mensagem organizada será aberta no WhatsApp para dar sequência ao atendimento."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Atendimento consultivo e sem compromisso",
                  "Análise de acordo com o perfil do condomínio",
                  "Alternativas por meio de parceiros especializados",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <QuoteForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8.9 Perguntas frequentes */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Dúvidas"
              title="Perguntas frequentes"
            />
          </Reveal>
          <Reveal className="mt-10">
            <FAQ items={condoFaq} />
          </Reveal>
        </Container>
      </section>

      {/* 8.10 CTA final */}
      <FinalCTA
        title="Solicite uma análise para o seu condomínio"
        text="Fale com um consultor da Pulso pelo WhatsApp ou preencha o formulário para dar início ao atendimento."
        primaryTo="#formulario"
        primaryLabel="Ir para o formulário"
      />
    </>
  );
}
