import styles from "./style.module.scss";
import Image from "next/image";
import router from "next/router";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
          <h1>About Ravina Medicinals</h1>
      </div>

      <div className={styles.intro}>
        <div className={styles.introContent}>
          {/* Company History */}

          <section className={styles.history}>
            <div className={styles.history1}>
              <h2>Our History</h2>
              <p>
                  Founded in Madagascar, <strong>Ravina Medicinals</strong> is a leading
                  exporter of medicinal plants, specializing in{" "}
                  <strong>Centella Asiatica</strong>. Our mission is to provide
                  the highest quality Centella Asiatica, rich in bioactive
                  molecules, to customers worldwide. We source our plants from
                  diverse regions across Madagascar, ensuring sustainable and
                  ethical harvesting practices while preserving the natural
                  ecosystem.
              </p>
            </div>
            <div className={styles.history2}>
              <img src="/assets/mg-map.svg" alt="" />
            </div>
          </section>

          {/* Values & Commitments */}
          <section className={styles.values}>
            <h2>Our Values & Commitments</h2>
            <p>
              At <strong>Ravina Medicinals</strong>, we believe in excellence,
              sustainability, and community empowerment. Our commitment extends
              beyond delivering premium Centella Asiatica — we actively support
              the local economy by collaborating with hundreds of harvesters
              across Madagascar. By promoting fair trade and ethical sourcing,
              we contribute to economic growth and environmental preservation.
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
          </div>
        </section>
        {/* OUR IMPACT SECTION */}
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

          <div className={styles.timelineContainer}>
            {/* Start circle */}
            <div className={styles.timelineStart}>
              <span>
                Ravina Medicinals
                <br />
                Milestones
              </span>
            </div>

            {/* Timeline line with chevrons */}
            <div className={styles.timelineLine}>
              <div className={styles.chevrons}>
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={styles.chevron}></div>
                ))}
              </div>
            </div>

            {/* End circle */}
            <div className={styles.timelineEnd}>
              <span>present</span>
            </div>

            {/* Milestones */}
            <div className={styles.milestones}>
              <div
                className={`${styles.milestone} ${styles.above}`}
                style={{ "--index": 0 }}
              >
                <div className={styles.milestoneContent}>
                  <h4>2009</h4>
                  <p className={styles.subtitle}>Established</p>
                  <p className={styles.description}>
                    Company founded in Ambatondrazaka
                  </p>
                </div>
                <div className={styles.milestoneLine}></div>
                <div className={styles.milestoneDot}></div>
              </div>

              <div
                className={`${styles.milestone} ${styles.below}`}
                style={{ "--index": 1 }}
              >
                <div className={styles.milestoneDot}></div>
                <div className={styles.milestoneLine}></div>
                <div className={styles.milestoneContent}>
                  <h4>2011</h4>
                  <p className={styles.subtitle}>First Export</p>
                  <p className={styles.description}>1st shipment to India</p>
                </div>
              </div>

              <div
                className={`${styles.milestone} ${styles.above}`}
                style={{ "--index": 2 }}
              >
                <div className={styles.milestoneContent}>
                  <h4>2013</h4>
                  <p className={styles.subtitle}>Infrastructure</p>
                  <p className={styles.description}>
                    Lab equipment & warehouse extension
                  </p>
                </div>
                <div className={styles.milestoneLine}></div>
                <div className={styles.milestoneDot}></div>
              </div>

              <div
                className={`${styles.milestone} ${styles.below}`}
                style={{ "--index": 3 }}
              >
                <div className={styles.milestoneDot}></div>
                <div className={styles.milestoneLine}></div>
                <div className={styles.milestoneContent}>
                  <h4>2017</h4>
                  <p className={styles.subtitle}>UEBT Compliance</p>
                  <p className={styles.description}>
                    Ethical BioTrade certification
                  </p>
                </div>
              </div>

              <div
                className={`${styles.milestone} ${styles.above}`}
                style={{ "--index": 4 }}
              >
                <div className={styles.milestoneContent}>
                  <h4>2024</h4>
                  <p className={styles.subtitle}>RAVINA Medicinals</p>
                  <p className={styles.description}>
                    Rebrand & expansion to South-East
                  </p>
                </div>
                <div className={styles.milestoneLine}></div>
                <div className={styles.milestoneDot}></div>
              </div>

              <div
                className={`${styles.milestone} ${styles.below}`}
                style={{ "--index": 5 }}
              >
                <div className={styles.milestoneDot}></div>
                <div className={styles.milestoneLine}></div>
                <div className={styles.milestoneContent}>
                  <h4>2025</h4>
                  <p className={styles.subtitle}>Growth</p>
                  <p className={styles.description}>
                    New warehouses & unified vision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className={styles.team}>
          <span className={styles.teamSubtitle}>meet our</span>
          <h2>Team</h2>
          <p className={styles.teamIntro}>
            Our dedicated team combines environmental expertise, operational
            excellence, and deep field experience - working together to deliver
            the highest quality botanicals from Madagascar to the world.
          </p>
          <span className={styles.bgWatermark}>team</span>

          <div className={styles.teamCards}>
            <div className={styles.teamCard}>
              <img src="/assets/team1.png" alt="Ravina leadership team" />
              <div className={styles.teamCardContent}>
                <h3>Leadership</h3>
                <p>Guiding our vision forward</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <img src="/assets/team4.jpg" alt="Ravina team working together" />
              <div className={styles.teamCardContent}>
                <h3>Field Operations</h3>
                <p>Working with local communities</p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <img src="/assets/team3.jpg" alt="Ravina quality control team" />
              <div className={styles.teamCardContent}>
                <h3>Quality Control</h3>
                <p>Ensuring excellence at every step</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
