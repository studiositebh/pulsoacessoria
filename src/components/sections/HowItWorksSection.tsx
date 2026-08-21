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

        <ol className="mt-14 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:gap-0 lg:divide-x lg:divide-brand-100">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 80}
              className="group relative flex gap-4 lg:flex-1 lg:flex-col lg:gap-0 lg:px-8 lg:transition-transform lg:duration-300 lg:first:pl-0 lg:last:pr-0 lg:hover:-translate-y-1"
            >
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-10 left-5 top-10 w-px bg-brand-100 lg:hidden"
                />
              )}
              <span
                aria-hidden="true"
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-sm font-bold text-brand-900 transition-colors duration-300 group-hover:border-accent-400 group-hover:text-accent-600 lg:h-auto lg:w-auto lg:justify-start lg:rounded-none lg:border-0 lg:bg-transparent lg:text-5xl lg:font-bold lg:leading-none lg:text-brand-100 lg:transition-colors lg:duration-300 lg:group-hover:text-accent-200"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-base font-semibold text-brand-900 transition-colors duration-300 group-hover:text-accent-700 lg:text-lg">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft lg:mt-2 lg:pr-4">
                    {step.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
