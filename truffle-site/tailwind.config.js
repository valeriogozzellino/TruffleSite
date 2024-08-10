/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    backgroundColor: {
      "custom-brown-opacity": "rgba(54, 37, 26, 0.75)", // Aggiunta di un nuovo colore con opacità
      "custom-brown-dark": "rgba(54, 37, 26, 1)",
    },
  },
};

export const plugins = [];
