import { Head, Html, Main, NextScript } from 'next/document'

// eslint-disable-next-line react/function-component-definition
function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow, archive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Moser Wohnbau &amp; Immobilien GmbH" />
        <meta property="og:image" content={`https://${process.env.domain}/images/open-graph.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
