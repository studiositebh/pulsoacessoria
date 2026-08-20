import { Search, Shield, Handshake } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { breadcrumbSchema } from "@/lib/structuredData";

const pillars = [
  {
    icon: Search,
    title: "Conhecer antes de recomendar",
    text: "Analisamos a realidade, as necessidades e os riscos antes de apresentar qualquer solução.",
  },
  {
    icon: Shield,
    title: "Prevenção e proteção integradas",
    text: "Combinamos análise de riscos, segurança patrimonial, monitoramento, rastreamento e seguros em uma visão completa de proteção.",
  },
  {
    icon: Handshake,
    title: "Especialistas e parceiros qualificados",
    text: "Reunimos a experiência do nosso time a uma rede de corretores, seguradoras e empresas especializadas para buscar a solução adequada a cada cliente.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="Quem Somos | Consultoria em Proteção e Seguros | Pulso"
        description="Conheça a Pulso: uma equipe de consultores dedicada a tornar decisões de proteção mais claras, próximas e seguras, com atendimento consultivo."
        path="/quem-somos"
        jsonLd={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Quem Somos", path: "/quem-somos" },
        ])}
      />

      <PageHero
        title="Uma equipe de consultores dedicada à sua proteção"
        subtitle="A Pulso existe para tornar decisões relacionadas à proteção mais claras, próximas e seguras."
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Quem Somos", path: "/quem-somos" },
        ]}
      />

      {/* Quem é a Pulso + Como trabalha */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Quem é a Pulso"
                title="Um time de especialistas em segurança, benefícios e proteção"
                description="A Pulso reúne consultores com experiência em saúde, benefícios, segurança patrimonial, rastreamento veicular e soluções para a proteção de pessoas, pets e patrimônio."
              />
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Para condomínios e pequenas e médias empresas, realizamos o
                levantamento e a análise de riscos in loco. A partir desse
                diagnóstico, identificamos medidas preventivas e buscamos
                soluções adequadas, como seguros, monitoramento, alarmes,
                câmeras e outros recursos de segurança.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Nosso trabalho começa pelo conhecimento da realidade de cada
                cliente. Somente depois de compreender seus riscos e suas
                necessidades, buscamos as melhores alternativas por meio de
                corretores de seguros, seguradoras e empresas especializadas
                parceiras.
              </p>
              <p className="mt-8 rounded-xl border-l-4 border-accent-600 bg-accent-50 p-6 text-lg font-bold leading-snug tracking-tight text-brand-900 sm:text-xl">
                Não começamos pelo produto. Começamos entendendo o que precisa
                ser protegido.
              </p>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
                <img
                  src="/images/institucional/equipe.svg"
                  alt="Equipe de consultores da Pulso"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Valores / Como trabalha */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Como trabalhamos"
              title="Uma forma de atender orientada por análise"
              description="Nossa missão é proteger pessoas, patrimônios e negócios com clareza e proximidade."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={index * 60}
                className="h-full rounded-xl border border-brand-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Vamos conversar sobre a sua proteção?"
        text="Fale com a equipe da Pulso e descubra como podemos ajudar você, sua empresa ou o seu condomínio."
        primaryTo="/contato"
        primaryLabel="Entrar em contato"
        whatsappMessage="Olá! Vim pela página Quem Somos e gostaria de conhecer melhor a Pulso."
      />
    </>
  );
}
