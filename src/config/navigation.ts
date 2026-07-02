export interface NavItem {
  label: string;
  to: string;
}

/** Navegação principal (cabeçalho e menu mobile). */
export const mainNav: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Seguro Condomínio", to: "/seguro-condominio" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Contato", to: "/contato" },
];

/** Soluções listadas no rodapé. */
export const footerSolutions: NavItem[] = [
  { label: "Seguro Condomínio", to: "/seguro-condominio" },
  { label: "Seguros empresariais", to: "/solucoes" },
  { label: "Planos de saúde", to: "/solucoes" },
  { label: "Rastreamento veicular", to: "/solucoes" },
  { label: "Benefícios", to: "/solucoes" },
];
