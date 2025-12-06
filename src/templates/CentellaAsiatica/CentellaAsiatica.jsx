import Image from "next/image";
import Head from "next/head";
import styles from "./style.module.scss";

export default function CentellaAsiatica() {
  return (
    <>
      <Head>
        <title>Centella Asiatica | RAVINA Medicinals Madagascar</title>
        <meta
          name="description"
          content="RAVINA Medicinals ethically sources and exports premium Centella Asiatica from Madagascar — ensuring purity, traceability, and sustainability."
        />
      </Head>

      <div className={styles.centellaContainer}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <h1>Centella Asiatica</h1>
            <p>
              Our flagship product — ethically sourced from Madagascar’s rich
              ecosystems and trusted worldwide for its purity and effectiveness.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className={styles.introduction}>
          <div className={styles.introductionContent}>
            <div className={styles.text}>
              <h2>About the Plant</h2>
              <p>
                Also known as <strong>Gotu Kola</strong> or{" "}
                <strong>Tiger Grass</strong>, Centella Asiatica is a remarkable
                medicinal herb widely used in the pharmaceutical, cosmetic, and
                wellness industries. RAVINA Medicinals sources wild Centella
                Asiatica ethically from the <strong>Alaotra-Mangoro</strong> and{" "}
                <strong>Atsimo-Atsinanana</strong> regions of Madagascar — areas
                renowned for their natural biodiversity.
              </p>
              <p>
                Our Centella is available in <strong>dried leaves</strong> and{" "}
                <strong>powder form</strong>, harvested and processed following
                strict UEBT standards to ensure consistent quality and
                sustainability.
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image33.png"
                  alt="Centella Asiatica plant"
                  width={500}
                  height={350}
                />
              </div>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image44.png"
                  alt="Centella leaves"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.applications}>
          <h2>Key Applications</h2>
          <div className={styles.appGrid}>
            <div>
              <h3>💧 Skincare & Cosmetics</h3>
              <p>
                Used in creams, serums, and masks for its soothing, anti-aging,
                and wound-healing properties.
              </p>
            </div>
            <div>
              <h3>💊 Pharmaceuticals</h3>
              <p>
                Centella extract supports circulation, cognitive function, and
                scar recovery in therapeutic formulations.
              </p>
            </div>
            <div>
              <h3>🌿 Nutraceuticals</h3>
              <p>
                Incorporated into dietary supplements promoting memory, stress
                relief, and overall well-being.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.composition}>
          <h2>Key Active Molecules</h2>
          <ul>
            <li>Asiaticoside</li>
            <li>Madecassoside</li>
            <li>Asiatic Acid</li>
            <li>Madecassic Acid</li>
          </ul>
          <p>
            These bioactive compounds are responsible for Centella’s
            regenerative, antioxidant, and anti-inflammatory effects.
          </p>
        </section>

        {/* SUPPLY CHAIN */}
        <section className={styles.valueChain}>
          <h2>Our Centella Supply Chain</h2>
          <p>
            From field collection to export, our integrated value chain ensures
            full traceability and top quality. Each step is managed under strict
            procedures, with over <strong>4,500 trained pickers</strong> and a
            network of dedicated supervisors and collectors.
          </p>

          <div className={styles.chainSteps}>
            <div>🌿 Field Collection</div>
            <div>🏭 Processing & Drying</div>
            <div>🔬 Quality Control (HPLC)</div>
            <div>📦 Packaging & Storage</div>
            <div>🌍 Export & Client Delivery</div>
          </div>

          <p className={styles.bottomNote}>
            Activities are monitored through <strong>FarmForce</strong>{" "}
            traceability software and assessed via regular{" "}
            <strong>UEBT audits</strong>, ensuring ethical sourcing and
            transparency from picker to port.
          </p>
        </section>

        {/* QUALITY & TRACEABILITY */}
        <section className={styles.quality}>
          <div className={styles.qualityText}>
            <h2>Quality & Traceability</h2>
            <p>
              RAVINA Medicinals’ reputation is built on excellence. Our in-house
              laboratory is equipped with{" "}
              <strong>HPLC testing equipment</strong> to analyze the quality of
              Centella Asiatica throughout each collection campaign.
            </p>
            <p>
              With <strong>three annual audits</strong> under UEBT supervision,
              we maintain rigorous standards for ethical sourcing, biodiversity
              protection, and community well-being.
            </p>
          </div>
        </section>

        <section className={styles.sustainability}>
          <h2>Sustainability & Impact</h2>
          <p>
            Every kilogram of Centella exported supports sustainable harvesting
            and the livelihoods of over <strong>4,500 local pickers</strong>.
            Through education, nutrition, and biodiversity programs, we ensure
            positive environmental and social impact across Madagascar.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Partner with RAVINA Medicinals</h2>
          <p>
            Choose Madagascar’s trusted source for ethical and sustainable
            Centella Asiatica. Contact our team to request samples or discuss
            your sourcing needs.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
}
