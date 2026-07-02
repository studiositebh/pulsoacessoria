/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Provisional Pulso brand palette.
        // Change these values to match the official brand once it is defined.
        brand: {
          // Deep navy blue — primary color
          50: "#eef3fb",
          100: "#d6e2f5",
          200: "#adc4ea",
          300: "#7fa1dc",
          400: "#4f79c9",
          500: "#2f5aad",
          600: "#22448a",
          700: "#1b3670",
          800: "#152a58",
          900: "#0f1f42",
          950: "#0a1530",
        },
        accent: {
          // Discreet bright blue / cyan — highlight color
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
        card: "0 1px 2px rgba(15, 31, 66, 0.04), 0 8px 24px rgba(15, 31, 66, 0.06)",
        "card-hover":
          "0 4px 8px rgba(15, 31, 66, 0.06), 0 16px 40px rgba(15, 31, 66, 0.12)",
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
