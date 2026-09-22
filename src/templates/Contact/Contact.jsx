import Head from "next/head";
import styles from "./style.module.scss";
import { motion } from "motion/react";

export default function Contact({ lang = "en" }) {
  const isFr = lang === "fr";
  return (
    <>
      <Head>
        <title>
          {isFr
            ? "Contactez-nous | Gasikara Medicinal Plants — Centella Asiatica Madagascar"
            : "Contact Us | Gasikara Medicinal Plants — Centella Asiatica Madagascar"}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? "Contactez Gasikara Medicinal Plants pour demander des échantillons ou discuter de l'approvisionnement en Centella asiatica. Sauvage, vérifié HPLC — Madagascar."
              : "Contact Gasikara Medicinal Plants to request samples or discuss Centella asiatica sourcing. Wild-harvested, HPLC verified — Madagascar."
          }
        />
        <link
          rel="canonical"
          href={
            isFr
              ? "https://gasikara-plants.com/fr/contact"
              : "https://gasikara-plants.com/contact"
          }
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://gasikara-plants.com/contact"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://gasikara-plants.com/fr/contact"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://gasikara-plants.com/contact"
        />
        <meta
          property="og:title"
          content={
            isFr
              ? "Contactez-nous | Gasikara Medicinal Plants"
              : "Contact Us | Gasikara Medicinal Plants"
          }
        />
        <meta
          property="og:description"
          content={
            isFr
              ? "Demandez des échantillons ou discutez de votre approvisionnement en Centella asiatica de Madagascar."
              : "Request samples or discuss your Centella asiatica sourcing from Madagascar."
          }
        />
        <meta
          property="og:image"
          content="https://gasikara-plants.com/assets/gmp-logo.jpg"
        />
      </Head>

      <div className={styles.contactContainer}>
        {/* Left Column - Image */}
        <div className={styles.leftCol}>
          <img
            className={styles.logo}
            src="/assets/logo-white.png"
            alt="Gasikara Medicinal Plants"
          />
        </div>

        {/* Right Column - Form & Info */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>{isFr ? "Contactez-nous" : "Contact Us"}</h1>
          <p className={styles.introText}>
            {isFr
              ? "Prêt à vous approvisionner en Centella Asiatica premium et extraits naturels de Madagascar ? Envoyez-nous vos besoins et nous vous fournirons des spécifications et devis détaillés."
              : "Ready to source premium Centella Asiatica and natural extracts from Madagascar? Send us your requirements and we will provide detailed specifications and quotations."}
          </p>

          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  {isFr ? "Nom complet" : "Full Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={isFr ? "Votre nom complet" : "Your full name"}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  {isFr ? "Adresse e-mail" : "Email Address"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={isFr ? "Votre e-mail" : "Your email"}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="company">
                  {isFr ? "Entreprise" : "Company"}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder={isFr ? "Nom de l'entreprise" : "Company name"}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country">{isFr ? "Pays" : "Country"}</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder={isFr ? "Votre pays" : "Your country"}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="interest">
                {isFr ? "Produits d'intérêt" : "Products of Interest"}
              </label>
              <select id="interest" name="interest">
                <option value="">
                  {isFr
                    ? "Sélectionnez une catégorie"
                    : "Select a product category"}
                </option>
                <option value="centella">Centella Asiatica</option>
                <option value="essential-oils">
                  {isFr ? "Huiles Essentielles" : "Essential Oils"}
                </option>
                <option value="spices">
                  {isFr ? "Épices et Aromatiques" : "Spices and Aromatics"}
                </option>
                <option value="multiple">
                  {isFr ? "Plusieurs Produits" : "Multiple Products"}
                </option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder={
                  isFr
                    ? "Décrivez vos besoins, quantités nécessaires..."
                    : "Describe your requirements, quantities needed..."
                }
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>{isFr ? "Envoyer la Demande" : "Send Inquiry"}</span>
              <span className={styles.buttonIcon}>&#10148;</span>
            </button>
          </form>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  <a href="mailto:contact@gasikara-medicinals.com">
                    contact@gasikara-medicinals.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp: +261 38
                  070 7809
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>
                  {isFr ? "Localisation" : "Location"}
                </div>
                <div className={styles.contactValue}>
                  Antananarivo, Madagascar
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>
                  {isFr ? "Horaires d'ouverture" : "Business Hours"}
                </div>
                <div className={styles.contactValue}>
                  {isFr
                    ? "Lun - Ven : 8h00 - 17h00"
                    : "Mon - Fri: 8:00 - 17:00"}
                </div>
              </div>
            </div>

            {/* <div className={styles.certRow}>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>UEBT</span>
                <span>Certified</span>
              </div>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>HPLC</span>
                <span>Laboratory</span>
              </div>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>ISO</span>
                <span>Quality</span>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}
