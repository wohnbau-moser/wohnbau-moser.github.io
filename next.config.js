// eslint-disable-next-line jsdoc/valid-types
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['components', 'libs']
  },
  images: {
    loader: 'custom'
  },
  env: {
    domain: 'bewertung.wohnbau-moser.com',
    // eslint-disable-next-line no-secrets/no-secrets
    iwaLeadKey: 'FJV692!UM33!ZQY738?PM86$'
  }
}
