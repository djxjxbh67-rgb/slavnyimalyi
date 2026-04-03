import Image from "next/image";
import styles from "./page.module.css";

import imgPlayroom from "../../public/images/gallery/playroom.png";
import imgBedroom from "../../public/images/gallery/bedroom.png";
import imgArts from "../../public/images/gallery/arts.png";
import imgPlayground from "../../public/images/gallery/playground.png";
import content from "../../content/О_нас.json";

export const metadata = {
  title: "О нас",
  description:
    "Узнайте больше о частном детском саде «Славный Малый» в Приморском районе СПб. Наши ценности, методики развития и команда воспитателей.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/about/" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero} id="about-hero">
        <div className={`blob blob-teal ${styles.blob1}`} />
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

      {/* Mission */}
      <section className="section" id="about-mission">
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <h2>{content.mission.title}</h2>
              {content.mission.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className={styles.colVisual}>
              <div className={styles.visualCard}>
                <span className={styles.bigEmoji}>{content.mission.visual_emoji}</span>
                <p className={styles.visualLabel}>{content.mission.visual_label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" id="about-values">
        <div className="container">
          <h2 className="text-center">{content.values.title}</h2>
          <p className={`text-center ${styles.sectionSub}`}>
            {content.values.subtitle}
          </p>

          <div className={styles.valuesGrid}>
            {content.values.items.map((val, i) => (
              <div key={i} className={`card ${styles.valueCard}`}>
                <span className={styles.valueIcon}>{val.icon}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="section" id="about-environment">
        <div className="container">
          <h2 className="text-center">{content.environment.title}</h2>
          <p className={`text-center ${styles.sectionSub}`}>
            {content.environment.subtitle}
          </p>

          <div className={styles.featuresList}>
            {content.environment.features.map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <div className={styles.galleryGrid}>
            {[
              { src: imgPlayroom, alt: "Светлая игровая комната Славный Малый" },
              { src: imgBedroom, alt: "Уютная спальня для дневного сна" },
              { src: imgArts, alt: "Творческая зона для занятий" },
              { src: imgPlayground, alt: "Безопасная детская площадка" },
            ].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.galleryImg}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
