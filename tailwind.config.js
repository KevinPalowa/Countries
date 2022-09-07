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
        darker: "#202c37",
        light: "#fafafa",
        dark: "#2b3945",
      },
    },
    fontFamily: {
      sans: ["nunito sans"],
    },
  },
  plugins: [],
};
