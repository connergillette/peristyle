/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'p': { fontSize: theme('fontsize.md') },
      })
    })
  ]
}
