import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "CENTELLA ASIATICA", href: "/centella-asiatica" },
    { name: "ABOUT US", href: "/about-gasikara-medicinal-plants" },
    { name: "QUALITY & SUSTAINABILITY", href: "/quality-sustainability" },
    // { name: "CONTACT US", href: "/contact" },
  ];

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
              href="/contact"
              className={`${styles.navbarBtn} ${styles.btn}`}
            >
              <span className={styles.btnTxt}>CONTACT US</span>
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
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
