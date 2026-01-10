import styles from "./style.module.scss";
import Image from "next/image";
import CustomersSlider from "@/components/customersSlider/customersSlider";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* HERO SECTION */}

      <div className={styles.hero1}>
        {/* // video hero background */}
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/assets/gotuVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.hero}>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <h1 className={styles.title}>
                Premium Wild Botanicals — Where Nature, People, and Business
                Thrive
              </h1>
              <p className={styles.description}>
                RAVINA Medicinals is a Malagasy company specializing in the
                collection, processing, packaging, and export of natural
                products. From <strong>Centella Asiatica</strong> to essential
                oils and spices, our operations are rooted in ethical and
                sustainable sourcing, empowering communities while protecting
                biodiversity.
              </p>
              <button
                className={styles.ctaButton}
                onClick={() => router.push("/centella-asiatica")}
              >
                Discover More
              </button>
            </div>
            <div className={styles.contentRight}>
              <img src="assets/mg2.png" alt="" />
            </div>
          </div>
        </div>

        {/* SECTORS */}
        <section className={styles.section1}>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljfGVufDB8fDB8fHww)",
            }}
          >
            <h2>Skincare & Cosmetics</h2>
          </div>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1532092367580-3bd5bc78dd9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnQlMjBtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800)",
            }}
          >
            <h2>Pharmaceutical Ingredients</h2>
          </div>
          <div
            className={styles.section1Content}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1617897903246-719242758050?w=1200&auto=format&fit=crop&q=80)",
            }}
          >
            <h2>Nutraceutical Ingredients</h2>
          </div>
        </section>
      </div>
      <section className={styles.ctaBanner}>
        <p>Looking for a reliable supplier of ethical botanicals?</p>
        <button onClick={() => router.push("/contact")}>Contact us</button>
      </section>

      {/* MISSION & VISION */}
      <section className={styles.section2}>
        <div className={styles.section2Content}>
          <div className={styles.card}>
            <div className={styles.icon}>🌍</div>
            <h1>Our Vision</h1>
            <p>
              To be a trusted international partner in ethical wild plant
              sourcing — known for our commitment to quality, sustainability,
              and inclusive growth.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🌿</div>
            <h1>Our Mission</h1>
            <p>
              We source wild plants ethically and sustainably, prioritizing
              quality at every step. By empowering local communities and
              partnering with clients, we create shared value — driving
              environmental stewardship, inclusive growth, and measurable
              impact.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🧪</div>
            <h1>Our Expertise</h1>
            <p>
              Over 10 years of experience in botanical sourcing, community
              engagement, and international exports.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.section3}>
        <div className={styles.section3Content}>
          <h1>Our Core Values</h1>
          <ul>
            <li>🌿 Ethical & Sustainable Sourcing</li>
            <li>💎 Uncompromising Quality</li>
            <li>🤝 Community Empowerment</li>
            <li>💡 Impact Through Partnership</li>
          </ul>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className={styles.partnerSection}>
        <div className={styles.partnerContent}>
          <h1>Why Partner With Us</h1>
          <p>
            Choosing <strong>RAVINA Medicinals</strong> means choosing an
            experienced and ethical partner from Madagascar. We offer a reliable
            supply of premium natural ingredients, backed by full traceability
            and a strong social and environmental commitment.
          </p>

          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <span>🌱</span>
              <h2>Ethical Sourcing</h2>
              <p>
                Certified supply chains following UEBT standards — every step is
                traceable from picker to export.
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🔬</span>
              <h2>Quality Assurance</h2>
              <p>
                In-house laboratory equipped for HPLC analysis and strict
                quality control.
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🌍</span>
              <h2>Community Impact</h2>
              <p>
                Over 4,500 trained pickers empowered through education,
                nutrition, and environmental initiatives.
              </p>
            </div>
            <div className={styles.partnerCard}>
              <span>🚚</span>
              <h2>Reliable Logistics</h2>
              <p>
                Owned logistics fleet and efficient processing facilities ensure
                consistent quality and timely exports.
              </p>
            </div>
          </div>

          <button className={styles.partnerButton}>Become a Partner</button>
        </div>
      </section>

      <section className={styles.capacitySection}>
        <h1>Production Capacity</h1>
        <p className={styles.capacityIntro}>
          With a deeply integrated supply chain and a strong network of trained
          pickers, RAVINA Medicinals ensures reliable, high-volume and
          high-quality production — tailored for global skincare, nutraceutical,
          and pharmaceutical industries.
        </p>

        <div className={styles.capacityGrid}>
          <div className={styles.capacityCard}>
            <h2>50+ Tons / Year</h2>
            <p>
              Premium dried Centella Asiatica leaves processed and exported
              annually.
            </p>
          </div>

          <div className={styles.capacityCard}>
            <h2>4,500+ Pickers</h2>
            <p>
              Fully trained harvesting network across multiple regions of
              Madagascar.
            </p>
          </div>

          <div className={styles.capacityCard}>
            <h2>3 Certified Regions</h2>
            <p>
              Sustainably managed sourcing zones audited under UEBT standards.
            </p>
          </div>

          <div className={styles.capacityCard}>
            <h2>In-House Laboratory</h2>
            <p>
              HPLC analysis and strict quality control for every export batch.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.section4}>
        <h1>Together, Let’s Create What’s Next</h1>
        <h2>
          RAVINA Medicinals supports over <strong>4,500 pickers</strong> across
          Madagascar — promoting livelihoods, education, and biodiversity
          conservation.
        </h2>
      </section>

      {/* PARTNERS */}
      <CustomersSlider />
    </div>
  );
}
