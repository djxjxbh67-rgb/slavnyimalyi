import Link from "next/link";
import styles from "./page.module.css";
import content from "../../content/Группы.json";

export const metadata = {
  title: "Группы",
  description:
    "Группы детского сада «Славный Малый»: младшая (1,5–3 года) и старшая (3–7 лет). Узнайте о программе развития и занятиях.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/groups/" },
};

export default function GroupsPage() {
  return (
    <>
      <section className={styles.pageHero} id="groups-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className={`blob blob-teal ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">{content.hero.badge}</span>
          <h1 className="animate-fade-in-up delay-1">
            {content.hero.title_main}<span className="text-gradient">{content.hero.title_gradient}</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="section" id="groups-list">
        <div className="container">
          <div className={styles.groupsGrid}>
            {content.items.map((group, i) => (
              <div key={group.id} className={`${styles.groupCard} animate-fade-in-up ${i > 0 ? `delay-${i}` : ''}`}>
                <div className={`${styles.groupHeader} ${styles['header' + group.id.charAt(0).toUpperCase() + group.id.slice(1)]}`}>
                  <span className={styles.emoji}>{group.emoji}</span>
                  <div>
                    <h2>{group.title}</h2>
                    <span className={styles.ageTag}>{group.age}</span>
                  </div>
                </div>
                <div className={styles.groupBody}>
                  <p>{group.desc}</p>
                  <h3>{group.features_title}</h3>
                  <ul className={styles.programList}>
                    {group.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                  <Link href={group.link} className={`btn ${i === 1 ? 'btn-secondary' : (i === 0 ? 'btn-teal' : 'btn-primary')}`}>
                    {group.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
