import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Script from 'next/script'
import { imageLoader } from '@libs/image-loader'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Immobilienbewertung | Moser Wohnbau &amp; Immobilien GmbH"
        />
        <title>Immobilienbewertung | Moser Wohnbau &amp; Immobilien GmbH</title>
        <meta name="description" content="Bewerten Sie jetzt Ihre Immobilie!" />
        <meta property="og:description" content="Bewerten Sie jetzt Ihre Immobilie!" />
      </Head>
      <section className="p-16 text-center bg-black">
        <h1 className="text-4xl text-white font-light">Bewerten Sie jetzt Ihre Immobilie!</h1>
      </section>
      <section className="p-16 bg-[#CCCCCC] text-[#323335] text-center">
        <div id="iwa-widget" data-key={process.env.iwaLeadKey} />
        <Script src="https://www.immobilienwertanalyse.de/iwalead/plugin.js" />
      </section>
      <section className="p-16 bg-white text-center">
        <a href="https://www.wohnbau-moser.com/" className="bg-black text-white py-4 px-8 rounded">
          Zurück zur Hauptseite
        </a>
      </section>
      <footer className="bg-black p-16 text-center">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width="159"
          height="99.7725"
          loader={imageLoader}
        />
        <div className="mt-10 flex justify-center space-x-2">
          <a
            href="https://www.facebook.com/103385991395979"
            className="w-10 h-10 flex justify-center items-center text-xl"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon className="text-white" icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/moser__wohnbau/"
            className="w-10 h-10 flex justify-center items-center text-2xl"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon className="text-white" icon={faInstagram} />
          </a>
          <a
            href="https://wa.me/4915904863415"
            className="w-10 h-10 flex justify-center items-center text-2xl"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon className="text-white" icon={faWhatsapp} />
          </a>
        </div>
        <nav className="mt-10 flex justify-center space-x-5">
          <a href="https://www.wohnbau-moser.com/impressum/" className="text-white underline">
            Impressum
          </a>
          <a href="https://www.wohnbau-moser.com/datenschutz/" className="text-white underline">
            Datenschutz
          </a>
        </nav>
      </footer>
    </>
  )
}

export default Index
