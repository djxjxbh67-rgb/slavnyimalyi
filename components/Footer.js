import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>🦔</span>
              <span>
                Славный<span className={styles.logoAccent}>Малый</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Детский сад и центр развития в&nbsp;Приморском районе
              Санкт&#8209;Петербурга
            </p>
          </div>

          {/* Nav Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Навигация</h4>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about/">О нас</Link></li>
              <li><Link href="/groups/">Группы</Link></li>
              <li><Link href="/services/">Услуги</Link></li>
              <li><Link href="/pricing/">Цены</Link></li>
              <li><Link href="/team/">Команда</Link></li>
              <li><Link href="/documents/">Документы</Link></li>
              <li><Link href="/contacts/">Контакты</Link></li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Контакты</h4>
            <ul>
              <li>
                <a href="tel:+79500383731">+7 950 038-37-31</a>
              </li>
              <li>
                <a href="mailto:slavnyimalyispb@gmail.com">slavnyimalyispb@gmail.com</a>
              </li>
              <li>ул.&nbsp;Парашютная&nbsp;23/1</li>
              <li>ул.&nbsp;Парашютная&nbsp;23/2</li>
              <li>Пн‑Пт: 8:00 – 20:00</li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Запишитесь</h4>
            <p className={styles.ctaText}>
              Попробуйте бесплатный пробный&nbsp;день!
            </p>
            <a
              href="tel:+79500383731"
              className="btn btn-primary"
              id="footer-cta"
            >
              Позвонить нам
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            <p>&copy; {new Date().getFullYear()} Славный Малый. Все права защищены.</p>
            <a 
              href="https://rocket-landing.ru/" 
              className={styles.creatorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Сделано в Rocket Landing
            </a>
          </div>
          <Link href="/politics/" className={styles.policyLink}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
