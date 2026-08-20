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
  { label: "Seguro Empresarial", to: "/solucoes" },
  { label: "Plano de Saúde", to: "/solucoes" },
  { label: "Rastreamento Veicular", to: "/solucoes" },
  { label: "Benefício", to: "/solucoes" },
];
