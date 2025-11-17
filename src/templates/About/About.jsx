import styles from "./style.module.scss";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <h1>About Ravina</h1>
      </div>

      <div className={styles.intro}>
      <div className={styles.introContent}>
        {/* Company History */}
        <section className={styles.history}>
          <h2>Our History</h2>
          <p>
            Founded in Madagascar, <strong>Ravina</strong> is a leading exporter
            of medicinal plants, specializing in{" "}
            <strong>Centella Asiatica</strong>. Our mission is to provide the
            highest quality Centella Asiatica, rich in bioactive molecules, to
            customers worldwide. We source our plants from diverse regions
            across Madagascar, ensuring sustainable and ethical harvesting
            practices while preserving the natural ecosystem.
          </p>
      
        </section>

        {/* Values & Commitments */}
        <section className={styles.values}>
          <h2>Our Values & Commitments</h2>
          <p>
            At <strong>Ravina</strong>, we believe in excellence,
            sustainability, and community empowerment. Our commitment extends
            beyond delivering premium Centella Asiatica — we actively support
            the local economy by collaborating with hundreds of harvesters
            across Madagascar. By promoting fair trade and ethical sourcing, we
            contribute to economic growth and environmental preservation.
          </p>
          <p>
            We take pride in our rigorous quality control, ensuring that every
            batch of Centella Asiatica meets the highest international
            standards. Our passion for natural health solutions drives us to
            maintain transparency and integrity in every step of our process.
          </p>
        </section>

        <section className={styles.illustrations}>
          <img
            src="https://images.unsplash.com/photo-1592997572749-3f3e7e9bf05b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hZGFnYXNjYXJ8ZW58MHwwfDB8fHwy"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1504598578017-40d9b776f1bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1649187642101-6317f194bc1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </section>

        </div>
        {/* CERTIFICATIONS & STANDARDS */}

        <section className={styles.certifications}>
          <div className={styles.certificationsContent}>
            <h2>Certifications & Standards</h2>
            <p>
              RAVINA Medicinals is a proud member of the{" "}
              <strong>UEBT (Union for Ethical BioTrade)</strong>
              and operates under strict compliance with{" "}
              <strong>international traceability and quality standards</strong>.
              Our operations are audited regularly to ensure transparency and
              ethical sourcing.
            </p>
            <div className={styles.certLogos}>
              <img src="/assets/UEBT1.png" alt="UEBT certification" />
            </div>
          </div>
        </section>

        <section className={styles.location}>
          <div className={styles.locationContent}>
            <h2>Based in Madagascar</h2>
            <p>
              Our head office and processing facilities are located near
              Antananarivo, giving us direct access to Madagascar’s rich
              biodiversity regions such as Alaotra-Mangoro and
              Atsimo-Atsinanana.
            </p>
            <img src="/assets/madagascar-map.svg" alt="Map of Madagascar" />
          </div>
        </section>

        <section className={styles.impact}>
          <h2>Our Impact in Numbers</h2>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h3>4,500+</h3>
              <p>Local pickers empowered</p>
            </div>
            <div className={styles.stat}>
              <h3>3</h3>
              <p>Annual UEBT audits</p>
            </div>
            <div className={styles.stat}>
              <h3>2</h3>
              <p>Major biodiversity regions involved</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Traceability from field to export</p>
            </div>
          </div>
        </section>

        {/* OPERATIONS SECTION */}
        <section className={styles.operations}>
          <h2>Our Operations</h2>
          <p>
            Ravina’s strength lies in a fully integrated supply chain — from
            wild collection to export. Each step is monitored to ensure quality,
            safety, and traceability for our international partners.
          </p>

          <div className={styles.opsGrid}>
            <div className={styles.opCard}>
              <span>🏭</span>
              <h3>Processing Center</h3>
              <p>
                Equipped for cleaning, shredding, grading and safe storage of
                wild botanicals, guaranteeing consistent quality year-round.
              </p>
            </div>

            <div className={styles.opCard}>
              <span>🌞</span>
              <h3>Drying Facilities</h3>
              <p>
                Solar-powered and controlled drying units ensuring optimal
                moisture levels and preservation of active molecules.
              </p>
            </div>

            <div className={styles.opCard}>
              <span>🔬</span>
              <h3>In-house Laboratory</h3>
              <p>
                HPLC-capable laboratory for asiaticoside / madecassoside
                verification and strict microbiological checks.
              </p>
            </div>

            <div className={styles.opCard}>
              <span>📍</span>
              <h3>Field Operations & Traceability</h3>
              <p>
                Digital picker registration and plot tracing powered by
                FarmForce — full transparency from field to export.
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className={styles.timeline}>
          <h2>Company Milestones</h2>

          <div className={styles.timelineList}>
            <div className={styles.milestone}>
              <div className={styles.dot}></div>
              <div>
                <h4>2018</h4>
                <p>Founding of Ravina Medicinals in Antananarivo.</p>
              </div>
            </div>

            <div className={styles.milestone}>
              <div className={styles.dot}></div>
              <div>
                <h4>2020</h4>
                <p>First large-scale Centella sourcing program launched.</p>
              </div>
            </div>

            <div className={styles.milestone}>
              <div className={styles.dot}></div>
              <div>
                <h4>2021</h4>
                <p>Implementation of FarmForce traceability.</p>
              </div>
            </div>

            <div className={styles.milestone}>
              <div className={styles.dot}></div>
              <div>
                <h4>2022</h4>
                <p>First UEBT audit successfully completed.</p>
              </div>
            </div>

            <div className={styles.milestone}>
              <div className={styles.dot}></div>
              <div>
                <h4>2024</h4>
                <p>
                  Expansion of drying infrastructure and laboratory upgrade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className={styles.team}>
          <h2>Leadership & Management</h2>
          <p className={styles.teamIntro}>
            Our leadership team combines environmental expertise, operational
            excellence, and strong field experience to manage Ravina’s value
            chain from harvest to export.
          </p>

          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <img
                src="/assets/team-placeholder.jpg"
                className={styles.memberImage}
              />
              <h3>Lova Tiana Randrianarivelo</h3>
              <p>Founder & CEO</p>
            </div>

            <div className={styles.member}>
              <img
                src="/assets/team-placeholder.jpg"
                className={styles.memberImage}
              />
              <h3>Benjamina Randrianarivelo</h3>
              <p>Operations Director</p>
            </div>

            <div className={styles.member}>
              <img
                src="/assets/team-placeholder.jpg"
                className={styles.memberImage}
              />
              <h3>Quality Manager</h3>
              <p>Head of Laboratory & Compliance</p>
            </div>

            <div className={styles.member}>
              <img
                src="/assets/team-placeholder.jpg"
                className={styles.memberImage}
              />
              <h3>Field Coordinator</h3>
              <p>Picker Training & Traceability</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
