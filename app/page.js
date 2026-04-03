import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import imgPlayroom from "../public/images/gallery/playroom.png";
import teamData from "../data/team.json";
import promoData from "../data/promo.json";

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
              🌟 Запишитесь на бесплатный пробный день
            </span>
            <h1 className={`animate-fade-in-up delay-1`}>
              Детский сад, <br />
              в&nbsp;который хочется <span className="text-gradient">возвращаться</span>
            </h1>
            <p className={`animate-fade-in-up delay-2 ${styles.heroDesc}`}>
              «Славный Малый» — это частный детский сад и&nbsp;центр развития
              в&nbsp;Приморском районе Санкт&#8209;Петербурга. Любовь,
              безопасность и&nbsp;развитие для детей от&nbsp;1,5
              до&nbsp;7&nbsp;лет.
            </p>
            <div className={`animate-fade-in-up delay-3 ${styles.heroCtas}`}>
              <a
                href="tel:+79500383731"
                className="btn btn-primary"
                id="hero-cta-phone"
              >
                Записаться на пробный день
              </a>
              <Link href="/groups/" className="btn btn-secondary" id="hero-cta-groups">
                Посмотреть группы
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
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            Мы создали пространство, где каждый ребёнок чувствует себя в безопасности
            и&nbsp;развивается с&nbsp;удовольствием
          </p>

          <div className={styles.advantagesGrid}>
            {[
              {
                icon: "🎨",
                title: "Развивающая среда",
                desc: "Современные пособия, игровые зоны и творческие мастерские для гармоничного развития.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Малые группы",
                desc: "До 15 детей в группе — индивидуальный подход и внимание каждому ребёнку.",
              },
              {
                icon: "🍎",
                title: "Здоровое питание",
                desc: "Сбалансированное 5-разовое питание из свежих продуктов с учётом аллергий.",
              },
              {
                icon: "🎶",
                title: "Музыка и спорт",
                desc: "Музыкальные занятия, ритмика и физкультура — каждый день по расписанию.",
              },
              {
                icon: "📍",
                title: "Удобная локация",
                desc: "Два филиала на ул. Парашютной, в пешей доступности от ЖК «Приморский квартал».",
              },
            ].map((item, i) => (
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
            Наши <span className="text-gradient">группы</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            Каждая группа адаптирована под возрастные потребности и&nbsp;особенности развития
          </p>

          <div className={styles.groupsGrid}>
            {/* Младшая */}
            <div className={`${styles.groupCard} animate-fade-in-up delay-2`}>
              <div className={`${styles.groupCardTop} ${styles.groupYoung}`}>
                <span className={styles.groupEmoji}>🐣</span>
                <span className={styles.groupAge}>1,5 – 3 года</span>
              </div>
              <div className={styles.groupCardBody}>
                <h3>Младшая группа</h3>
                <p>
                  Мягкая адаптация к детскому саду, развитие речи, сенсорики
                  и&nbsp;мелкой моторики в&nbsp;игровой форме.
                </p>
                <Link href="/groups/young/" className="btn btn-teal" id="group-young-cta">
                  Подробнее
                </Link>
              </div>
            </div>

            {/* Старшая */}
            <div className={`${styles.groupCard} animate-fade-in-up delay-3`}>
              <div className={`${styles.groupCardTop} ${styles.groupSenior}`}>
                <span className={styles.groupEmoji}>🦁</span>
                <span className={styles.groupAge}>3 – 7 лет</span>
              </div>
              <div className={styles.groupCardBody}>
                <h3>Старшая группа</h3>
                <p>
                  Подготовка к&nbsp;школе, развитие логики, творчества
                  и&nbsp;социальных навыков в&nbsp;дружном коллективе.
                </p>
                <Link href="/groups/senior/" className="btn btn-primary" id="group-senior-cta">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM ==================== */}
      <section className={`section ${styles.teamSection}`} id="team">
        <div className="container">
          <h2 className="text-center animate-fade-in-up">
            Наша <span className="text-gradient">команда</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            Профессиональные и&nbsp;любящие педагоги — сердце нашего детского сада
          </p>

          <div className={styles.teamGrid}>
            {teamData.slice(0, 4).map((member, i) => (
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
            Пакет <span className="text-gradient">документов</span>
          </h2>
          <p className={`text-center animate-fade-in-up delay-1 ${styles.sectionDesc}`}>
            Для поступления в&nbsp;наш детский сад вам необходимо собрать следующие документы
          </p>

          <div className={styles.docsGrid}>
            <div className={`card animate-fade-in-up delay-2 ${styles.docsCard}`}>
              <div className={styles.docsCardIcon}>📋</div>
              <h3>Медицинские документы</h3>
              <ul className={styles.docsList}>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  Медицинская справка о&nbsp;состоянии здоровья ребёнка от&nbsp;педиатра
                </li>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  Результаты анализа на&nbsp;энтеробиоз, яйцеглист
                </li>
              </ul>
            </div>

            <div className={`card animate-fade-in-up delay-3 ${styles.docsCard}`}>
              <div className={styles.docsCardIcon}>📄</div>
              <h3>Копии документов</h3>
              <ul className={styles.docsList}>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  Копия свидетельства о&nbsp;рождении ребёнка
                </li>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  Копия прививочного сертификата
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className={`section ${styles.ctaBanner}`} id="cta-banner">
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={`blob blob-orange ${styles.blobCta1}`} />
            <div className={`blob blob-teal ${styles.blobCta2}`} />
            <div className={styles.ctaContent}>
              <h2 className="animate-fade-in-up">
                Приходите на <span className="text-gradient">бесплатный</span> пробный&nbsp;день!
              </h2>
              <p className="animate-fade-in-up delay-1">
                Познакомьтесь с&nbsp;воспитателями, оцените группу и&nbsp;условия.
                Ваш ребёнок проведёт целый день с&nbsp;нами бесплатно.
              </p>
              <div className={`animate-fade-in-up delay-2 ${styles.ctaCtas}`}>
                <a
                  href="tel:+79500383731"
                  className="btn btn-primary"
                  id="cta-banner-call"
                >
                  Позвонить
                </a>
                <a
                  href="mailto:info@slavnyimalyi.spb.ru"
                  className="btn btn-secondary"
                  id="cta-banner-email"
                >
                  Написать на почту
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
