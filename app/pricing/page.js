import styles from "./page.module.css";

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
          <span className="badge animate-fade-in-up">💰 Цены</span>
          <h1 className="animate-fade-in-up delay-1">
            Прозрачные <span className="text-gradient">тарифы</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Все включено: 5-разовое питание, развивающие занятия, прогулки
            и&nbsp;творческие мастерские. Без скрытых доплат.
          </p>
        </div>
      </section>

      <section className="section" id="pricing-plans">
        <div className="container">
          <div className={styles.plansGrid}>
            {/* Полный день */}
            <div className={`${styles.planCard} animate-fade-in-up`}>
              <div className={styles.planHeader}>
                <span className={styles.planEmoji}>☀️</span>
                <h2>Полный день</h2>
                <p className={styles.planTime}>8:00 – 20:00</p>
              </div>
              <div className={styles.planBody}>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>45 000</span>
                  <span className={styles.pricePer}>₽/мес</span>
                </div>
                <ul className={styles.featureList}>
                  <li className={styles.included}>5-разовое питание</li>
                  <li className={styles.included}>Все развивающие занятия</li>
                  <li className={styles.included}>Прогулки 2 раза в день</li>
                  <li className={styles.included}>Творческие мастерские</li>
                  <li className={styles.included}>Дневной сон</li>
                  <li className={styles.included}>Фото- и видеоотчёты</li>
                </ul>
                <a
                  href="tel:+79500383731"
                  className="btn btn-primary"
                >
                  Записаться
                </a>
              </div>
            </div>

            {/* Полдня */}
            <div className={`${styles.planCard} ${styles.featured} animate-fade-in-up delay-1`}>
              <div className={styles.featuredBadge}>Популярный</div>
              <div className={styles.planHeader}>
                <span className={styles.planEmoji}>🌤️</span>
                <h2>Полдня</h2>
                <p className={styles.planTime}>8:00 – 13:00</p>
              </div>
              <div className={styles.planBody}>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>30 000</span>
                  <span className={styles.pricePer}>₽/мес</span>
                </div>
                <ul className={styles.featureList}>
                  <li className={styles.included}>3-разовое питание</li>
                  <li className={styles.included}>Все утренние занятия</li>
                  <li className={styles.included}>Прогулка</li>
                  <li className={styles.included}>Творческие мастерские</li>
                  <li className={styles.excluded}>Без дневного сна</li>
                  <li className={styles.included}>Фото- и видеоотчёты</li>
                </ul>
                <a
                  href="tel:+79500383731"
                  className="btn btn-primary"
                >
                  Записаться
                </a>
              </div>
            </div>

            {/* Суббота */}
            <div className={`${styles.planCard} animate-fade-in-up delay-2`}>
              <div className={styles.planHeader}>
                <span className={styles.planEmoji}>🌈</span>
                <h2>Рабочая суббота</h2>
                <p className={styles.planTime}>9:00 – 18:00</p>
              </div>
              <div className={styles.planBody}>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>3 000</span>
                  <span className={styles.pricePer}>₽/день</span>
                </div>
                <ul className={styles.featureList}>
                  <li className={styles.included}>3-разовое питание</li>
                  <li className={styles.included}>Развлекательная программа</li>
                  <li className={styles.included}>Прогулка</li>
                  <li className={styles.included}>Творческие занятия</li>
                  <li className={styles.included}>Дневной отдых</li>
                  <li className={styles.included}>Для всех возрастов</li>
                </ul>
                <a
                  href="tel:+79500383731"
                  className="btn btn-teal"
                >
                  Записаться
                </a>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className={styles.infoBlock}>
            <h2 className="text-center">Важная информация</h2>
            <div className={styles.infoGrid}>
              <div className={`glass-card ${styles.infoCard}`}>
                <span className={styles.infoIcon}>🎁</span>
                <h3>Пробный день — бесплатно</h3>
                <p>
                  Приведите ребёнка на&nbsp;целый день совершенно бесплатно.
                  Познакомьтесь с&nbsp;воспитателями и&nbsp;оцените условия.
                </p>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <span className={styles.infoIcon}>👨‍👩‍👧‍👦</span>
                <h3>Скидка для второго ребёнка</h3>
                <p>
                  Если оба ребёнка посещают наш сад, второму предоставляется
                  скидка 10% от&nbsp;стоимости тарифа.
                </p>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <span className={styles.infoIcon}>📋</span>
                <h3>Перерасчёт за пропуски</h3>
                <p>
                  При отсутствии ребёнка по болезни более 5&nbsp;дней мы
                  делаем перерасчёт питания за&nbsp;пропущенные дни.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
