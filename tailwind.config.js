/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#8A3FFC",
        lightGray: "#667085",
        lighterGray: "#D0D5DD",
        lightestGray: "#F2F4F7",
        alert: "#D92D20",
        warning: "#F79009",
      },
    },
  },
  plugins: [],
  darkMode: ["class", ".figma-dark"],
};
