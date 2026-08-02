import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";

export default function QualitySustainability() {
  return (
    <>
      <Head>
        <title>
          Quality & Sustainability | Gasikara Medicinal Plants Madagascar
        </title>
        <meta
          name="description"
          content="HPLC-verified Centella asiatica sourcing from Madagascar. Gasikara Medicinal Plants — rigorous quality control and ethical supply chain from field to export."
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
                <span>4,500+</span>
                <p>Trained Pickers</p>
              </div>
              <div className={styles.heroStat}>
                <span>100%</span>
                <p>Traceable Supply</p>
              </div>
              <div className={styles.heroStat}>
                <span>HPLC</span>
                <p>Verified Every Batch</p>
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
                <div className={styles.cardIcon}>📦</div>
                <h3>Specification-Grade Consistency</h3>
                <p>
                  Every shipment meets defined TTT specifications — not just
                  once, but <strong>reliably, batch after batch</strong>. Full
                  analytical documentation included with every export.
                </p>
                <div className={styles.cardHighlight}>
                  <span>Batch Documentation</span>
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
                  // src="https://images.unsplash.com/photo-1699622595982-42fb5bb9ad22?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  src="/assets/new/image3.jpg"
                  alt="Madagascar map showing operation regions"
                  width={500}
                  height={700}
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
                <h3>Local Livelihood Support</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>Ongoing</span>
                    <p>
                      Supporting harvesters with practical training and
                      agricultural guidance
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>Practical</span>
                    <p>
                      Providing tools and seed support to strengthen rural
                      income sources
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🎓</div>
                <h3>Education and Wellness</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>Available</span>
                    <p>
                      Community programs that support local schools and youth
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>Resource</span>
                    <p>
                      Learning materials and guidance for educators and families
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🏗️</div>
                <h3>Community Infrastructure</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>Improving</span>
                    <p>
                      Investing in shared facilities and water access projects
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>Practical</span>
                    <p>
                      Creating safer, more resilient support for local villages
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🌿</div>
                <h3>Sustainable Practices</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>Guided</span>
                    <p>
                      Supporting responsible harvesting and natural regeneration
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>Ongoing</span>
                    <p>
                      Engaging in local conservation and restoration activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIPS */}
        {/* <section className={styles.partnershipsSection}>
          <div className={styles.partnershipsContent}>
            <h2>Strategic Partnerships for Impact</h2>
            <p>
              Collaborating with leading organizations to maximize our positive
              impact
            </p>

            <div className={styles.partnerGrid}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>
                    <Image
                      src="/assets/government.png"
                      alt="government icon"
                      width={120}
                      height={80}
                    />
                  </span>
                </div>
                <h4>Regional Government</h4>
                <p>
                  Agriculture, Education & Health directorates collaboration
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>
                    <Image
                      src="/assets/fjkm.png"
                      alt="government icon"
                      width={120}
                      height={80}
                    />
                  </span>
                </div>
                <h4>NGO SAF FJKM</h4>
                <p>Partnership for drinking water infrastructure projects</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* WHY CHOOSE RAVINA */}
        <section className={styles.whySection}>
          <div className={styles.whyContent}>
            <h2>Why Gasikara Medicinal Plants</h2>
            <p>
              A focused supplier — one product, documented quality, and a supply
              chain built on people, not just process
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
                <h4>Ethically Sourced</h4>
                <p>
                  Full compliance with international ethical sourcing standards,
                  verified through ongoing quality reviews
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
              <h3>Ready to Source with Gasikara?</h3>
              <p>
                Request samples or discuss your specifications — we respond with
                full analytical data and transparent commercial terms.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.primaryButton}>
                  Contact Us
                </a>
                <a href="/centella-asiatica" className={styles.secondaryButton}>
                  Our Product
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
