"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Главная" },
  {
    href: "/about/",
    label: "О нас",
    children: [
      { href: "/team/", label: "Наша команда" },
      { href: "/documents/", label: "Пакет документов" },
    ],
  },
  {
    href: "/groups/",
    label: "Группы",
    children: [
      { href: "/groups/young/", label: "Младшая (1,7–3 года)" },
      { href: "/groups/middle/", label: "Средняя (3–4,5 года)" },
      { href: "/groups/senior/", label: "Старшая (5–7 лет)" },
    ],
  },
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
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMobileOpen ? styles.menuOpen : ""}`}
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
              <li
                key={link.href}
                className={link.children ? styles.hasDropdown : ""}
              >
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                  {link.children && (
                    <span className={styles.chevron} aria-hidden="true">›</span>
                  )}
                </Link>
                {link.children && (
                  <ul className={styles.dropdown}>
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={styles.dropdownLink}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
