import { Search, Shield, Handshake, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";

const pillars = [
  {
    icon: Search,
    title: "Conhecer antes de recomendar",
    text: "Analisamos riscos e necessidades antes de indicar qualquer solução.",
  },
  {
    icon: Shield,
    title: "Prevenção e proteção integradas",
    text: "Riscos, monitoramento, rastreamento e seguros em uma proteção completa.",
  },
  {
    icon: Handshake,
    title: "Especialistas e parceiros qualificados",
    text: "Unimos nossa experiência a uma rede de corretores e seguradoras parceiras.",
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
              title="Um time de especialistas em segurança, benefícios e proteção"
              description="A Pulso reúne especialistas para compreender riscos e necessidades antes de recomendar soluções de proteção para pessoas, pets, empresas e patrimônio."
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
            <Button
              as="link"
              to="/quem-somos"
              variant="outline"
              size="md"
              className="mt-8"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
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
