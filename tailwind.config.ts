import type { Config } from 'tailwindcss'
// const plugin = require('tailwindcss/plugin')
// const typography = require('@tailwindcss/typography')

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // typography,
    // plugin(function({ addBase, theme }) {
    //   addBase({
    //     'body': { color: '#333333', backgroundColor: '#fffcf5', fontFamily: 'Cabin' },
    //     'h1': { fontSize: theme('fontSize.2xl') },
    //     'h2': { fontSize: theme('fontSize.xl'), fontFamily: 'Cabin' },
    //     'h3': { fontSize: theme('fontSize.lg') },
    //     'p': { fontSize: theme('fontsize.md') },
    //   })
    // })
  ],
} satisfies Config

