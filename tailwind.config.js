/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hpBlue: "#0a77a0",
        hpDark: "#1e3a5f",
        hpBlush: "#f9e0d8",
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
