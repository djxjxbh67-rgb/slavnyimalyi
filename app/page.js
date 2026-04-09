import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import imgPlayroom from "../public/images/gallery/playroom.png";
import teamData from "../content/Команда.json";
import promoData from "../content/Промо_акция.json";
import content from "../content/Главная.json";

export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className={styles.hero} id="hero">
        <div className={`${styles.heroBg}`}>
          <div className={`blob blob-orange ${styles.blobHero1}`} />
          <div className={`blob blob-teal ${styles.blobHero2}`} />
          <div className={`blob blob-yellow ${styles.blobHero3}`} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={`badge animate-fade-in-up`}>
              {content.hero.badge}
            </span>
            <h1 className={`animate-fade-in-up delay-1`} style={{ whiteSpace: "pre-wrap" }}>
              {content.hero.title_main}<span className="text-gradient">{content.hero.title_gradient}</span>
            </h1>
            <p className={`animate-fade-in-up delay-2 ${styles.heroDesc}`}>
              {content.hero.subtitle}
            </p>
            <div className={`animate-fade-in-up delay-3 ${styles.heroCtas}`}>
              <a
                href="tel:+79500383731"
                className="btn btn-primary"
                id="hero-cta-phone"
              >
                {content.hero.cta_primary}
              </a>
              <Link href="/groups/" className="btn btn-secondary" id="hero-cta-groups">
                {content.hero.cta_secondary}
              </Link>
            </div>
          </div>

          <div className={`${styles.heroVisual} animate-scale-in delay-3`}>
            <div className={styles.heroCard}>
              <div className={styles.heroEmoji}>🦔</div>
              <div className={styles.heroCardRing1} />
              <div className={styles.heroCardRing2} />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== PROMO ==================== */}
      {promoData.enabled && (!promoData.expiresAt || new Date(promoData.expiresAt) >= new Date()) && (
        <section className={styles.promoSection} id="promo">
          <div className="container">
            <div className={styles.promoCard}>
              <div className={`blob blob-yellow ${styles.blobPromo1}`} />
              <div className={`blob blob-orange ${styles.blobPromo2}`} />
              <div className={styles.promoContent}>
                <span className="badge animate-fade-in-up">{promoData.badge}</span>
                <h2 className="animate-fade-in-up delay-1">
                  {promoData.title}
                </h2>
                <p className="animate-fade-in-up delay-2">
                  {promoData.text}
                </p>
                <a
                  href={promoData.buttonLink}
                  className="btn btn-primary animate-fade-in-up delay-3"
                  id="promo-cta"
                >
                  {promoData.buttonText}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== ADVANTAGES ==================== */}
      <section className={`section ${styles.advantages}`} id="advantages">
        <div className="container">
          <h2 className="text-center animate-fade-in-up">
            {content.advantages.title_main} <span className="text-gradient">{content.advantages.title_gradient}</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            {content.advantages.subtitle}
          </p>

          <div className={styles.advantagesGrid}>
            {content.advantages.items.map((item, i) => (
              <div
                key={i}
                className={`card animate-fade-in-up delay-${i + 1} ${styles.advantageCard}`}
              >
                <span className={styles.advantageIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO TOUR ==================== */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.videoWrapper}>
            <Image 
              src={imgPlayroom}
              alt="Видеоэкскурсия по детскому саду"
              className={styles.videoImg}
              fill
              placeholder="blur"
            />
            <div className={styles.playBtn}></div>
          </div>
        </div>
      </section>

      {/* ==================== GROUPS PREVIEW ==================== */}
      <section className={`section section-alt ${styles.groupsPreview}`} id="groups-preview">
        <div className="container">
          <h2 className="text-center animate-fade-in-up">
            {content.groups.title_main} <span className="text-gradient">{content.groups.title_gradient}</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            {content.groups.subtitle}
          </p>

          <div className={styles.groupsGrid}>
            {content.groups.items.map((group, i) => (
              <div key={i} className={`${styles.groupCard} animate-fade-in-up delay-${i + 2}`}>
                <div className={`${styles.groupCardTop} ${styles['group' + group.id.charAt(0).toUpperCase() + group.id.slice(1)]}`}>
                  <span className={styles.groupEmoji}>{group.emoji}</span>
                  <span className={styles.groupAge}>{group.age}</span>
                </div>
                <div className={styles.groupCardBody}>
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                  <Link href={group.link} className={`btn ${i === 1 ? 'btn-secondary' : (i === 0 ? 'btn-teal' : 'btn-primary')}`} id={`group-${group.id}-cta`}>
                    {group.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TEAM ==================== */}
      <section className={`section ${styles.teamSection}`} id="team">
        <div className="container">
          <h2 className="text-center animate-fade-in-up">
            {content.team.title_main} <span className="text-gradient">{content.team.title_gradient}</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            {content.team.subtitle}
          </p>

          <div className={styles.teamGrid}>
            {teamData.members.slice(0, 4).map((member, i) => (
              <div
                key={i}
                className={`card animate-fade-in-up delay-${i + 1} ${styles.teamCard}`}
              >
                <div className={styles.teamAvatar}>
                  {member.photo ? (
                    <Image
                      src={`/images/team/${member.photo}`}
                      alt={member.name}
                      width={88}
                      height={88}
                      className={styles.teamPhoto}
                    />
                  ) : (
                    <span>{member.emoji}</span>
                  )}
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p>{member.education}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "var(--space-xl)" }}>
            <Link href="/team/" className="btn btn-secondary" id="team-all-cta">
              Вся команда →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== DOCUMENTS ==================== */}
      <section className={`section section-alt ${styles.docsSection}`} id="documents">
        <div className="container">
          <h2 className="text-center animate-fade-in-up">
            {content.documents.title_main} <span className="text-gradient">{content.documents.title_gradient}</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            {content.documents.subtitle}
          </p>
          <div className="text-center animate-fade-in-up delay-2">
            <Link href="/documents/" className="btn btn-primary" id="docs-cta">
              {content.documents.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className={styles.ctaBottom} id="cta-bottom">
        <div className={`blob blob-yellow ${styles.blobBottom}`} />
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaCardContent}>
              <h2 className="animate-fade-in-up">
                {content.cta_bottom.title_main} <span className="text-gradient">{content.cta_bottom.title_gradient}</span>
              </h2>
              <p className="animate-fade-in-up delay-1">
                {content.cta_bottom.subtitle}
              </p>
              <a href="tel:+79500383731" className="btn btn-primary animate-fade-in-up delay-2" id="bottom-cta-phone">
                {content.cta_bottom.cta}
              </a>
            </div>
            <div className={`${styles.ctaCardVisual} animate-scale-in delay-2`}>
              <div className={styles.ctaVisualBadge}>☀️</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

