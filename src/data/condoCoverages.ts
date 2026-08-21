import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Zap,
  GlassWater,
  Car,
  Waves,
  ShieldAlert,
  UserCog,
  ParkingSquare,
  Plus,
} from "lucide-react";

export interface Coverage {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Coberturas possíveis do Seguro Condomínio.
 * IMPORTANTE: são exemplos de coberturas que PODEM ser contratadas.
 * A disponibilidade depende da modalidade, da análise do risco e das
 * condições da apólice.
 */
export const condoCoverages: Coverage[] = [
  {
    id: "incendio",
    title: "Incêndio",
    description:
      "Proteção do patrimônio e das áreas comuns diante de riscos de incêndio, dentro dos limites da apólice.",
    icon: Flame,
  },
  {
    id: "danos-eletricos",
    title: "Danos elétricos",
    description:
      "Cobertura para equipamentos e instalações afetados por variações e descargas elétricas.",
    icon: Zap,
  },
  {
    id: "quebra-vidros",
    title: "Quebra de vidros",
    description:
      "Reparo ou reposição de vidros de portarias, salões e áreas comuns.",
    icon: GlassWater,
  },
  {
    id: "impacto-veiculos",
    title: "Impacto de veículos",
    description:
      "Danos causados por veículos a portões, fachadas e outras estruturas do condomínio.",
    icon: Car,
  },
  {
    id: "danos-tubulacoes",
    title: "Danos em tubulações",
    description:
      "Prejuízos decorrentes de problemas hidráulicos que afetem áreas comuns e unidades.",
    icon: Waves,
  },
  {
    id: "rc-condominio",
    title: "Responsabilidade civil do condomínio",
    description:
      "Proteção diante de danos a moradores ou terceiros ocorridos nas dependências do condomínio.",
    icon: ShieldAlert,
  },
  {
    id: "rc-sindico",
    title: "Responsabilidade civil do síndico",
    description:
      "Cobertura relacionada a situações do exercício da função de síndico, conforme condições da apólice.",
    icon: UserCog,
  },
  {
    id: "rc-garagem",
    title: "Responsabilidade civil de garagem",
    description:
      "Proteção para situações envolvendo veículos e estruturas nas áreas de garagem.",
    icon: ParkingSquare,
  },
  {
    id: "outras",
    title: "Outras coberturas",
    description:
      "Coberturas adicionais podem ser incluídas conforme a necessidade e o perfil de risco do condomínio.",
    icon: Plus,
  },
];

export interface RiskExample {
  id: string;
  title: string;
  description: string;
  image: string;
}

/** Situações práticas que podem gerar prejuízos (home e landing). */
export const riskExamples: RiskExample[] = [
  {
    id: "descarga",
    title: "Danos elétricos",
    description:
      "Uma descarga elétrica pode danificar placas, bombas, sistemas e equipamentos de alto valor.",
    image: "/images/situacoes-do-dia-a-dia/danos-eletricos.webp",
  },
  {
    id: "impacto",
    title: "Impacto de veículos",
    description:
      "Um automóvel pode atingir portões, fachadas ou outras estruturas do condomínio.",
    image: "/images/situacoes-do-dia-a-dia/impacto-de-veiculos.webp",
  },
  {
    id: "portao",
    title: "Portão eletrônico",
    description:
      "O portão eletrônico pode danificar o automóvel de um morador ao fechar.",
    image: "/images/situacoes-do-dia-a-dia/portao-eletronico.webp",
  },
  {
    id: "vazamento",
    title: "Vazamentos e tubulações",
    description:
      "Problemas hidráulicos podem afetar áreas comuns, unidades e imóveis vizinhos.",
    image: "/images/situacoes-do-dia-a-dia/vazamentos-e-tubulacoes.webp",
  },
  {
    id: "vidro",
    title: "Quebra de vidros",
    description:
      "Vidros de portarias, salões e áreas comuns podem ser danificados.",
    image: "/images/situacoes-do-dia-a-dia/quebra-de-vidros.webp",
  },
  {
    id: "sindico",
    title: "Responsabilidade do síndico",
    description:
      "Decisões administrativas podem gerar questionamentos e responsabilização.",
    image: "/images/situacoes-do-dia-a-dia/responsabilidade-do-sindico.webp",
  },
];
