import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/common/Container";

export interface Breadcrumb {
  name: string;
  path: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}

/** Hero interno padrão para páginas secundárias. */
export function PageHero({ title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="border-b border-brand-100 bg-brand-900 text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Trilha de navegação" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-200">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-1">
                    {isLast ? (
                      <span aria-current="page" className="text-white">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          to={crumb.path}
                          className="transition-colors hover:text-white"
                        >
                          {crumb.name}
                        </Link>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
