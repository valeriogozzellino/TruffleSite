/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#120e0b",
        surface: "#1a1410",
        card: "#231a14",
        line: "rgba(243, 233, 216, 0.1)",
        gold: { DEFAULT: "#d4a24c", soft: "#e8c27a", deep: "#a87a2c" },
        cream: "#f3e9d8",
        muted: "#b9a998",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(212, 162, 76, 0.35)",
      },
    },
  },
  plugins: [],
};
