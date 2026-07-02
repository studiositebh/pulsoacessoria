import { Handshake, Sparkles, Users, ClipboardCheck } from "lucide-react";
import { Container } from "@/components/common/Container";

const items = [
  {
    icon: Handshake,
    title: "Atendimento consultivo",
    text: "Entendemos o cenário antes de recomendar qualquer solução.",
  },
  {
    icon: Sparkles,
    title: "Soluções personalizadas",
    text: "Alternativas de acordo com o perfil e os riscos de cada cliente.",
  },
  {
    icon: Users,
    title: "Parceiros especializados",
    text: "Trabalhamos com companhias reconhecidas no mercado.",
  },
  {
    icon: ClipboardCheck,
    title: "Acompanhamento na contratação",
    text: "Apoio em todas as etapas, do primeiro contato à contratação.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-brand-100 bg-white">
      <Container className="py-10 sm:py-12">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-accent-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-brand-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
