import { Building2, UserCog, Landmark, Briefcase, Users } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/cn";

const audiences = [
  {
    icon: Building2,
    title: "Condomínios",
    text: "Levantamento e análise de riscos in loco, com soluções integradas de segurança, prevenção e proteção patrimonial.",
    highlight: true,
  },
  {
    icon: UserCog,
    title: "Síndicos",
    text: "Apoio consultivo para identificar riscos, avaliar prioridades e tomar decisões com mais segurança e responsabilidade.",
    highlight: true,
  },
  {
    icon: Landmark,
    title: "Administradoras",
    text: "Parceria especializada para ampliar a segurança e a proteção dos condomínios atendidos por sua empresa.",
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "Empresas",
    text: "Soluções de segurança, proteção patrimonial, rastreamento, seguros, saúde e benefícios para o negócio e seus colaboradores.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Pessoas e famílias",
    text: "Alternativas para proteger a saúde, a vida, os veículos, a residência, os pets e o patrimônio familiar.",
    highlight: false,
  },
];

export function AudienceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Para quem trabalhamos"
            title="Soluções para quem cuida, administra e protege"
            description="A Pulso atende condomínios, síndicos, administradoras, empresas, pessoas e famílias com uma atuação consultiva, baseada no conhecimento das necessidades, na identificação dos riscos e na busca de soluções adequadas."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text, highlight }, index) => (
            <Reveal
              key={title}
              delay={index * 60}
              className={cn(
                "flex h-full items-start gap-4 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
                highlight
                  ? "border-brand-200 bg-brand-900 text-white shadow-card-hover"
                  : "border-brand-100 bg-white text-ink shadow-card hover:shadow-card-hover",
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
                  highlight ? "bg-white/10 text-accent-300" : "bg-brand-50 text-accent-600",
                )}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3
                  className={cn(
                    "text-lg font-semibold",
                    highlight ? "text-white" : "text-brand-900",
                  )}
                >
                  {title}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm leading-relaxed",
                    highlight ? "text-brand-100" : "text-ink-soft",
                  )}
                >
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
