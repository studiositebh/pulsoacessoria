import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { homeSolutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <section className="bg-brand-50/60 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Além do condomínio"
            title="Outras soluções da Pulso"
            description="A consultoria da Pulso vai além do condomínio e atende diferentes necessidades de proteção e benefícios."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeSolutions.map(({ id, title, description, icon: Icon }, index) => (
            <Reveal
              key={id}
              delay={index * 60}
              as="article"
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-brand-100 bg-white p-6 pt-16 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:pt-20 lg:pt-24"
            >
              <Icon
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 text-accent-600/10 transition-transform duration-300 ease-out group-hover:translate-x-[5px] group-hover:translate-y-[4px] group-hover:rotate-[4deg] group-hover:scale-[1.03] sm:-left-4 sm:-top-4 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              />
              <h3 className="relative text-lg font-semibold text-brand-900">{title}</h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
              <Link
                to="/solucoes"
                className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button as="link" to="/solucoes" variant="outline" size="lg">
            Ver todas as soluções
          </Button>
        </div>
      </Container>
    </section>
  );
}
