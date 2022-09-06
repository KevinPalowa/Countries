/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#202c37",
        light: "#fafafa",
        darker: "#2b3945",
      },
    },
    fontFamily: {
      sans: ["nunito sans"],
    },
  },
  plugins: [],
};
