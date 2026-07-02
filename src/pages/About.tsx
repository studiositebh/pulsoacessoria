import { Search, Handshake, ShieldCheck, ClipboardList } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { breadcrumbSchema } from "@/lib/structuredData";

const values = [
  {
    icon: Handshake,
    title: "Atendimento consultivo",
    text: "Ouvimos antes de recomendar. A conversa vem antes da proposta.",
  },
  {
    icon: Search,
    title: "Processo de análise",
    text: "Avaliamos riscos e necessidades para orientar cada decisão.",
  },
  {
    icon: ShieldCheck,
    title: "Foco em proteção",
    text: "Buscamos alternativas que realmente façam sentido para o cliente.",
  },
  {
    icon: ClipboardList,
    title: "Parcerias especializadas",
    text: "Trabalhamos com companhias reconhecidas no mercado.",
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
                title="Proteger pessoas, patrimônios e negócios"
                description="Nosso trabalho começa pela compreensão da realidade de cada cliente. A partir dessa análise, buscamos alternativas que façam sentido para os riscos, necessidades e objetivos identificados."
              />
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                A Pulso nasceu para tornar decisões relacionadas à proteção mais
                claras, próximas e seguras. Atuamos de forma consultiva,
                apresentando soluções por meio de parceiros especializados e
                acompanhando o cliente durante a contratação.
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
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, index) => (
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
