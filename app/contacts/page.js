import styles from "./page.module.css";

export const metadata = {
  title: "Контакты",
  description:
    "Контактная информация частного детского сада «Славный Малый» в Приморском районе СПб. Адреса: ул. Парашютная 23/1 и 23/2. Запись по телефону.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/contacts/" },
};

export default function ContactsPage() {
  return (
    <>
      <section className={styles.pageHero} id="contacts-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className={`blob blob-teal ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">📍 Контакты</span>
          <h1 className="animate-fade-in-up delay-1">
            Свяжитесь <span className="text-gradient">с нами</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Мы всегда на связи и&nbsp;рады ответить на&nbsp;ваши вопросы.
            Приходите знакомиться!
          </p>
        </div>
      </section>

      <section className="section" id="contacts-info">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Cards */}
            <div className={styles.cardsCol}>
              <div className={`card ${styles.contactCard}`}>
                <span className={styles.cardIcon}>📞</span>
                <div>
                  <h3>Телефон</h3>
                  <a href="tel:+79500383731" className={styles.contactLink}>
                    +7 (950) 038-37-31
                  </a>
                  <p className={styles.contactNote}>
                    Звоните с&nbsp;8:00 до&nbsp;20:00
                  </p>
                </div>
              </div>

              <div className={`card ${styles.contactCard}`}>
                <span className={styles.cardIcon}>✉️</span>
                <div>
                  <h3>Электронная почта</h3>
                  <a
                    href="mailto:info@slavnyimalyi.spb.ru"
                    className={styles.contactLink}
                  >
                    info@slavnyimalyi.spb.ru
                  </a>
                  <p className={styles.contactNote}>
                    Ответим в&nbsp;течение рабочего дня
                  </p>
                </div>
              </div>

              <div className={`card ${styles.contactCard}`}>
                <span className={styles.cardIcon}>💬</span>
                <div>
                  <h3>Мессенджер Max</h3>
                  <a
                    href="https://max.ru/"
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Написать в Max
                  </a>
                  <p className={styles.contactNote}>
                    Быстрый способ связи
                  </p>
                </div>
              </div>

              <div className={`card ${styles.contactCard}`}>
                <span className={styles.cardIcon}>🏠</span>
                <div>
                  <h3>Филиал №1</h3>
                  <p className={styles.address}>
                    Санкт-Петербург,<br />
                    ул.&nbsp;Парашютная, д.&nbsp;23, к.&nbsp;1
                  </p>
                  <p className={styles.contactNote}>
                    ЖК «Приморский квартал»
                  </p>
                </div>
              </div>

              <div className={`card ${styles.contactCard}`}>
                <span className={styles.cardIcon}>🏡</span>
                <div>
                  <h3>Филиал №2</h3>
                  <p className={styles.address}>
                    Санкт-Петербург,<br />
                    ул.&nbsp;Парашютная, д.&nbsp;23, к.&nbsp;2
                  </p>
                  <p className={styles.contactNote}>
                    ЖК «Приморский квартал»
                  </p>
                </div>
              </div>

              <div className={`card ${styles.contactCard}`}>
                <span className={styles.cardIcon}>🕒</span>
                <div>
                  <h3>Часы работы</h3>
                  <p className={styles.address}>
                    Пн–Пт: 8:00 – 20:00<br />
                    Сб: 9:00 – 18:00 (доп.&nbsp;услуга)
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className={styles.mapCol}>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%20%D0%9F%D0%B0%D1%80%D0%B0%D1%88%D1%8E%D1%82%D0%BD%D0%B0%D1%8F%2023&z=16&l=map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта расположения детского сада Славный Малый"
                  loading="lazy"
                  style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <p className={styles.mapCaption}>
                🚇 Ближайшие станции метро: Комендантский проспект, Пионерская
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
