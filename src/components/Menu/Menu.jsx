import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Menu({ lang = "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const prefix = lang === "fr" ? "/fr" : "";

  const menuItems =
    lang === "fr"
      ? [
          { name: "ACCUEIL", href: "/fr" },
          { name: "CENTELLA ASIATICA", href: "/fr/centella-asiatica" },
          { name: "À PROPOS", href: "/fr/about-gasikara-medicinal-plants" },
          { name: "QUALITÉ & DURABILITÉ", href: "/fr/quality-sustainability" },
          { name: "CONTACT", href: "/fr/contact" },
        ]
      : [
          { name: "HOME", href: "/" },
          { name: "CENTELLA ASIATICA", href: "/centella-asiatica" },
          { name: "ABOUT US", href: "/about-gasikara-medicinal-plants" },
          { name: "QUALITY & SUSTAINABILITY", href: "/quality-sustainability" },
          { name: "CONTACT US", href: "/contact" },
        ];

  // Maps the current path to its equivalent in the other language
  const otherLangHref = () => {
    const path = router.pathname;
    if (lang === "fr") {
      return path.replace(/^\/fr/, "") || "/";
    }
    return `/fr${path === "/" ? "" : path}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.navbar}>
        <nav className={styles.wrapper}>
          <div className={styles.menuBar}>
            {/* Logo */}
            <div className={styles.logoWrapper}>
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/assets/gmp-logo.jpg"
                  alt="Gasikara Medicinal Plants - Premium Centella Asiatica from Madagascar"
                  width={70}
                  height={75}
                />
              </Link>
            </div>

            {/* Standard nav links (desktop) */}
            <ul className={styles.navLinks}>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={
                      router.pathname === item.href ? styles.activeLink : ""
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button (desktop) */}
            <Link
              href={`${prefix}/contact`}
              className={`${styles.navbarBtn} ${styles.btn}`}
            >
              <span className={styles.btnTxt}>
                {lang === "fr" ? "DEMANDER UN ÉCHANTILLON" : "REQUEST A SAMPLE"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="m17.76 6.857-5.727-5.688a.821.821 0 0 0-1.147.01.81.81 0 0 0-.01 1.139l4.33 4.3H.819a.821.821 0 0 0-.578.238.81.81 0 0 0 .578 1.388h14.389l-4.33 4.3a.813.813 0 0 0-.19.892.813.813 0 0 0 .765.505.824.824 0 0 0 .581-.248l5.727-5.688a.81.81 0 0 0 0-1.148Z"
                />
              </svg>
            </Link>

            {/* Language switcher */}
            <div className={styles.langSwitch} role="group" aria-label="Language switcher">
              <svg
                className={styles.langIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M3 12h18M12 3c2.5 2.7 3.8 5.8 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.8-3.8-9S9.5 5.7 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <Link
                href={lang === "en" ? router.pathname : otherLangHref()}
                className={lang === "en" ? styles.langActive : styles.langOption}
              >
                EN
              </Link>
              <span className={styles.langDivider}>/</span>
              <Link
                href={lang === "fr" ? router.pathname : otherLangHref()}
                className={lang === "fr" ? styles.langActive : styles.langOption}
              >
                FR
              </Link>
            </div>

            {/* Menu Toggle Button (mobile) */}
            <button
              type="button"
              className={`${styles.menuToggle} ${
                isMenuOpen ? styles.open : ""
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              id="menu-toggle"
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
          </div>

          {/* Mobile dropdown menu */}
          <div
            className={`${styles.mobileMenu} ${
              isMenuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={
                      router.pathname === item.href ? styles.activeLink : ""
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className={styles.mobileLangItem}>
                <Link href={otherLangHref()} onClick={closeMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path
                      d="M3 12h18M12 3c2.5 2.7 3.8 5.8 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.8-3.8-9S9.5 5.7 12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                  {lang === "fr" ? "English" : "Français"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
