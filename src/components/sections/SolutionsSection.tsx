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
              className="group flex h-full flex-col rounded-xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600 transition-colors group-hover:bg-accent-50">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
              <Link
                to="/solucoes"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
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
