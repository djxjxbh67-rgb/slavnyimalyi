"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about/", label: "О нас" },
  { href: "/groups/", label: "Группы" },
  { href: "/services/", label: "Услуги" },
  { href: "/pricing/", label: "Цены" },
  { href: "/contacts/", label: "Контакты" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      id="site-header"
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Славный Малый — Главная">
          <span className={styles.logoIcon}>🦔</span>
          <span className={styles.logoText}>
            Славный<span className={styles.logoAccent}>Малый</span>
          </span>
        </Link>

        <nav
          className={`${styles.nav} ${isMobileOpen ? styles.navOpen : ""}`}
          aria-label="Главная навигация"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+79500383731"
            className={`btn btn-primary ${styles.ctaBtn}`}
            id="header-cta"
          >
            Записаться
          </a>
        </nav>

        <button
          className={`${styles.burger} ${isMobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
