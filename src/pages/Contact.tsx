import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/common/ContactForm";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { breadcrumbSchema } from "@/lib/structuredData";

export default function Contact() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.contact);
  const phoneDigits = siteConfig.phoneDisplay.replace(/\D/g, "");

  return (
    <>
      <SEO
        title="Fale com a Pulso | Solicite uma Cotação"
        description="Fale com a Pulso pelo WhatsApp, telefone ou e-mail. Solicite uma cotação e receba atendimento consultivo para a sua necessidade de proteção."
        path="/contato"
        jsonLd={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />

      <PageHero
        title="Fale com a Pulso"
        subtitle="Estamos prontos para entender a sua necessidade e apresentar as melhores alternativas. Escolha o canal de sua preferência."
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Canais de contato */}
            <Reveal>
              <SectionHeading
                eyebrow="Canais de atendimento"
                title="Como podemos ajudar?"
                description="O WhatsApp é o nosso principal canal de atendimento. Você também pode falar por telefone ou e-mail."
              />

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-whatsapp/10 text-whatsapp-dark">
                      <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-brand-900">WhatsApp</span>
                      <span className="text-sm text-ink-soft">
                        Fale agora com um consultor
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${phoneDigits}`}
                    className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600">
                      <Phone className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-brand-900">Telefone</span>
                      <span className="text-sm text-ink-soft">
                        {siteConfig.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-brand-900">E-mail</span>
                      <span className="text-sm text-ink-soft">{siteConfig.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-brand-900">
                      Horário de atendimento
                    </span>
                    <span className="text-sm text-ink-soft">
                      {siteConfig.businessHours}
                    </span>
                  </span>
                </li>
                {/* Espaço preparado para endereço — exibido apenas quando informado em siteConfig.address */}
                {siteConfig.address && (
                  <li className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 shadow-card">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-accent-600">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-brand-900">Endereço</span>
                      <span className="text-sm text-ink-soft">{siteConfig.address}</span>
                    </span>
                  </li>
                )}
              </ul>
            </Reveal>

            {/* Formulário */}
            <Reveal>
              <h2 className="mb-6 text-xl font-bold text-brand-900">
                Envie uma mensagem
              </h2>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
