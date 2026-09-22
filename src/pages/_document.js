// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = ctx.pathname && ctx.pathname.startsWith("/fr") ? "fr" : "en";
    const path = ctx.pathname === "/" ? "" : ctx.pathname || "";
    const url = `https://gasikara-plants.com${path}`;
    return { ...initialProps, lang, url };
  }

  render() {
    const { lang, url } = this.props;
    return (
      <Html lang={lang}>
        <Head>
          {/* Meta Tags for SEO */}

          <meta
            name="description"
            content="Gasikara Medicinal Plants — Wild-harvested Centella asiatica dried leaves from Madagascar. High Total Triterpene content, HPLC verified."
          />
          <meta
            name="keywords"
          content="Centella asiatica Madagascar supplier, wild-harvested Centella asiatica dried leaves, high triterpene Centella asiatica bulk, asiaticoside madecassoside raw material, ethical botanical sourcing Madagascar"
        />
        <meta name="author" content="Gasikara Medicinal Plants" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />
        <meta property="og:site_name" content="Gasikara Medicinal Plants" />

        {/* Organization structured data (JSON-LD) for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gasikara Medicinal Plants",
              url: "https://gasikara-plants.com",
              logo: "https://gasikara-plants.com/assets/gmp-logo.jpg",
              description:
                lang === "fr"
                  ? "Exportateur de Centella asiatica sauvage de Madagascar, vérifiée par HPLC."
                  : "Exporter of wild-harvested Centella asiatica from Madagascar, HPLC verified.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Antananarivo",
                addressCountry: "MG",
              },
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/assets/gmp-logo.jpg" />

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
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
    );
  }
}

export default MyDocument;
