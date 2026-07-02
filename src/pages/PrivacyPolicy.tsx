import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema } from "@/lib/structuredData";

interface Section {
  title: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    title: "1. Dados fornecidos nos formulários",
    paragraphs: [
      "Ao utilizar os formulários deste site (cotação e contato), você pode fornecer dados como nome, telefone, e-mail, nome e CNPJ do condomínio, cidade, quantidade de unidades e a mensagem que desejar enviar. O fornecimento desses dados é feito de forma voluntária por você.",
    ],
  },
  {
    title: "2. Finalidade do contato",
    paragraphs: [
      "Os dados informados são utilizados exclusivamente para retornar o contato solicitado, entender a sua necessidade e apresentar alternativas de proteção, seguros ou benefícios adequadas ao seu perfil.",
    ],
  },
  {
    title: "3. Uso do WhatsApp",
    paragraphs: [
      "Este site não possui backend nesta versão. Ao enviar um formulário, os dados preenchidos são organizados em uma mensagem e o aplicativo do WhatsApp é aberto para que você conclua o envio ao nosso atendimento. O tratamento das informações pelo WhatsApp está sujeito às políticas da própria plataforma.",
    ],
  },
  {
    title: "4. Armazenamento de informações",
    paragraphs: [
      "O site não armazena os dados dos formulários em banco de dados próprio nem no seu navegador. As informações trafegam apenas no momento do envio da mensagem por você. Registros de atendimento podem ser mantidos pela Pulso pelo tempo necessário para prestar o atendimento solicitado.",
    ],
  },
  {
    title: "5. Compartilhamento necessário para cotação",
    paragraphs: [
      "Para apresentar alternativas e realizar cotações, pode ser necessário compartilhar informações com parceiros especializados e companhias do mercado. Esse compartilhamento é limitado ao necessário para atender à sua solicitação.",
    ],
  },
  {
    title: "6. Cookies técnicos",
    paragraphs: [
      "Este site pode utilizar apenas cookies técnicos essenciais ao seu funcionamento. Não utilizamos, nesta versão, ferramentas de analytics, pixels de rastreamento ou cookies publicitários.",
    ],
  },
  {
    title: "7. Direitos do titular",
    paragraphs: [
      "Você pode solicitar, a qualquer momento, informações sobre os seus dados, bem como a correção ou a exclusão das informações fornecidas, conforme a legislação aplicável de proteção de dados.",
    ],
  },
  {
    title: "8. Solicitação de correção ou exclusão",
    paragraphs: [
      "Para solicitar a correção ou a exclusão dos seus dados, entre em contato pelos canais informados ao final desta política. Faremos o possível para atender à sua solicitação dentro dos prazos e limites legais.",
    ],
  },
  {
    title: "9. Segurança",
    paragraphs: [
      "Adotamos cuidados razoáveis para proteger as informações tratadas no âmbito do atendimento. Ainda assim, nenhum meio de transmissão ou armazenamento é totalmente seguro, e não é possível garantir segurança absoluta.",
    ],
  },
  {
    title: "10. Atualização da política",
    paragraphs: [
      "Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir melhorias ou mudanças legais. Recomendamos a consulta periódica a esta página.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Política de Privacidade | Pulso"
        description="Saiba como a Pulso trata os dados fornecidos nos formulários do site, a finalidade do contato e os direitos do titular."
        path="/politica-de-privacidade"
        jsonLd={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ])}
      />

      <PageHero
        title="Política de Privacidade"
        subtitle="Transparência sobre como tratamos as informações fornecidas neste site."
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink-soft">
            Ao enviar uma solicitação de cotação ou contato, você concorda que os
            dados fornecidos poderão ser utilizados para atendimento e análise da
            sua demanda, conforme descrito abaixo.
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-brand-900">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-3 text-base leading-relaxed text-ink-soft"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div>
              <h2 className="text-xl font-bold text-brand-900">
                11. Canal de contato
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                Em caso de dúvidas sobre esta política ou sobre o tratamento dos
                seus dados, entre em contato pelo e-mail{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-accent-700 underline underline-offset-2 hover:text-accent-800"
                >
                  {siteConfig.email}
                </a>{" "}
                ou pelo telefone {siteConfig.phoneDisplay}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
