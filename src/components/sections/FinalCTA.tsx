import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface FinalCTAProps {
  title?: string;
  text?: string;
  /** Rota do botão primário (ex.: formulário). */
  primaryTo?: string;
  primaryLabel?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
}

export function FinalCTA({
  title = "Seu condomínio está realmente protegido?",
  text = "Converse com um consultor da Pulso e solicite uma análise das necessidades do seu condomínio.",
  primaryTo = "/seguro-condominio#formulario",
  primaryLabel = "Solicitar análise",
  whatsappLabel = "Chamar no WhatsApp",
  whatsappMessage = siteConfig.whatsappMessages.condo,
}: FinalCTAProps) {
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <section className="bg-brand-950 py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="link" to={primaryTo} variant="secondary" size="lg">
              {primaryLabel}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              {whatsappLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
