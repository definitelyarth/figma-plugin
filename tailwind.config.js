/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#8A3FFC",
      },
    },
  },
  plugins: [],
  darkMode: ["class", ".figma-dark"],
};
