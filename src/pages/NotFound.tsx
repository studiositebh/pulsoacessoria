import { Home, ArrowLeft } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada | Pulso"
        description="A página que você procura não foi encontrada."
        path="/404"
        noindex
      />
      <section className="flex min-h-[60vh] items-center bg-white py-20">
        <Container className="text-center">
          <p className="text-6xl font-extrabold text-brand-200 sm:text-7xl">404</p>
          <h1 className="mt-4 text-2xl font-bold text-brand-900 sm:text-3xl">
            Página não encontrada
          </h1>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            O endereço que você tentou acessar não existe ou foi movido. Volte
            para a página inicial e continue navegando.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="link" to="/" variant="primary" size="lg">
              <Home className="h-5 w-5" aria-hidden="true" />
              Ir para a página inicial
            </Button>
            <Button as="link" to="/seguro-condominio" variant="outline" size="lg">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              Conhecer o Seguro Condomínio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
