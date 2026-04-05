import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <div className={styles.aboutContainer}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>About Gasikara Medicinal Plants</h1>
        <p>A Malagasy company. One product. An uncompromising standard.</p>
      </div>

      <div className={styles.intro}>
        <div className={styles.introContent}>
          {/* WHO WE ARE */}
          <section className={styles.history}>
            <div className={styles.history1}>
              <h2>Who We Are</h2>
              <p>
                Madagascar is home to some of the world's most bioactive{" "}
                <strong>Centella asiatica</strong> — and we have built our
                entire business around bringing it to you at its best.
              </p>
              <p>
                We are a Malagasy company exporting 100% wild-harvested, dried
                Centella asiatica leaves to international markets. Everything we
                do is oriented around a single conviction: that{" "}
                <strong>
                  raw material quality is the foundation of every great
                  formulation
                </strong>
                . That conviction shapes how we source, how we train our people,
                how we process, and how we deliver.
              </p>
              <p>
                We do not compete on volume. We compete on biochemical
                excellence — and we back it with data.
              </p>
            </div>
            <div className={styles.history2}>
              <img src="/assets/mg-map.svg" alt="Madagascar sourcing regions" />
            </div>
          </section>

          {/* WHY MADAGASCAR — inside introContent to match SCSS */}
          <section className={styles.values}>
            <h2>Why Madagascar. Why Us.</h2>
            <p>
              Madagascar's Centella asiatica is globally recognized for its
              superior phytochemical profile. The island's unique biodiversity
              and growing conditions produce leaves with triterpene
              concentrations that consistently outperform cultivated
              alternatives.
            </p>
            <p>
              We are one of the few exporters combining this natural advantage
              with <strong>rigorous, documented quality control</strong> from
              harvest to delivery — making us a reliable partner for buyers who
              cannot afford to compromise on raw material integrity.
            </p>
          </section>
        </div>

        {/* ILLUSTRATIONS — outside introContent, direct child of intro */}
        <section className={styles.illustrations}>
          <img
            src="https://images.unsplash.com/photo-1592997572749-3f3e7e9bf05b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hZGFnYXNjYXJ8ZW58MHwwfDB8fHwy"
            alt="Madagascar landscape"
          />
          <img
            src="https://images.unsplash.com/photo-1504598578017-40d9b776f1bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Centella asiatica harvesting"
          />
          <img
            src="https://images.unsplash.com/photo-1649187642101-6317f194bc1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Madagascar biodiversity"
          />
        </section>

        {/* OUR SOURCING MODEL */}
        <section className={styles.operations}>
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

            <div className={styles.opCard}>
              <span>📍</span>
              <h3>Full Traceability</h3>
              <p>
                Digital picker registration and plot tracing powered by
                FarmForce — complete transparency from field to export.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT NUMBERS */}
        <section className={styles.impact}>
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
              <h3>UEBT</h3>
              <p>Ethical BioTrade compliance</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Traceability from field to export</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className={styles.certifications}>
          <div className={styles.certificationsContent}>
            <h2>Certifications & Standards</h2>
            <p>
              Gasikara Medicinal Plants operates under strict compliance with
              the <strong>UEBT (Union for Ethical BioTrade)</strong> standards.
              Our operations are audited regularly to ensure transparency,
              traceability, and ethical sourcing at every level of the supply
              chain.
            </p>
            <div className={styles.certLogos}>
              <img src="/assets/UEBT1.png" alt="UEBT certification" />
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className={styles.location}>
          <div className={styles.locationContent}>
            <h2>Based in Madagascar</h2>
            <p>
              Our head office and processing facilities are located near
              Antananarivo, giving us direct access to Madagascar's rich
              biodiversity regions — Alaotra-Mangoro and Atsimo-Atsinanana.
            </p>
            <button
              className={styles.contactButton}
              onClick={() => router.push("/contact")}
            >
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
