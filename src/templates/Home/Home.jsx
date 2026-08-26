import styles from "./style.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>
          Centella Asiatica Madagascar Supplier | Gasikara Medicinal Plants
        </title>
        <meta
          name="description"
          content="Gasikara Medicinal Plants exports 100% wild-harvested Centella asiatica dried leaves from Madagascar — high Total Triterpene content, HPLC verified, reliable supply chain."
        />
        <link rel="canonical" href="https://gasikara-plants.com/" />
      </Head>
      {/* HERO SECTION */}
      <div className={styles.hero1}>
        <div className={styles.hero}>
          <video autoPlay loop muted className={styles.videoBackground}>
            <source src="/assets/gotuVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <h1 className={styles.title}>
                Wild-Harvested Centella Asiatica from Madagascar — Verified by
                Science
              </h1>
              <p className={styles.description}>
                Gasikara Medicinal Plants exports 100% wild-harvested, dried
                Centella asiatica leaves with consistently high Total Triterpene
                content — backed by HPLC analysis and a reliable supply chain.
              </p>
              <button
                className={styles.ctaButton}
                onClick={() => router.push("/centella-asiatica")}
              >
                Our Product
              </button>
            </div>
            <div className={styles.contentRight}>
              <img src="assets/mg2.png" alt="" />
            </div>
          </div>
        </div>

        {/* PILLARS */}
        <section className={styles.section1}>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage: "url(assets/new/cent101.jpeg)",
            }}
          >
            <h2>Wild Harvest & Sourcing</h2>
          </div>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://as1.ftcdn.net/v2/jpg/03/36/48/88/1000_F_336488872_GIoXi9yCmZbUfAsMyVtYjn8THOG2Vhcc.jpg)",
            }}
          >
            <h2>Processing & HPLC Quality</h2>
          </div>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://as1.ftcdn.net/v2/jpg/16/73/45/06/1000_F_1673450627_4ApEUkBmwEmZzJNgJwEyRFCaxDp6dVbR.jpg)",
            }}
          >
            <h2>Export by Sea Freight</h2>
          </div>
        </section>
      </div>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <p>
          Looking for a reliable Centella asiatica supplier from Madagascar?
        </p>
        <button onClick={() => router.push("/contact")}>Contact us</button>
      </section>

      {/* WHY US */}
      <section className={styles.partnerSection}>
        <div className={styles.partnerContent}>
          <h1>Why Gasikara Medicinal Plants</h1>
          <p>
            Madagascar's wild Centella asiatica is globally recognized for its
            superior phytochemical profile. We combine this natural advantage
            with rigorous, documented quality control — from harvest to
            delivery.
          </p>

          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <span>🔬</span>
              <h2>High TTT Content</h2>
              <p>
                Consistently high Total Triterpene content — asiaticoside and
                madecassoside — verified by in-house HPLC analysis on every
                batch.
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🌿</span>
              <h2>100% Wild-Harvested</h2>
              <p>
                Sourced exclusively from Madagascar's wild flora. The island's
                unique soils and climate deliver naturally potent leaves,
                shipment after shipment.
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🤝</span>
              <h2>Ethical Supply Chain</h2>
              <p>
                A dense network of trained pickers — predominantly women from
                rural communities — selected and supervised by our field teams
                over many years.
              </p>
            </div>
          </div>

          <button
            className={styles.partnerButton}
            onClick={() => router.push("/contact")}
          >
            Request Samples
          </button>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className={styles.capacitySection}>
        <h1>Our Scale</h1>
        <div className={styles.capacityGrid}>
          <div className={styles.capacityCard}>
            <h2>200+ Tons / Year</h2>
            <p>Dried Centella asiatica leaves exported annually.</p>
          </div>
          <div className={styles.capacityCard}>
            <h2>4,500+ Pickers</h2>
            <p>
              Trained harvesting network across Madagascar's sourcing regions.
            </p>
          </div>
          <div className={styles.capacityCard}>
            <h2>50 kg Bales</h2>
            <p>Export-ready polypropylene bales, optimized for sea freight.</p>
          </div>
          <div className={styles.capacityCard}>
            <h2>HPLC Verified</h2>
            <p>
              In-house laboratory analysis at every critical stage of
              production.
            </p>
          </div>
        </div>
      </section>

      {/* CENTELLA ASIATICA SUPPLIER */}
      <section className={styles.centellaSection}>
        <div className={styles.centellaContent}>
          <div className={styles.centellaText}>
            <span className={styles.badge}>Our Expertise</span>
            <h1>Your Trusted Centella Asiatica Supplier</h1>
            <p>
              From wild plant to export-ready dried leaves, we control every
              step of the Centella asiatica supply chain in Madagascar. We ship
              our HPLC-verified product to clients worldwide, supporting
              pharmaceutical, cosmetic, and nutraceutical industries across the
              globe.
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
      </section>

      {/* FINAL CTA */}
      <section className={styles.section4}>
        <h1>One Product. Uncompromised Quality.</h1>
        <h2>
          We do not compete on volume. We compete on biochemical excellence —
          and we back it with data.
        </h2>
        <button
          className={styles.ctaButton}
          onClick={() => router.push("/contact")}
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
}
