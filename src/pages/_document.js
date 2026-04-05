// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta Tags for SEO */}

        <meta
          name="description"
          content="Gasikara Medicinal Plants — Wild-harvested Centella asiatica dried leaves from Madagascar. High Total Triterpene content, HPLC verified, UEBT compliant."
        />
        <meta
          name="keywords"
          content="Centella asiatica Madagascar supplier, wild-harvested Centella asiatica dried leaves, high triterpene Centella asiatica bulk, asiaticoside madecassoside raw material, ethical botanical sourcing Madagascar"
        />
        <meta name="author" content="Gasikara Medicinal Plants" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Gasikara Medicinal Plants — Centella Asiatica from Madagascar"
        />
        <meta
          property="og:description"
          content="100% wild-harvested Centella asiatica dried leaves — high TTT content, HPLC verified, traceable from field to export."
        />
        {/* <meta property="og:url" content="https://www.gasikara-medicinals.com" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Gasikara Medicinal Plants" />

        {/* Favicon */}
        <link rel="icon" href="" />

        {/*  External Stylesheets */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
        <link
          href="https://fonts.cdnfonts.com/css/quicksand"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link href="https://fonts.cdnfonts.com/css/roboto" rel="stylesheet" />

        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
