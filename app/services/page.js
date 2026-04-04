import styles from "./page.module.css";

export const metadata = {
  title: "Услуги центра развития",
  description:
    "Дополнительные услуги детского центра «Славный Малый»: логопед, английский язык, подготовка к школе. Индивидуальные и групповые занятия в Приморском районе СПб.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/services/" },
};

import content from "../../content/Услуги.json";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero} id="services-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className={`blob blob-lavender ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">{content.hero.badge}</span>
          <h1 className="animate-fade-in-up delay-1">
            {content.hero.title_main} <span className="text-gradient">{content.hero.title_gradient}</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services-list">
        <div className="container">
          <div className={styles.servicesList}>
            {content.services.map((service, idx) => (
              <div
                key={service.id}
                className={`${styles.serviceBlock} animate-fade-in-up`}
                id={service.id}
              >
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceEmoji}>{service.emoji}</span>
                  <div>
                    <h2>{service.title}</h2>
                  </div>
                </div>

                <div className={styles.serviceContent}>
                  <div className={styles.serviceInfo}>
                    <p className={styles.serviceDesc}>{service.description}</p>

                    <h3>{service.features_title}</h3>
                    <ul className={styles.featureList}>
                      {service.features.map((f, i) => (
                        <li key={i}>
                          <span className={styles.checkmark}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.priceCard}>
                    <h3>{service.pricing_title}</h3>
                    <div className={styles.priceRows}>
                      {service.prices.map((p, i) => (
                        <div key={i} className={styles.priceRow}>
                          <span className={styles.priceName}>{p.name}</span>
                          <span className={styles.priceDots} />
                          <span className={styles.priceValue}>{p.value}</span>
                        </div>
                      ))}
                    </div>
                    <a href="tel:+79500383731" className="btn btn-primary">
                      Записаться
                    </a>
                  </div>
                </div>

                {idx < content.services.length - 1 && (
                  <hr className={styles.divider} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section section-alt`} id="services-cta">
        <div className="container text-center">
          <h2 className="animate-fade-in-up">
            {content.cta.title_main} <span className="text-gradient">{content.cta.title_gradient}</span>
          </h2>
          <p
            className="animate-fade-in-up delay-1"
            style={{ maxWidth: 520, margin: "16px auto 32px", color: "var(--color-text-muted)" }}
          >
            {content.cta.subtitle}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79500383731" className="btn btn-primary animate-fade-in-up delay-2">
              {content.cta.phone_text}
            </a>
            <a href="mailto:slavnyimalyispb@gmail.com" className="btn btn-secondary animate-fade-in-up delay-3">
              {content.cta.email_text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
