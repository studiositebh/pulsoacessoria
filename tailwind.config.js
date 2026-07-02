/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial da Pulso — derivada da cor da marca #065672 (azul-petróleo).
        // Cor principal: brand-700 (#065672). Escuros: 800/900/950. Claros: 50/100/200.
        brand: {
          50: "#eef7f9", // --brand-background-soft
          100: "#dceef3", // --brand-primary-light
          200: "#cfe2e7", // --brand-border
          300: "#a6cdd6",
          400: "#6ba7b6",
          500: "#3a8497",
          600: "#166a83",
          700: "#065672", // ← cor oficial da marca (--brand-primary)
          800: "#043d51", // --brand-primary-dark
          900: "#032f3e", // --brand-primary-darker
          950: "#02222d",
        },
        accent: {
          // Destaque na mesma família petróleo (versão mais viva da marca),
          // evitando ciano genérico sem relação com o logotipo.
          50: "#e9f4f7",
          100: "#cbe6ec",
          200: "#a0d2dd",
          300: "#6cb6c7",
          400: "#3d97ac",
          500: "#1a7d94",
          600: "#0a6a83",
          700: "#085a70",
          800: "#0b4a5d",
          900: "#0d3f4f",
        },
        ink: {
          // Tons de texto (cinza-escuro)
          DEFAULT: "#12252d", // --text-primary
          soft: "#53666e", // --text-secondary
          muted: "#6b7c84",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1da851",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(3, 47, 62, 0.04), 0 8px 24px rgba(3, 47, 62, 0.06)",
        "card-hover":
          "0 4px 8px rgba(3, 47, 62, 0.06), 0 16px 40px rgba(3, 47, 62, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
