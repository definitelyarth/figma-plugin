/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#8A3FFC",
        brand700: "#742AE9",
        lightGray: "#667085",
        lighterGray: "#D0D5DD",
        lightestGray: "#F2F4F7",
        alert: "#D92D20",
        warning: "#F79009",
        neutral900: "#101828",
        lightError50: "#FEF3F2",
        lightError100: "#FEE4E2",
        lightError700: "#B42318",
      },
    },
  },
  plugins: [],
  // darkMode: ["class", ".figma-dark"],
};
