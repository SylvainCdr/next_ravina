import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";

export default function QualitySustainability() {
  return (
    <>
      <Head>
        <title>Quality & Sustainability | RAVINA Medicinals Madagascar</title>
        <meta
          name="description"
          content="UEBT certified quality, HPLC laboratory, sustainable sourcing, and community development. RAVINA Medicinals' commitment to excellence and positive impact in Madagascar."
        />
      </Head>

      <div className={styles.qualityContainer}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Beyond Quality, Creating Impact</h1>
            <p className={styles.heroSubtitle}>
              Where rigorous quality standards meet sustainable development,
              empowering communities and preserving Madagascar's biodiversity
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span>UEBT</span>
                <p>Certified Partner</p>
              </div>
              <div className={styles.heroStat}>
                <span>4,500+</span>
                <p>Lives Impacted</p>
              </div>
              <div className={styles.heroStat}>
                <span>100%</span>
                <p>Traceable Supply</p>
              </div>
              <div className={styles.heroStat}>
                <span>L'Oréal</span>
                <p>Trusted Since 2016</p>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY CERTIFICATIONS SECTION */}
        <section className={styles.qualitySection}>
          <div className={styles.qualityContent}>
            <div className={styles.sectionHeader}>
              <h2>Uncompromising Quality Standards</h2>
              <p>
                The foundation of our reputation lies in rigorous quality
                control at every step of our supply chain
              </p>
            </div>

            <div className={styles.qualityGrid}>
              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>🏆</div>
                <h3>UEBT Certification</h3>
                <p>
                  Proud member of the{" "}
                  <strong>Union for Ethical BioTrade</strong>, operating under
                  strict compliance with international traceability and quality
                  standards.
                </p>
                <div className={styles.cardHighlight}>
                  <span>3 Annual Audits</span>
                </div>
              </div>

              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>🔬</div>
                <h3>HPLC Laboratory</h3>
                <p>
                  <strong>In-house HPLC testing equipment</strong> with skilled
                  and experienced lab technician for asiaticoside/madecassoside
                  verification and microbiological checks.
                </p>
                <div className={styles.cardHighlight}>
                  <span>Autonomous Analysis</span>
                </div>
              </div>

              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>📍</div>
                <h3>Digital Traceability</h3>
                <p>
                  <strong>FarmForce software application</strong> implementation
                  to strengthen our efforts and improve complete product
                  traceability from field to export.
                </p>
                <div className={styles.cardHighlight}>
                  <span>Field to Export</span>
                </div>
              </div>

              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>🌍</div>
                <h3>L'Oréal Partnership</h3>
                <p>
                  <strong>Trusted supplier since 2016</strong> for L'Oréal
                  brands including La Roche-Posay, Kiehl's, and L'Oréal Paris.
                  International recognition of our quality standards.
                </p>
                <div className={styles.cardHighlight}>
                  <span>Since 2016</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPLY CHAIN TRACEABILITY */}
        <section className={styles.traceabilitySection}>
          <div className={styles.traceabilityContent}>
            <div className={styles.textContent}>
              <h2>Complete Supply Chain Control</h2>
              <p>
                From <strong>4,500+ trained pickers</strong> across Madagascar's
                biodiversity regions to international export, every step is
                monitored to ensure quality, safety, and full traceability.
              </p>

              <div className={styles.supplyStats}>
                <div className={styles.supplyStat}>
                  <span>20</span>
                  <p>Advanced Post Collectors</p>
                </div>
                <div className={styles.supplyStat}>
                  <span>4</span>
                  <p>Field Supervisors</p>
                </div>
                <div className={styles.supplyStat}>
                  <span>3</span>
                  <p>Processing Centers</p>
                </div>
              </div>

              <div className={styles.processSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div>
                    <h4>Field Collection</h4>
                    <p>
                      Trained harvesters in Alaotra-Mangoro and
                      Atsimo-Atsinanana regions
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div>
                    <h4>Quality Control</h4>
                    <p>
                      Basic quality control and storage at branch warehouses
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div>
                    <h4>Advanced Processing</h4>
                    <p>
                      HPLC testing, packaging, and shipping at main office
                      Antananarivo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.visualContent}>
              <div className={styles.mapContainer}>
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60"
                  alt="Madagascar map showing operation regions"
                  width={500}
                  height={400}
                  className={styles.mapImage}
                />
                <div className={styles.mapOverlay}>
                  <div className={styles.region}>
                    <h5>Alaotra-Mangoro</h5>
                    <p>Central-East Region</p>
                  </div>
                  <div className={styles.region}>
                    <h5>Atsimo-Atsinanana</h5>
                    <p>South-East Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY DEVELOPMENT PROJECTS */}
        <section className={styles.communitySection}>
          <div className={styles.communityContent}>
            <div className={styles.sectionHeader}>
              <h2>Community Development Projects</h2>
              <p>
                Our social responsibility goes beyond fair sourcing - we are
                deeply engaged with the communities we work with, creating
                measurable impact
              </p>
            </div>

            <div className={styles.impactAreas}>
              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>💼</div>
                <h3>Income-Generating Activities</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>1,630</span>
                    <p>
                      Pickers from 11 associations trained in agricultural
                      skills
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>✓</span>
                    <p>
                      Donated seeds and farming tools with Regional Directorate
                      support
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🎓</div>
                <h3>Education Support</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>1,250+</span>
                    <p>Schoolchildren fed through canteen programs</p>
                  </div>
                  <div className={styles.stat}>
                    <span>3,000</span>
                    <p>School kits donated in 2024/2025 (doubled from 1,500)</p>
                  </div>
                  <div className={styles.stat}>
                    <span>120</span>
                    <p>Teachers trained in pedagogical methods</p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🏗️</div>
                <h3>Infrastructure Development</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>10</span>
                    <p>Schools rehabilitated (9 in Fierenana, 1 in Didy)</p>
                  </div>
                  <div className={styles.stat}>
                    <span>6</span>
                    <p>
                      Drinking water fountains installed (4 operational, 2 under
                      construction)
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🌿</div>
                <h3>Biodiversity Conservation</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>4,500+</span>
                    <p>
                      Pickers trained in effective Centella collection practices
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>✓</span>
                    <p>
                      Regular reforestation activities to restore degraded areas
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>🎓</span>
                    <p>
                      University of Antananarivo collaboration for regeneration
                      studies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIPS */}
        <section className={styles.partnershipsSection}>
          <div className={styles.partnershipsContent}>
            <h2>Strategic Partnerships for Impact</h2>
            <p>
              Collaborating with leading organizations to maximize our positive
              impact
            </p>

            <div className={styles.partnerGrid}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <Image
                    src="/assets/UEBT1.png"
                    alt="UEBT - Union for Ethical BioTrade"
                    width={120}
                    height={80}
                  />
                </div>
                <h4>Union for Ethical BioTrade (UEBT)</h4>
                <p>
                  International certification ensuring ethical sourcing and fair
                  compensation
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>L'ORÉAL</span>
                </div>
                <h4>L'Oréal Group</h4>
                <p>Trusted supplier for premium cosmetic brands since 2016</p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>🏛️</span>
                </div>
                <h4>Regional Government</h4>
                <p>
                  Agriculture, Education & Health directorates collaboration
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>SAF FJKM</span>
                </div>
                <h4>NGO SAF FJKM</h4>
                <p>Partnership for drinking water infrastructure projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE RAVINA */}
        <section className={styles.whySection}>
          <div className={styles.whyContent}>
            <h2>Why Partner With RAVINA?</h2>
            <p>
              More than a supplier - a partner committed to quality,
              sustainability, and positive impact
            </p>

            <div className={styles.advantagesGrid}>
              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🎯</div>
                <h4>High-Quality Dried Leaves</h4>
                <p>
                  Adaptable supply plans to suit any requirements with
                  HPLC-verified quality
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>👥</div>
                <h4>Trained & Experienced Network</h4>
                <p>
                  71-person team and 4,500+ trained harvesters ensuring
                  consistent supply
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>✅</div>
                <h4>Trusted Quality</h4>
                <p>
                  L'Oréal partnership since 2016 and UEBT certification with 3
                  annual audits
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🏭</div>
                <h4>Fully Equipped Sites</h4>
                <p>
                  HPLC laboratory, solar drying facilities, and processing
                  centers
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>⚡</div>
                <h4>Total Process Control</h4>
                <p>
                  Complete supply chain control with digital traceability all
                  along the chain
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>📋</div>
                <h4>Fast Administrative Track</h4>
                <p>
                  Streamlined regulatory procedures and export documentation
                </p>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h3>Ready to Build a Sustainable Partnership?</h3>
              <p>
                Join international brands who trust RAVINA for ethical,
                high-quality natural ingredients
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Partnership Discussion
                </a>
                <a href="/our-products" className={styles.secondaryButton}>
                  Explore Our Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
