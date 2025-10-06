/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f5f5f5",
        "sail-blue": "#003366",
        "sail-orange": "#FF6600",
        primary: "#003366",
        secondary: "#FF6600",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
