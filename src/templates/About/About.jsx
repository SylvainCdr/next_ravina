import styles from "./style.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "motion/react";
import Reveal from "@/Components/Reveal/Reveal";

export default function About({ lang = "en" }) {
  const router = useRouter();
  const isFr = lang === "fr";
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>
          {isFr
            ? "À Propos | Gasikara Medicinal Plants — Centella Asiatica Madagascar"
            : "About Us | Gasikara Medicinal Plants — Centella Asiatica Madagascar"}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? "Découvrez Gasikara Medicinal Plants : notre histoire, notre réseau de récolte sauvage à Madagascar, et notre engagement envers l'exportation de Centella asiatica de qualité."
              : "Discover Gasikara Medicinal Plants: our story, our wild-harvesting network in Madagascar, and our commitment to quality Centella asiatica exports."
          }
        />
        <link
          rel="canonical"
          href={
            isFr
              ? "https://gasikara-plants.com/fr/about-gasikara-medicinal-plants"
              : "https://gasikara-plants.com/about-gasikara-medicinal-plants"
          }
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://gasikara-plants.com/about-gasikara-medicinal-plants"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://gasikara-plants.com/fr/about-gasikara-medicinal-plants"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://gasikara-plants.com/about-gasikara-medicinal-plants"
        />
        <meta
          property="og:title"
          content={
            isFr
              ? "À Propos de Gasikara Medicinal Plants"
              : "About Gasikara Medicinal Plants"
          }
        />
        <meta
          property="og:description"
          content={
            isFr
              ? "Notre histoire, notre réseau de récolte sauvage à Madagascar et notre engagement qualité."
              : "Our story, our wild-harvesting network in Madagascar, and our commitment to quality."
          }
        />
        <meta
          property="og:image"
          content="https://gasikara-plants.com/assets/gmp-logo.jpg"
        />
      </Head>
      {/* HERO */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>
          {isFr
            ? "À Propos de Gasikara Medicinal Plants"
            : "About Gasikara Medicinal Plants"}
        </h1>
        <p>
          {isFr
            ? "Une entreprise malgache. Un seul produit. Une exigence sans compromis."
            : "A Malagasy company. One product. An uncompromising standard."}
        </p>
      </motion.div>

      <div className={styles.intro}>
        <div className={styles.introContent}>
          {/* WHO WE ARE */}
          <Reveal as="section" className={styles.history}>
            <div className={styles.history1}>
              <h2>{isFr ? "Qui Nous Sommes" : "Who We Are"}</h2>
              <p>
                {isFr ? (
                  <>
                    Madagascar abrite l'une des{" "}
                    <strong>Centella asiatica</strong> les plus bioactives au
                    monde — et nous avons bâti toute notre activité autour de
                    son exportation dans les meilleures conditions.
                  </>
                ) : (
                  <>
                    Madagascar is home to some of the world's most bioactive{" "}
                    <strong>Centella asiatica</strong> — and we have built our
                    entire business around bringing it to you at its best.
                  </>
                )}
              </p>
              <p>
                {isFr ? (
                  <>
                    Nous sommes une entreprise malgache exportant des feuilles
                    séchées de Centella asiatica 100% sauvages vers les marchés
                    internationaux. Tout ce que nous faisons repose sur une
                    seule conviction :{" "}
                    <strong>
                      la qualité de la matière première est le fondement de
                      toute grande formulation
                    </strong>
                    . Cette conviction guide notre approvisionnement, la
                    formation de nos équipes, notre traitement et notre
                    livraison.
                  </>
                ) : (
                  <>
                    We are a Malagasy company exporting 100% wild-harvested,
                    dried Centella asiatica leaves to international markets.
                    Everything we do is oriented around a single conviction:
                    that{" "}
                    <strong>
                      raw material quality is the foundation of every great
                      formulation
                    </strong>
                    . That conviction shapes how we source, how we train our
                    people, how we process, and how we deliver.
                  </>
                )}
              </p>
              <p>
                {isFr
                  ? "Nous ne rivalisons pas sur le volume. Nous rivalisons sur l'excellence biochimique — et nous l'appuyons par des données."
                  : "We do not compete on volume. We compete on biochemical excellence — and we back it with data."}
              </p>
            </div>
            <div className={styles.history2}>
              <img src="/assets/mg-map.svg" alt="Madagascar sourcing regions" />
            </div>
          </Reveal>

          {/* WHY MADAGASCAR — inside introContent to match SCSS */}
          <Reveal as="section" className={styles.values}>
            <h2>
              {isFr
                ? "Pourquoi Madagascar. Pourquoi Nous."
                : "Why Madagascar. Why Us."}
            </h2>
            <p>
              {isFr
                ? "La Centella asiatica de Madagascar est mondialement reconnue pour son profil phytochimique supérieur. La biodiversité unique de l'île et ses conditions de croissance produisent des feuilles avec des concentrations en triterpènes qui surpassent constamment les alternatives cultivées."
                : "Madagascar's Centella asiatica is globally recognized for its superior phytochemical profile. The island's unique biodiversity and growing conditions produce leaves with triterpene concentrations that consistently outperform cultivated alternatives."}
            </p>
            <p>
              {isFr ? (
                <>
                  Nous sommes l'un des rares exportateurs à combiner cet
                  avantage naturel avec un{" "}
                  <strong>contrôle qualité rigoureux et documenté</strong> de la
                  récolte à la livraison — ce qui fait de nous un partenaire
                  fiable pour les acheteurs qui ne peuvent se permettre de
                  compromis sur l'intégrité de la matière première.
                </>
              ) : (
                <>
                  We are one of the few exporters combining this natural
                  advantage with{" "}
                  <strong>rigorous, documented quality control</strong> from
                  harvest to delivery — making us a reliable partner for buyers
                  who cannot afford to compromise on raw material integrity.
                </>
              )}
            </p>
          </Reveal>
        </div>

        {/* ILLUSTRATIONS — outside introContent, direct child of intro */}
        <Reveal as="section" className={styles.illustrations}>
          <img src="/assets/new/image2.jpg" />
          <img src="/assets/new/image5.jpg" />
          <img src="/assets/new/image11.jpg" />
        </Reveal>

        {/* OUR SOURCING MODEL */}
        <Reveal as="section" className={styles.operations}>
          <h2>Our Sourcing Model</h2>
          <p>
            At the heart of our operation is a dense, well-structured network of
            trained pickers — predominantly women from the rural communities
            where we work. These pickers are not occasional contractors. They
            are the backbone of our supply chain, selected, trained, and
            supervised over many years by our field teams to uphold strict
            quality and operational standards.
          </p>

          <div className={styles.opsGrid}>
            <div className={styles.opCard}>
              <span>🌿</span>
              <h3>Field Collection</h3>
              <p>
                Wild-harvested leaves across Madagascar's Alaotra-Mangoro and
                Atsimo-Atsinanana regions. Pickers are continuously trained on
                harvesting and handling standards.
              </p>
            </div>

            <div className={styles.opCard}>
              <span>🌞</span>
              <h3>Drying & Processing</h3>
              <p>
                Semi-dried at collection point, then transported to regional
                warehouses for controlled drying. Final pressing and packing at
                our central facility.
              </p>
            </div>

            <div className={styles.opCard}>
              <span>🔬</span>
              <h3>Laboratory Verification</h3>
              <p>
                HPLC analysis confirming Total Triterpene content at every
                critical stage. Every batch is delivered with full analytical
                documentation.
              </p>
            </div>
          </div>
        </Reveal>

        {/* IMPACT NUMBERS */}
        <Reveal as="section" className={styles.impact}>
          <h2>In Numbers</h2>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h3>4,500+</h3>
              <p>Trained pickers in our network</p>
            </div>
            <div className={styles.stat}>
              <h3>200+ T</h3>
              <p>Exported annually</p>
            </div>

            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Quality</p>
            </div>
          </div>
        </Reveal>

        {/* CERTIFICATIONS */}
        {/* <section className={styles.certifications}>
          <div className={styles.certificationsContent}>
            <h2>Certifications & Standards</h2>
            <p>
              Gasikara Medicinal Plants operates under strict compliance with
              the <strong>UEBT (Union for Ethical BioTrade)</strong> standards.
              Our operations are reviewed regularly to ensure transparency,
              traceability, and ethical sourcing at every level of the supply
              chain.
            </p>
            <div className={styles.certLogos}>
              <img src="/assets/UEBT1.png" alt="UEBT certification" />
            </div>
          </div>
        </section> */}

        {/* LOCATION */}
        <Reveal as="section" className={styles.location}>
          <div className={styles.locationContent}>
            <h2>{isFr ? "Basés à Madagascar" : "Based in Madagascar"}</h2>
            <p>
              {isFr
                ? "Notre siège social et nos installations de traitement sont situés près d'Antananarivo, nous donnant un accès direct aux régions riches en biodiversité de Madagascar — Alaotra-Mangoro et Atsimo-Atsinanana."
                : "Our head office and processing facilities are located near Antananarivo, giving us direct access to Madagascar's rich biodiversity regions — Alaotra-Mangoro and Atsimo-Atsinanana."}
            </p>
            <button
              className={styles.contactButton}
              onClick={() => router.push(isFr ? "/fr/contact" : "/contact")}
            >
              {isFr ? "Contactez-nous" : "Get in Touch"}
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
