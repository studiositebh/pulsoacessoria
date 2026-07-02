import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

export interface Step {
  title: string;
  description?: string;
}

interface HowItWorksSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: Step[];
  /** Fundo alternativo (branco por padrão). */
  variant?: "white" | "muted";
}

const defaultSteps: Step[] = [
  {
    title: "Entendemos a necessidade",
    description: "Conversamos para compreender o cenário e os objetivos do cliente.",
  },
  {
    title: "Analisamos os riscos",
    description: "Identificamos os principais riscos e pontos de atenção.",
  },
  {
    title: "Apresentamos as alternativas",
    description: "Mostramos soluções adequadas ao perfil, com clareza.",
  },
  {
    title: "Acompanhamos a contratação",
    description: "Damos suporte em todas as etapas até a contratação.",
  },
];

export function HowItWorksSection({
  eyebrow = "Como funciona",
  title = "Um processo consultivo, do início ao fim",
  description = "Nosso trabalho é orientado por etapas claras, para que cada decisão seja tomada com segurança.",
  steps = defaultSteps,
  variant = "white",
}: HowItWorksSectionProps) {
  return (
    <section
      className={
        variant === "muted"
          ? "bg-brand-50/60 py-16 sm:py-20 lg:py-24"
          : "bg-white py-16 sm:py-20 lg:py-24"
      }
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 60}
              className="relative h-full rounded-xl border border-brand-100 bg-white p-6 shadow-card"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-sm font-bold text-white"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-900">
                {step.title}
              </h3>
              {step.description && (
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
