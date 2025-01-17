/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // my written color
      colors: {
        rushi: "#fd2d00",
      },
    },
  },
  plugins: [],
};
