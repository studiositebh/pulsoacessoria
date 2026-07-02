/**
 * ---------------------------------------------------------------------------
 * CONFIGURAÇÃO CENTRALIZADA DO SITE
 * ---------------------------------------------------------------------------
 * Este é o ÚNICO lugar onde os dados de contato da empresa devem ser editados.
 *
 * >>> SUBSTITUA OS PLACEHOLDERS ABAIXO PELOS DADOS OFICIAIS DA PULSO <<<
 *
 * Todos os valores marcados com "// TODO:" precisam ser trocados antes de
 * publicar o site em produção.
 * ---------------------------------------------------------------------------
 */

export const siteConfig = {
  companyName: "Pulso",

  // Posicionamento / tagline da marca
  tagline:
    "Consultoria especializada em soluções de proteção, seguros, rastreamento e benefícios.",

  shortDescription:
    "A Pulso é uma consultoria que analisa necessidades, identifica riscos e apresenta soluções adequadas de seguros, proteção e benefícios.",

  // TODO: substituir pelo número real de WhatsApp (somente dígitos, com DDI + DDD)
  // Formato: 55 (Brasil) + DDD + número. Ex.: 5531999999999
  whatsappNumber: "5531000000000",

  // TODO: substituir pelo telefone real (formato de exibição)
  phoneDisplay: "(31) 00000-0000",

  // TODO: substituir pelo e-mail oficial
  email: "contato@pulso.com.br",

  // TODO: substituir pelo horário de atendimento real
  businessHours: "Segunda a sexta, das 9h às 18h",

  // TODO: substituir pelo domínio oficial ANTES da publicação.
  // Este valor é usado no SEO (canonical, Open Graph), sitemap.xml e robots.txt.
  siteUrl: "https://www.dominio-da-pulso.com.br",

  // TODO: substituir/remover redes sociais conforme a empresa possuir.
  // Deixe a string vazia ("") para ocultar o link no rodapé.
  social: {
    instagram: "", // ex.: "https://instagram.com/pulso"
    facebook: "",
    linkedin: "",
  },

  // Endereço (opcional). Preencha quando/se for fornecido.
  // Deixe vazio ("") para ocultar da página de contato.
  address: "", // ex.: "Rua Exemplo, 123 - Belo Horizonte/MG"

  /**
   * Mensagens usadas nos diversos links de WhatsApp do site.
   * Centralizadas aqui para manter consistência de comunicação.
   */
  whatsappMessages: {
    default:
      "Olá! Vim pelo site da Pulso e gostaria de falar com um consultor.",
    condo:
      "Olá! Gostaria de solicitar uma análise de Seguro Condomínio com a Pulso.",
    solutions:
      "Olá! Vim pelo site da Pulso e gostaria de conhecer as soluções disponíveis.",
    contact:
      "Olá! Vim pelo site da Pulso e gostaria de mais informações.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
