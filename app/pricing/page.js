import styles from "./page.module.css";
import content from "../../content/Цены.json";

export const metadata = {
  title: "Цены и тарифы",
  description:
    "Стоимость посещения частного детского сада «Славный Малый» в Приморском районе СПб. Прозрачные тарифы, рабочая суббота, пробный день бесплатно.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <section className={styles.pageHero} id="pricing-hero">
        <div className={`blob blob-sun ${styles.blob1}`} />
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

      <section className="section" id="pricing-plans">
        <div className="container">
          <div className={styles.plansGrid}>
            {content.plans.map((plan, i) => (
              <div 
                key={plan.id} 
                className={`${styles.planCard} ${plan.featured ? styles.featured : ''} animate-fade-in-up delay-${i}`}
              >
                {plan.featured && <div className={styles.featuredBadge}>{plan.featured_badge}</div>}
                <div className={styles.planHeader}>
                  <span className={styles.planEmoji}>{plan.emoji}</span>
                  <h2>{plan.name}</h2>
                  <p className={styles.planTime}>{plan.time}</p>
                </div>
                <div className={styles.planBody}>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>{plan.price}</span>
                    <span className={styles.pricePer}>{plan.unit}</span>
                  </div>
                  <ul className={styles.featureList}>
                    {plan.features.map((feat, j) => (
                      <li key={j} className={feat.included ? styles.included : styles.excluded}>
                        {feat.text}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+79500383731" className="btn btn-primary">
                    Записаться
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className={styles.infoBlock}>
            <h2 className="text-center">{content.info.title}</h2>
            <div className={styles.infoGrid}>
              {content.info.items.map((item, i) => (
                <div key={i} className={`glass-card ${styles.infoCard}`}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
