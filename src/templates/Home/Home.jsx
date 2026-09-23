import styles from "./style.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "motion/react";
import Reveal from "@/Components/Reveal/Reveal";

export default function Home({ lang = "en" }) {
  const router = useRouter();
  const isFr = lang === "fr";
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>
          {isFr
            ? "Fournisseur & Exportateur Centella Asiatica Madagascar | Gasikara Medicinal Plants"
            : "Centella Asiatica Madagascar Supplier & Bulk Exporter | Gasikara Medicinal Plants"}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? "Fournisseur et exportateur B2B de feuilles séchées de Centella asiatica (Gotu Kola) 100% sauvages de Madagascar. Teneur élevée en triterpènes totaux vérifiée par HPLC."
              : "B2B supplier and bulk exporter of 100% wild-harvested Centella asiatica (Gotu Kola) dried leaves from Madagascar. High Total Triterpene content, HPLC verified."
          }
        />
        <link
          rel="canonical"
          href={
            isFr
              ? "https://gasikara-plants.com/fr"
              : "https://gasikara-plants.com/"
          }
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://gasikara-plants.com/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://gasikara-plants.com/fr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://gasikara-plants.com/"
        />
        <meta
          property="og:url"
          content={
            isFr
              ? "https://gasikara-plants.com/fr"
              : "https://gasikara-plants.com/"
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            isFr
              ? "Fournisseur Centella Asiatica Madagascar | Feuilles Sauvages Séchées"
              : "Centella Asiatica Madagascar Supplier | Wild-Harvested Dried Leaves"
          }
        />
        <meta
          property="og:description"
          content={
            isFr
              ? "Exportateur direct de Centella asiatica sauvage de Madagascar. Forte teneur en triterpènes, traçabilité et analyses HPLC par lot."
              : "Direct exporter of wild-harvested Centella asiatica from Madagascar. High triterpene content, traceability and batch-tested HPLC analysis."
          }
        />
        <meta
          property="og:image"
          content="https://gasikara-plants.com/assets/gmp-logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            isFr
              ? "Fournisseur Centella Asiatica Madagascar | Gasikara Medicinal Plants"
              : "Centella Asiatica Madagascar Supplier | Gasikara Medicinal Plants"
          }
        />
        <meta
          name="twitter:description"
          content={
            isFr
              ? "Feuilles séchées de Centella asiatica sauvages de Madagascar, vérifiées par HPLC pour industries pharma et cosmétique."
              : "Wild Centella asiatica dried leaves from Madagascar, HPLC verified for pharma and cosmetic industries."
          }
        />
        <meta
          name="twitter:image"
          content="https://gasikara-plants.com/assets/gmp-logo.jpg"
        />
      </Head>
      {/* HERO SECTION */}
      <div className={styles.hero1}>
        <div className={styles.hero}>
          <video autoPlay loop muted className={styles.videoBackground}>
            <source src="/assets/gotuVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.overlay} />
          <motion.div
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.contentLeft}>
              <h1 className={styles.title}>
                {isFr
                  ? "Centella Asiatica sauvage de Madagascar — Validée par la Science"
                  : "Wild-Harvested Centella Asiatica from Madagascar — Verified by Science"}
              </h1>
              <p className={styles.description}>
                {isFr
                  ? "Gasikara Medicinal Plants exporte des feuilles séchées de Centella asiatica 100% sauvages, avec une teneur constamment élevée en triterpènes totaux — appuyée par une analyse HPLC et une chaîne d'approvisionnement fiable."
                  : "Gasikara Medicinal Plants exports 100% wild-harvested, dried Centella asiatica leaves with consistently high Total Triterpene content — backed by HPLC analysis and a reliable supply chain."}
              </p>
              <button
                className={styles.ctaButton}
                onClick={() =>
                  router.push(
                    isFr ? "/fr/centella-asiatica" : "/centella-asiatica",
                  )
                }
              >
                {isFr ? "Notre Produit" : "Our Product"}
              </button>
            </div>
            <div className={styles.contentRight}>
              <img src="assets/mg2.png" alt="" />
            </div>
          </motion.div>
        </div>

        {/* PILLARS */}
        <Reveal as="section" className={styles.section1}>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage: "url(assets/new/cent101.jpeg)",
            }}
          >
            <h2>
              {isFr
                ? "Récolte Sauvage & Approvisionnement"
                : "Wild Harvest & Sourcing"}
            </h2>
          </div>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://as1.ftcdn.net/v2/jpg/03/36/48/88/1000_F_336488872_GIoXi9yCmZbUfAsMyVtYjn8THOG2Vhcc.jpg)",
            }}
          >
            <h2>
              {isFr ? "Traitement & Qualité HPLC" : "Processing & HPLC Quality"}
            </h2>
          </div>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://as1.ftcdn.net/v2/jpg/16/73/45/06/1000_F_1673450627_4ApEUkBmwEmZzJNgJwEyRFCaxDp6dVbR.jpg)",
            }}
          >
            <h2>
              {isFr ? "Export par Fret Maritime" : "Export by Sea Freight"}
            </h2>
          </div>
        </Reveal>
      </div>

      {/* CTA BANNER */}
      <Reveal as="section" className={styles.ctaBanner}>
        <p>
          {isFr
            ? "Vous cherchez un fournisseur fiable de Centella asiatica de Madagascar ?"
            : "Looking for a reliable Centella asiatica supplier from Madagascar?"}
        </p>
        <button onClick={() => router.push(isFr ? "/fr/contact" : "/contact")}>
          {isFr ? "Contactez-nous" : "Contact us"}
        </button>
      </Reveal>

      {/* WHY US */}
      <Reveal as="section" className={styles.partnerSection}>
        <div className={styles.partnerContent}>
          <h2>
            {isFr
              ? "Pourquoi Gasikara Medicinal Plants"
              : "Why Gasikara Medicinal Plants"}
          </h2>
          <p>
            {isFr
              ? "La Centella asiatica sauvage de Madagascar est mondialement reconnue pour son profil phytochimique supérieur. Nous combinons cet avantage naturel à un contrôle qualité rigoureux et documenté — de la récolte à la livraison."
              : "Madagascar's wild Centella asiatica is globally recognized for its superior phytochemical profile. We combine this natural advantage with rigorous, documented quality control — from harvest to delivery."}
          </p>

          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <span>🔬</span>
              <h3>{isFr ? "Forte Teneur en TTT" : "High TTT Content"}</h3>
              <p>
                {isFr
                  ? "Teneur constamment élevée en triterpènes totaux — asiaticoside et madecassoside — vérifiée par analyse HPLC interne sur chaque lot."
                  : "Consistently high Total Triterpene content — asiaticoside and madecassoside — verified by in-house HPLC analysis on every batch."}
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🌿</span>
              <h3>{isFr ? "100% Sauvage" : "100% Wild-Harvested"}</h3>
              <p>
                {isFr
                  ? "Provenance exclusive de la flore sauvage de Madagascar. Les sols et le climat uniques de l'île produisent naturellement des feuilles puissantes, expédition après expédition."
                  : "Sourced exclusively from Madagascar's wild flora. The island's unique soils and climate deliver naturally potent leaves, shipment after shipment."}
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🤝</span>
              <h3>
                {isFr
                  ? "Chaîne d'Approvisionnement Éthique"
                  : "Ethical Supply Chain"}
              </h3>
              <p>
                {isFr
                  ? "Un réseau dense de cueilleurs formés — principalement des femmes des communautés rurales — sélectionnés et supervisés par nos équipes de terrain depuis de nombreuses années."
                  : "A dense network of trained pickers — predominantly women from rural communities — selected and supervised by our field teams over many years."}
              </p>
            </div>
          </div>

          <button
            className={styles.partnerButton}
            onClick={() => router.push(isFr ? "/fr/contact" : "/contact")}
          >
            {isFr ? "Demander des Échantillons" : "Request Samples"}
          </button>
        </div>
      </Reveal>

      {/* KEY NUMBERS */}
      <Reveal as="section" className={styles.capacitySection}>
        <h2>{isFr ? "Notre Envergure" : "Our Scale"}</h2>
        <div className={styles.capacityGrid}>
          <div className={styles.capacityCard}>
            <p className={styles.metricValue}>
              {isFr ? "200+ Tonnes / An" : "200+ Tons / Year"}
            </p>
            <p>
              {isFr
                ? "Feuilles séchées de Centella asiatica exportées annuellement."
                : "Dried Centella asiatica leaves exported annually."}
            </p>
          </div>
          <div className={styles.capacityCard}>
            <p className={styles.metricValue}>
              {isFr ? "4 500+ Cueilleurs" : "4,500+ Pickers"}
            </p>
            <p>
              {isFr
                ? "Réseau de récolte formé dans les régions d'approvisionnement de Madagascar."
                : "Trained harvesting network across Madagascar's sourcing regions."}
            </p>
          </div>
          <div className={styles.capacityCard}>
            <p className={styles.metricValue}>
              {isFr ? "Balles de 50 kg" : "50 kg Bales"}
            </p>
            <p>
              {isFr
                ? "Balles de polypropylène prêtes à l'export, optimisées pour le fret maritime."
                : "Export-ready polypropylene bales, optimized for sea freight."}
            </p>
          </div>
          <div className={styles.capacityCard}>
            <p className={styles.metricValue}>
              {isFr ? "Vérifié HPLC" : "HPLC Verified"}
            </p>
            <p>
              {isFr
                ? "Analyse en laboratoire interne à chaque étape critique de la production."
                : "In-house laboratory analysis at every critical stage of production."}
            </p>
          </div>
        </div>
      </Reveal>

      {/* CENTELLA ASIATICA SUPPLIER */}
      <Reveal as="section" className={styles.centellaSection}>
        <div className={styles.centellaContent}>
          <div className={styles.centellaText}>
            <span className={styles.badge}>
              {isFr ? "Notre Expertise" : "Our Expertise"}
            </span>
            <h2>
              {isFr
                ? "Votre Fournisseur de Confiance en Centella Asiatica"
                : "Your Trusted Centella Asiatica Supplier"}
            </h2>
            <p>
              {isFr
                ? "De la plante sauvage aux feuilles séchées prêtes à l'export, nous contrôlons chaque étape de la chaîne d'approvisionnement de Centella asiatica à Madagascar. Nous expédions notre produit vérifié HPLC à des clients dans le monde entier, au service des industries pharmaceutique, cosmétique et nutraceutique."
                : "From wild plant to export-ready dried leaves, we control every step of the Centella asiatica supply chain in Madagascar. We ship our HPLC-verified product to clients worldwide, supporting pharmaceutical, cosmetic, and nutraceutical industries across the globe."}
            </p>
          </div>

          <div className={styles.centellaGallery}>
            <img
              src="/assets/new/image9.jpg"
              alt="Wild Centella asiatica plant"
              className={styles.imgLarge}
            />
            <img
              src="/assets/RM1.jpg"
              alt="Dried Centella asiatica leaves"
              className={styles.imgSmall}
            />
            <img
              src="/assets/image33.png"
              alt="Centella asiatica dried leaves bales"
              className={styles.imgSmall}
            />
          </div>
        </div>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal as="section" className={styles.section4}>
        <h2 className={styles.sectionTitle}>
          {isFr
            ? "Un Seul Produit. Une Qualité Sans Compromis."
            : "One Product. Uncompromised Quality."}
        </h2>
        <p className={styles.sectionSubtitle}>
          {isFr
            ? "Nous ne rivalisons pas sur le volume. Nous rivalisons sur l'excellence biochimique — et nous l'appuyons par des données."
            : "We do not compete on volume. We compete on biochemical excellence — and we back it with data."}
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => router.push(isFr ? "/fr/contact" : "/contact")}
        >
          {isFr ? "Contactez-nous" : "Get in Touch"}
        </button>
      </Reveal>
    </div>
  );
}
