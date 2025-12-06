import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Products() {
  return (
    <>
      <Head>
        <title>Our Products | RAVINA Medicinals Madagascar</title>
        <meta
          name="description"
          content="Premium natural products from Madagascar: Centella Asiatica (dried leaves & powder), essential oils, and spices. Ethically sourced with full traceability and UEBT certification."
        />
      </Head>

      <div className={styles.productsContainer}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Our Products</h1>
            <p className={styles.heroSubtitle}>
              Premium natural ingredients from Madagascar's biodiversity,
              ethically sourced with complete traceability
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span>16+</span>
                <p>Years Experience</p>
              </div>
              <div className={styles.heroStat}>
                <span>UEBT</span>
                <p>Certified</p>
              </div>
              <div className={styles.heroStat}>
                <span>100%</span>
                <p>Traceable</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className={styles.intro}>
          <div className={styles.introContent}>
            <h2>Natural Excellence from Madagascar</h2>
            <p>
              As a national private company specializing in the{" "}
              <strong>collection, processing, packaging, and export</strong> of
              natural products, RAVINA Medicinals serves
              <strong>
                {" "}
                cosmetic, pharmaceutical, nutraceutical, and food industries
              </strong>{" "}
              worldwide.
            </p>
            <p>
              Our products are sourced from the <strong>Alaotra-Mangoro</strong>{" "}
              and
              <strong> Atsimo-Atsinanana</strong> regions, ensuring the highest
              quality through our <strong>HPLC-equipped laboratory</strong> and{" "}
              <strong>UEBT certification</strong>.
            </p>
          </div>
        </section>

        {/* FLAGSHIP PRODUCT - CENTELLA */}
        <section className={styles.flagship}>
          <div className={styles.flagshipContent}>
            <div className={styles.flagshipText}>
              <span className={styles.badge}>Flagship Product</span>
              <h2>Centella Asiatica</h2>
              <p className={styles.subtitle}>
                Madagascar's premium medicinal plant, trusted by L'Oréal since
                2016
              </p>

              <div className={styles.formats}>
                <div className={styles.format}>
                  <div className={styles.formatIcon}>🌿</div>
                  <div>
                    <h4>Dried Leaves</h4>
                    <p>
                      Premium quality dried leaves in export bags, fully
                      traceable with lot numbers
                    </p>
                  </div>
                </div>
                <div className={styles.format}>
                  <div className={styles.formatIcon}>🥄</div>
                  <div>
                    <h4>Fine Powder</h4>
                    <p>
                      Finely ground powder for cosmetic and pharmaceutical
                      applications
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.benefits}>
                <h4>Key Benefits:</h4>
                <ul>
                  <li>
                    <strong>Bioactive compounds</strong>: Asiaticoside,
                    madecassoside for healing and anti-aging
                  </li>
                  <li>
                    <strong>L'Oréal partnership</strong>: Recognized supplier
                    since 2016
                  </li>
                  <li>
                    <strong>Traditional medicine</strong>: Used in Chinese and
                    Ayurvedic practices
                  </li>
                  <li>
                    <strong>Sustainable sourcing</strong>: Empowering 4,500+
                    local harvesters
                  </li>
                </ul>
              </div>

              <a href="/centella-asiatica" className={styles.productButton}>
                Discover Centella Asiatica
              </a>
            </div>

            <div className={styles.flagshipVisual}>
              <div className={styles.productShowcase}>
                <Image
                  src="/assets/gotu-hands.jpeg"
                  alt="Centella Asiatica dried leaves"
                  width={800}
                  height={600}
                  className={styles.showcaseImage}
                />
                {/* <div className={styles.productLabel}>
                  <span>RAVINA Medicinals</span>
                  <p>Lot: 142 C - Origin: Madagascar</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* OTHER PRODUCTS */}
        <section className={styles.otherProducts}>
          <div className={styles.sectionHeader}>
            <h2>Complete Natural Product Range</h2>
            <p>
              Beyond Centella Asiatica, we offer a carefully curated selection
              of Madagascar's finest natural products
            </p>
          </div>

          <div className={styles.productsGrid}>
            {/* ESSENTIAL OILS */}
            <div className={styles.productCard}>
              <div className={styles.cardImage}>
                <Image
                  src="https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Essential oils from Madagascar"
                  width={400}
                  height={250}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardIcon}>🌺</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>Essential Oils</h3>
                <p>
                  100% pure essential oils extracted from Madagascar's unique
                  endemic flora. High concentration, rich aromatic profiles,
                  perfect for cosmetics, aromatherapy, and wellness
                  applications.
                </p>
                <div className={styles.features}>
                  <span>✓ Steam distilled</span>
                  <span>✓ Lab tested purity</span>
                  <span>✓ Sustainable extraction</span>
                </div>
              </div>
            </div>

            {/* SPICES */}
            <div className={styles.productCard}>
              <div className={styles.cardImage}>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhJTIwc3BpY2VzfGVufDB8fDB8fHww"
                  alt="Premium spices from Madagascar"
                  width={400}
                  height={250}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardIcon}>🌶️</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>Premium Spices</h3>
                <p>
                  Ethically sourced spices including{" "}
                  <strong>ginger, turmeric, cloves, black pepper</strong>, and
                  other wild botanicals. Carefully dried and processed for
                  food-grade and export quality.
                </p>
                <div className={styles.features}>
                  <span>✓ Wild harvested</span>
                  <span>✓ Export grade</span>
                  <span>✓ Fair trade sourcing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY ASSURANCE */}
        <section className={styles.qualitySection}>
          <div className={styles.qualityContent}>
            <h2>Quality Assurance & Certifications</h2>
            <p>
              The foundation of our reputation lies in rigorous quality control
              at every step
            </p>

            <div className={styles.qualityFeatures}>
              <div className={styles.qualityFeature}>
                <div className={styles.featureIcon}>🔬</div>
                <h4>HPLC Laboratory</h4>
                <p>
                  In-house HPLC testing equipment for asiaticoside/madecassoside
                  verification and microbiological checks
                </p>
              </div>

              <div className={styles.qualityFeature}>
                <div className={styles.featureIcon}>🏆</div>
                <h4>UEBT Standards</h4>
                <p>
                  Strict compliance with Union for Ethical BioTrade standards,
                  assessed during 3 annual audits
                </p>
              </div>

              <div className={styles.qualityFeature}>
                <div className={styles.featureIcon}>📍</div>
                <h4>Digital Traceability</h4>
                <p>
                  FarmForce software implementation for complete product
                  traceability from field to export
                </p>
              </div>

              <div className={styles.qualityFeature}>
                <div className={styles.featureIcon}>🌍</div>
                <h4>International Recognition</h4>
                <p>
                  Trusted supplier for L'Oréal brands including La Roche-Posay,
                  Kiehl's, and L'Oréal Paris
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.partnershipSection}>
          <div className={styles.partnershipContent}>
            <h2>Ready to Partner With Us?</h2>
            <p>
              Join leading international brands who trust RAVINA Medicinals for
              premium natural ingredients
            </p>

            <div className={styles.partnershipSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h4>Clarify Your Needs</h4>
                <p>Product types, volumes, technical specifications</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h4>Sample & Trial</h4>
                <p>Quality check and feedback loop</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h4>Commercial Terms</h4>
                <p>Volumes, pricing, logistics coordination</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>4</span>
                <h4>Partnership Launch</h4>
                <p>Long-term collaboration framework</p>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>
                Request Samples
              </a>
              <a href="/contact" className={styles.secondaryButton}>
                Download Specifications
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
