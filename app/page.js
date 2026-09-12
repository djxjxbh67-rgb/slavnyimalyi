import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import imgPlayroom from "../public/images/gallery/playroom.png";
import promoData from "../content/Промо_акция.json";
import content from "../content/Главная.json";
import reviewsData from "../content/Отзывы.json";
import contactsData from "../content/Контакты.json";
import docsData from "../content/Документы.json";

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
              <svg className={styles.heroTextSvg} viewBox="0 0 700 700" aria-hidden="true">
                <defs>
                  <path id="heroTopCurve" d="M 75,350 A 275,275 0 0,1 625,350" fill="none" />
                  <path id="heroBottomCurve" d="M 75,350 A 275,275 0 0,0 625,350" fill="none" />
                </defs>
                <text className={styles.heroCurvedTextTop}>
                  <textPath href="#heroTopCurve" startOffset="50%" textAnchor="middle">
                    СЛАВНЫЙ
                  </textPath>
                </text>
                <text className={styles.heroCurvedTextBottom}>
                  <textPath href="#heroBottomCurve" startOffset="50%" textAnchor="middle">
                    МАЛЫЙ
                  </textPath>
                </text>
              </svg>
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

      {/* ==================== DOCUMENTS ==================== */}
      <section className={`section section-alt ${styles.docsSection}`} id="documents">
        <div className="container">
          <h2 className="text-center animate-fade-in-up">
            {content.documents.title_main} <span className="text-gradient">{content.documents.title_gradient}</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            {content.documents.subtitle}
          </p>
          <div className={styles.docsGrid}>
            {docsData.categories?.map((cat, i) => (
              <div key={i} className={`card animate-fade-in-up delay-${i + 1} ${styles.docsCard}`}>
                <div className={styles.docsCardIcon}>{cat.icon}</div>
                <h3>{cat.title}</h3>
                <ul className={styles.docsList}>
                  {cat.items?.map((item, j) => (
                    <li key={j}>
                      <span className={styles.docsCheck}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up delay-2" style={{ marginTop: "var(--space-2xl)" }}>
            <Link href="/documents/" className="btn btn-secondary" id="docs-cta">
              {content.documents.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section className={`section ${styles.reviewsSection}`} id="reviews">
        <div className="container">
          <div className="text-center">
            <span className="badge animate-fade-in-up">{reviewsData.badge}</span>
            <h2 className="animate-fade-in-up delay-1">
              {reviewsData.title_main}
              <span className="text-gradient">{reviewsData.title_gradient}</span>
            </h2>
            <p className={`animate-fade-in-up delay-2 ${styles.sectionDesc}`}>
              {reviewsData.subtitle}
            </p>

            {reviewsData.yandex_badge && (
              <a
                href={reviewsData.yandex_badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`animate-fade-in-up delay-2 ${styles.ratingBanner}`}
                title="Смотреть отзывы на Яндекс.Картах"
              >
                <span className={styles.ratingBannerStars}>★★★★★</span>
                <span className={styles.ratingScore}>{reviewsData.yandex_badge.rating}</span>
                <span>•</span>
                <span>{reviewsData.yandex_badge.text}</span>
                <span className={styles.ratingCount}>({reviewsData.yandex_badge.reviews_count})</span>
                <span>↗</span>
              </a>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsData.reviews.map((item, i) => (
              <div
                key={item.id || i}
                className={`${styles.reviewCard} animate-fade-in-up delay-${i + 1}`}
              >
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewAvatar}>{item.avatar}</div>
                  <div className={styles.reviewAuthorInfo}>
                    <h3>{item.name}</h3>
                    <span className={styles.reviewMeta}>{item.meta}</span>
                  </div>
                </div>

                <div className={styles.reviewRatingRow}>
                  <span className={styles.reviewStars}>
                    {"★".repeat(item.rating)}
                  </span>
                  <span className={styles.reviewDate}>{item.date}</span>
                </div>

                <p className={styles.reviewText}>«{item.text}»</p>

                <div className={styles.reviewFooter}>
                  <span>Источник:</span>
                  {item.source === "Яндекс.Карты" ? (
                    <a
                      href={reviewsData.yandex_badge?.link || "https://yandex.ru/maps/org/slavny_maly/195076948571/reviews/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.reviewSource}
                      title="Читать отзыв на Яндекс.Картах"
                    >
                      <span>📍</span> {item.source} ↗
                    </a>
                  ) : (
                    <span className={styles.reviewSource}>
                      <span>📍</span> {item.source}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOCATION / MAP ==================== */}
      <section className={`section ${styles.mapSection}`} id="location">
        <div className="container">
          <div className="text-center">
            <span className="badge animate-fade-in-up">📍 Как нас найти</span>
            <h2 className="animate-fade-in-up delay-1">
              Приходите <span className="text-gradient">в гости</span>
            </h2>
            <p className={`animate-fade-in-up delay-2 ${styles.sectionDesc}`}>
              Мы находимся в Приморском районе Санкт-Петербурга. Ждём вас и вашего малыша на знакомство!
            </p>
          </div>

          <div className={`${styles.mapWrapper} animate-fade-in-up delay-2`}>
            <iframe
              src={contactsData.map.url}
              className={styles.mapFrame}
              title="Детский сад Славный Малый — ул. Парашютная, 23, корпус 1"
              loading="lazy"
            />
          </div>

          <div className={`${styles.mapInfoBar} animate-fade-in-up delay-3`}>
            <div className={styles.mapInfoCard}>
              <span className={styles.mapInfoIcon}>📍</span>
              <div className={styles.mapInfoText}>
                <h4>Адрес садика</h4>
                <p>ул. Парашютная, д. 23, к. 1</p>
              </div>
            </div>

            <div className={styles.mapInfoCard}>
              <span className={styles.mapInfoIcon}>🚇</span>
              <div className={styles.mapInfoText}>
                <h4>Метро рядом</h4>
                <p>Комендантский пр., Пионерская</p>
              </div>
            </div>

            <div className={styles.mapInfoCard}>
              <span className={styles.mapInfoIcon}>🕒</span>
              <div className={styles.mapInfoText}>
                <h4>Режим работы</h4>
                <p>Пн–Пт: 08:00 – 19:00</p>
              </div>
            </div>
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

