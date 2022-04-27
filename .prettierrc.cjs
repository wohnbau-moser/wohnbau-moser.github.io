module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSameLine: true,
  arrowParens: 'avoid',
  printWidth: 100,
  plugins: [
    require.resolve('prettier-plugin-import-sort'),
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson')
  ]
}
