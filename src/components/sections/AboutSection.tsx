import { Search, Shield, Target } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const pillars = [
  {
    icon: Search,
    title: "Análise antes da recomendação",
    text: "Compreendemos a realidade do cliente para só então apresentar alternativas.",
  },
  {
    icon: Shield,
    title: "Foco em proteção real",
    text: "Buscamos soluções que façam sentido para os riscos identificados.",
  },
  {
    icon: Target,
    title: "Decisões mais claras",
    text: "Traduzimos coberturas e condições em informações compreensíveis.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Quem é a Pulso"
              title="Uma consultoria para proteger o que realmente importa"
              description="A Pulso trabalha de forma consultiva: analisamos necessidades e identificamos riscos antes de apresentar alternativas. Nosso papel é ajudar cada cliente a tomar decisões de proteção com mais clareza e segurança."
            />
            <ul className="mt-8 space-y-5">
              {pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-900">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
              <img
                src="/images/home/sobre-consultoria.svg"
                alt="Atendimento consultivo da Pulso"
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
  );
}
