import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Notice } from "@/components/common/Notice";
import { Reveal } from "@/components/common/Reveal";

const coverages = [
  "Incêndio",
  "Danos elétricos",
  "Quebra de vidros",
  "Impacto de veículos",
  "Responsabilidade civil",
  "Danos em tubulações",
  "Responsabilidade civil do síndico",
  "Responsabilidade civil de garagem",
];

export function CondoInsuranceSection() {
  return (
    <section className="bg-brand-50/60 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Solução principal"
            title="Seguro Condomínio: proteção muito além do básico"
            description="Um seguro bem estruturado pode proteger o patrimônio, as áreas comuns, a administração, os moradores e terceiros diante de diferentes imprevistos. A escolha das coberturas certas faz toda a diferença."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Exemplos de coberturas possíveis
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {coverages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Notice className="mt-6">
                As coberturas disponíveis dependem da modalidade contratada, da
                análise do risco e das condições da apólice.
              </Notice>
            </div>
          </Reveal>

          <Reveal className="flex lg:col-span-2">
            <div className="flex w-full flex-col justify-center rounded-2xl bg-brand-900 p-8 text-white">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Vamos avaliar o que o seu condomínio precisa
              </h3>
              <p className="mt-3 text-brand-100">
                Conheça a página completa do Seguro Condomínio, com coberturas,
                situações práticas e como funciona a nossa consultoria.
              </p>
              <div className="mt-6">
                <Button as="link" to="/seguro-condominio" variant="secondary" size="lg">
                  Conhecer o Seguro Condomínio
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
