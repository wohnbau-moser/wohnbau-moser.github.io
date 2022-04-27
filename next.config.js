const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['components']
  },
  env: {
    title: 'Moser Wohnbau &amp; Immobilien GmbH'
  }
})
