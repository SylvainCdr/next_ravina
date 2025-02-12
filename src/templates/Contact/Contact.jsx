import Head from "next/head";
import styles from "./style.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, collaborations, or support."
        />
      </Head>

      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>
          Have questions? Fill out the form below and we’ll get back to you as
          soon as possible.
        </p>

          {/* Contact Form */}
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Company (optionnal)</label>
              <input type="text" id="company" name="name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>Email: contact@ravina.com</p>
            <p>Phone: (+261) XX XX XX XX</p>
            <p> Talatamaty, Antananarivo, Madagascar</p>
          </div>
        </div>
      </div>
    </>
  );
}
