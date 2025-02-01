import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["section-1"]}>
        <Image
          src="/assets/ravina.png"
          alt="Logo Diviniti"
          width={180}
          height={180}
        />
      </div>

      <div className={styles["section-2"]}>
        <h4>Plan de site </h4>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/centella-asiatica">
            <li>Centella Asiatica</li>
          </Link>
          <Link href="/about">
            <li>About us</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className={styles["section-3"]}>
        <h4>Contact</h4>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <Link href="contact@ravina.com">contact@ravina.com</Link>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>(+261) XX XX XX XX
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> Talatamaty, Antananarivo, Madagascar
          </li>
          
          <p className={styles.copyright}>
            © 2025 Ravina. Tous droits réservés.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
