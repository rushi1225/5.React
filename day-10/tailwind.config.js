/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add here your color
      colors: {
        rushi: "#3f3cbb",
      },
    },
  },
  plugins: [],
};
