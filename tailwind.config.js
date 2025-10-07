/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
    "./constants.ts",
  ],
  theme: {
    extend: {
      colors: {
        'sail-blue': '#003366',
        'sail-orange': '#FF6600',
        'light-gray': '#f4f7fa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  safelist: [
    // Add any classes you generate dynamically, for example:
    'bg-sail-blue',
    'bg-sail-orange',
    'text-sail-blue',
    'text-sail-orange',
  ],
  plugins: [],
};
