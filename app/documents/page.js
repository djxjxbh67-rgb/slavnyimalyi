import styles from "./page.module.css";
import content from "../../content/Документы.json";

export const metadata = {
  title: "Пакет документов",
  description:
    "Список документов для поступления в частный детский сад «Славный Малый»: медицинская справка, анализы, свидетельство о рождении, прививочный сертификат.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/documents/" },
};

export default function DocumentsPage() {
  return (
    <>
      <section className={styles.pageHero} id="documents-hero">
        <div className={`blob blob-yellow ${styles.blob1}`} />
        <div className={`blob blob-orange ${styles.blob2}`} />
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

      <section className="section" id="documents-list">
        <div className="container">
          <div className={styles.docsGrid}>
            {content.categories.map((cat, i) => (
              <div key={i} className={`card animate-fade-in-up delay-${i + 1} ${styles.docsCard}`}>
                <div className={styles.docsCardIcon}>{cat.icon}</div>
                <h2>{cat.title}</h2>
                <p className={styles.docsCardDesc}>{cat.description}</p>
                <ul className={styles.docsList}>
                  {cat.items.map((item, j) => (
                    <li key={j}>
                      <span className={styles.docsCheck}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
