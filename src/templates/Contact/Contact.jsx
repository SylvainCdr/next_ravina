import Head from "next/head";
import styles from "./style.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Contact RAVINA Medicinals - Premium Centella Asiatica Supplier
          Madagascar
        </title>
        <meta
          name="description"
          content="Contact RAVINA Medicinals for premium Centella Asiatica, essential oils and spices from Madagascar. UEBT certified supplier with HPLC laboratory analysis."
        />
      </Head>

      <div className={styles.contactContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Contact RAVINA Medicinals</h1>
            <p className={styles.heroSubtitle}>
              Partner with Madagascar's leading UEBT-certified supplier of
              premium Centella Asiatica and natural extracts
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span>🌿</span>
                <p>UEBT Certified</p>
              </div>
              <div className={styles.heroStat}>
                <span>🔬</span>
                <p>HPLC Laboratory</p>
              </div>
              <div className={styles.heroStat}>
                <span>🤝</span>
                <p>Trusted Partner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Content */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Let's Start a Partnership</h2>
              <p className={styles.formIntro}>
                Ready to source premium Centella Asiatica and natural extracts
                from Madagascar? Send us your requirements and we'll provide
                detailed specifications and quotations.
              </p>

              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company *</label>
                    <input type="text" id="company" name="company" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" name="position" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="country">Country *</label>
                  <input type="text" id="country" name="country" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="interest">Products of Interest</label>
                  <select id="interest" name="interest">
                    <option value="">Select a product category</option>
                    <option value="centella">
                      Centella Asiatica (Fresh/Dried)
                    </option>
                    <option value="essential-oils">Essential Oils</option>
                    <option value="spices">Spices & Aromatics</option>
                    <option value="extracts">Natural Extracts</option>
                    <option value="multiple">Multiple Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Please describe your requirements, quantities needed, and any specific certifications required..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  <span>Send Inquiry</span>
                  <span className={styles.buttonIcon}>→</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2>RAVINA Medicinals</h2>
              <p className={styles.companyTagline}>
                Premium Natural Extracts from Madagascar
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactText}>
                    <h4>Email</h4>
                    <p>contact@ravina-medicinals.com</p>
                    <p>export@ravina-medicinals.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📱</div>
                  <div className={styles.contactText}>
                    <h4>Phone</h4>
                    <p>+261 34 XX XX XX XX</p>
                    <p>WhatsApp available</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactText}>
                    <h4>Location</h4>
                    <p>Talatamaty, Antananarivo</p>
                    <p>Madagascar</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>🏢</div>
                  <div className={styles.contactText}>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 - 17:00</p>
                    <p>GMT+3 (Madagascar Time)</p>
                  </div>
                </div>
              </div>

              <div className={styles.certifications}>
                <h3>Our Certifications</h3>
                <div className={styles.certBadges}>
                  <div className={styles.certBadge}>
                    <span className={styles.certIcon}>🌿</span>
                    <span>UEBT Certified</span>
                  </div>
                  <div className={styles.certBadge}>
                    <span className={styles.certIcon}>🔬</span>
                    <span>HPLC Laboratory</span>
                  </div>
                  <div className={styles.certBadge}>
                    <span className={styles.certIcon}>✅</span>
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>

              <div className={styles.responseTime}>
                <div className={styles.responseIcon}>⚡</div>
                <div className={styles.responseText}>
                  <h4>Quick Response</h4>
                  <p>
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose RAVINA Section */}
        <section className={styles.whySection}>
          <div className={styles.whyContent}>
            <h2>Why Partner with RAVINA?</h2>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🌿</div>
                <h4>UEBT Certification</h4>
                <p>
                  Ethical sourcing with full supply chain traceability and
                  community development programs
                </p>
              </div>
              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🔬</div>
                <h4>HPLC Laboratory</h4>
                <p>
                  In-house quality control with detailed certificates of
                  analysis for every batch
                </p>
              </div>
              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🚚</div>
                <h4>Reliable Supply</h4>
                <p>
                  Direct sourcing from 1,630+ trained pickers across
                  Madagascar's premium growing regions
                </p>
              </div>
              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🤝</div>
                <h4>Partnership Focus</h4>
                <p>
                  Long-term relationships with personalized service and custom
                  product development
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
