/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pulso brand palette — derived from the official logo (petrol/teal).
        // The logo wordmark color sits around brand-600/700 (#12667d).
        brand: {
          50: "#eef7fa",
          100: "#d2ebf1",
          200: "#a9d7e2",
          300: "#73bccf",
          400: "#3f9bb4",
          500: "#1f7d99",
          600: "#12667d", // ← cor do logotipo (referência)
          700: "#0f5567",
          800: "#104555",
          900: "#103a46",
          950: "#082630", // fundo escuro (hero/rodapé)
        },
        accent: {
          // Ciano mais vivo — cor de destaque, harmoniza com o teal da marca
          50: "#ecfbff",
          100: "#cff4fd",
          200: "#a5e9fb",
          300: "#67d8f6",
          400: "#22bfe9",
          500: "#06a0cf",
          600: "#0880ae",
          700: "#0e668d",
          800: "#155472",
          900: "#164760",
        },
        ink: {
          // Dark gray text tones
          DEFAULT: "#1f2733",
          soft: "#495260",
          muted: "#6b7482",
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
        card: "0 1px 2px rgba(8, 38, 48, 0.04), 0 8px 24px rgba(8, 38, 48, 0.06)",
        "card-hover":
          "0 4px 8px rgba(8, 38, 48, 0.06), 0 16px 40px rgba(8, 38, 48, 0.12)",
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
