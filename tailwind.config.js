/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "sail-blue": "#1d4ed8",
        "sail-orange": "#f97316",
        "light-gray": "#f3f4f6"
      },
    },
  },
  plugins: [],
}
