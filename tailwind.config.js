/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app/**/*.ts", "./app/**/*.{scss, css}"],
  theme: {
    extend: {
      colors: {
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)"
      }
    },
  },
  plugins: [],
}
