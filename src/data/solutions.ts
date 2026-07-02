import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ShieldCheck,
  HeartPulse,
  Navigation,
  Gift,
  Briefcase,
} from "lucide-react";

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Rota interna (quando houver página) — os demais serviços não têm página própria nesta versão. */
  to?: string;
  featured?: boolean;
}

/** Cards da seção "Outras soluções" na home. */
export const homeSolutions: Solution[] = [
  {
    id: "seguros",
    title: "Seguros",
    description:
      "Soluções para proteção patrimonial, empresarial e outros riscos.",
    icon: ShieldCheck,
  },
  {
    id: "saude",
    title: "Planos de saúde",
    description:
      "Consultoria para encontrar alternativas adequadas ao perfil e às necessidades do cliente.",
    icon: HeartPulse,
  },
  {
    id: "rastreamento",
    title: "Rastreamento veicular",
    description: "Soluções de monitoramento e proteção para veículos.",
    icon: Navigation,
  },
  {
    id: "beneficios",
    title: "Benefícios",
    description:
      "Alternativas voltadas para empresas, grupos, clientes e colaboradores.",
    icon: Gift,
  },
];

/** Lista completa apresentada na página /solucoes. */
export const solutionsList: Solution[] = [
  {
    id: "seguro-condominio",
    title: "Seguro Condomínio",
    description:
      "Proteção estruturada para o patrimônio, as áreas comuns, a administração, os moradores e terceiros do condomínio.",
    icon: Building2,
    to: "/seguro-condominio",
    featured: true,
  },
  {
    id: "seguros-empresariais",
    title: "Seguros empresariais e patrimoniais",
    description:
      "Proteção de patrimônios, operações e responsabilidades de empresas de diferentes portes e segmentos.",
    icon: Briefcase,
  },
  {
    id: "planos-de-saude",
    title: "Planos de saúde",
    description:
      "Consultoria para identificar alternativas de plano de saúde adequadas ao perfil e às necessidades do cliente.",
    icon: HeartPulse,
  },
  {
    id: "rastreamento",
    title: "Rastreamento veicular",
    description:
      "Soluções para acompanhamento, localização e proteção veicular.",
    icon: Navigation,
  },
  {
    id: "beneficios",
    title: "Benefícios",
    description:
      "Soluções voltadas para empresas, equipes, grupos e clientes.",
    icon: Gift,
  },
];
