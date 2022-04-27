// eslint-disable-next-line import/no-extraneous-dependencies, node/no-unpublished-require
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Raleway', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: []
}
