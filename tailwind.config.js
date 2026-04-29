/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 COLORES
      colors: {
        primary: "#495E57",     // verde
        secondary: "#F4CE14",   // amarillo
        accent: "#EE9972",      // naranja suave
        accentLight: "#FBDABB", // beige
        grayLight: "#EDEFEE",   // fondo claro
        grayDark: "#333333",    // texto oscuro
        white: "#FFFFFF",
        black: "#000000",
      },

      // 🔤 TIPOGRAFÍA
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        serif: ["Markazi Text", "serif"],
      },

      fontSize: {
        display: ["40px", { lineHeight: "1.2" }], // Sub title
        title: ["32px", { lineHeight: "1.2" }],
        lead: ["18px", { lineHeight: "1.5" }],
        body: ["16px", { lineHeight: "1.5" }],
        small: ["14px", { lineHeight: "1.4" }],
      },

      // 🔲 BORDER RADIUS
      borderRadius: {
        DEFAULT: "16px",
        lg: "16px",
      },

      // 📏 ESPACIADO (opcional extra)
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      // 🌑 SOMBRAS (cards)
      boxShadow: {
        card: "0 4px 10px rgba(0,0,0,0.1)",
      },

      // 📐 MAX WIDTH útil para layout
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}