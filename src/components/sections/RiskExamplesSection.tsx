import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Notice } from "@/components/common/Notice";
import { Reveal } from "@/components/common/Reveal";
import { riskExamples } from "@/data/condoCoverages";

export function RiskExamplesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Situações do dia a dia"
            title="Situações que podem gerar prejuízos"
            description="Imprevistos acontecem na rotina de qualquer condomínio. Existem coberturas que podem ser contratadas para proteger o condomínio diante desse tipo de situação."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {riskExamples.map((example, index) => (
            <Reveal
              key={example.id}
              delay={index * 60}
              className="group h-full rounded-xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-900">
                {example.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {example.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Notice>
            Nem toda apólice cobre automaticamente essas situações. As coberturas
            precisam ser contratadas e estão sujeitas às condições da apólice.
          </Notice>
        </Reveal>
      </Container>
    </section>
  );
}
