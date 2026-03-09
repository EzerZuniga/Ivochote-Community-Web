/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2FDE8",
          100: "#E5FCCD",
          200: "#D9F7A4",
          300: "#CEF17B",
          400: "#A8D45A",
          500: "#7AB33D",
          600: "#4F8F26",
          700: "#2D6D1E",
          800: "#155A29",
          900: "#084734",
          950: "#042E22",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
