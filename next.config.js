// eslint-disable-next-line jsdoc/valid-types
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['components']
  },
  env: {
    title: 'Moser Wohnbau &amp; Immobilien GmbH'
  }
}
