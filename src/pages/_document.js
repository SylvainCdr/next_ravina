// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const asPath = ctx.asPath || "";
    const lang = asPath.startsWith("/fr") ? "fr" : "en";
    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang}>
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/assets/gmp-logo.jpg" />

          {/* Données structurées globales (Organization) */}
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

          {/* Polices externes optimisées (Roboto + Poppins) */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* FontAwesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
