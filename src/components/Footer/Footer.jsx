import styles from "./style.module.scss";
import Link from "next/link";

function Footer({ lang = "en" }) {
  const prefix = lang === "fr" ? "/fr" : "";
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["section-1"]}>
        <img src="/assets/gmp-logo.jpg" alt="Gasikara Medicinal Plants" />
        <p className={styles.slogan}>
          {lang === "fr"
            ? "Centella Asiatica sauvage de Madagascar — Validée par la science."
            : "Wild-Harvested Centella Asiatica from Madagascar — Verified by Science."}
        </p>
      </div>

      <div className={styles["section-2"]}>
        <h4>{lang === "fr" ? "Plan du site" : "Sitemap"} </h4>
        <ul>
          <Link href={`${prefix}/`}>
            <li>{lang === "fr" ? "Accueil" : "Home"}</li>
          </Link>
          <Link href={`${prefix}/centella-asiatica`}>
            <li>Centella Asiatica</li>
          </Link>
          <Link href={`${prefix}/about-gasikara-medicinal-plants`}>
            <li>{lang === "fr" ? "À propos" : "About Us"}</li>
          </Link>
          <Link href={`${prefix}/quality-sustainability`}>
            <li>
              {lang === "fr"
                ? "Qualité & Durabilité"
                : "Quality & Sustainability"}
            </li>
          </Link>
          <Link href={`${prefix}/contact`}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className={styles["section-3"]}>
        <h4>Contact</h4>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <Link href="mailto:contact@gasikara-plants.com">
              contact@gasikara-plants.com
            </Link>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp"></i> WhatsApp: +261 38 070 7809
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> Antananarivo,
            Madagascar
          </li>
        </ul>
      </div>
      {/* <div className={styles["section-4"]}>
        <h4>Certifications</h4>
        <ul>
          <li>UEBT Member</li>
          <li>Ecocert Organic Certified</li>
          <li>Traceability Verified by FarmForce</li>
          <p className={styles.copyright}>
            © 2026 Gasikara Medicinal Plants | All rights reserved
          </p>
        </ul>
      </div> */}
    </div>
  );
}

export default Footer;
