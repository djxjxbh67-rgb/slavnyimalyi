import styles from "./page.module.css";

export const metadata = {
  title: "Услуги центра развития",
  description:
    "Дополнительные услуги детского центра «Славный Малый»: логопед, английский язык, подготовка к школе. Индивидуальные и групповые занятия в Приморском районе СПб.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/services/" },
};

const services = [
  {
    id: "logoped",
    emoji: "🗣️",
    title: "Логопед",
    color: "teal",
    description:
      "Коррекция речи у дошкольников: работа со звукопроизношением, заиканием и общим недоразвитием речи (ОНР). Опытный специалист с\u00A0более чем 10-летним стажем. Индивидуальный подход и\u00A0консультации для родителей.",
    features: [
      "Диагностика и составление программы",
      "Коррекция звукопроизношения",
      "Работа с ОНР и заиканием",
      "Консультации для родителей",
      "Индивидуальные занятия по 30 минут",
    ],
    prices: [
      { name: "Диагностика", price: "2 000 ₽" },
      {
        name: "Индивидуальное занятие (для воспитанников)",
        price: "1 500 ₽ / 30 мин",
      },
    ],
  },
  {
    id: "english",
    emoji: "🇬🇧",
    title: "Английский язык",
    color: "orange",
    description:
      "Обучение английскому языку для детей от\u00A05 до\u00A015 лет. Игровая форма для малышей — песни, стихи, базовая лексика. Для школьников 7+ — чтение, грамматика и\u00A0разговорная практика. Учебные пособия Cambridge и\u00A0Oxford.",
    features: [
      "Игровая методика для дошкольников",
      "Чтение и грамматика для школьников",
      "Пособия Cambridge и Oxford",
      "Групповые и индивидуальные форматы",
      "Занятия 2 раза в неделю",
    ],
    prices: [
      { name: "Групповой (4 занятия)", price: "4 800 ₽/мес" },
      { name: "Групповой (8 занятий)", price: "8 300 ₽/мес" },
      { name: "Индивидуальный (4 занятия)", price: "7 500 ₽/мес" },
      { name: "Индивидуальный (8 занятий)", price: "12 700 ₽/мес" },
    ],
  },
  {
    id: "school-prep",
    emoji: "🎓",
    title: "Скоро в школу",
    color: "sun",
    description:
      "Комплексная подготовка к\u00A0школе: чтение, грамота, математика. Формируем навыки будущего первоклассника в\u00A0дружелюбной атмосфере. Занятия по будням (2\u00A0раза в\u00A0неделю).",
    features: [
      "Обучение чтению и грамоте",
      "Основы математики и счёта",
      "Развитие внимания и памяти",
      "Подготовка руки к письму",
      "Занятия по будням",
    ],
    prices: [
      { name: "Групповой (4 занятия)", price: "5 000 ₽/мес" },
      { name: "Групповой (8 занятий)", price: "8 500 ₽/мес" },
      { name: "Индивидуальный (4 занятия)", price: "9 000 ₽/мес" },
      { name: "Индивидуальный (8 занятий)", price: "15 000 ₽/мес" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero} id="services-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className={`blob blob-lavender ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">✨ Центр развития</span>
          <h1 className="animate-fade-in-up delay-1">
            Дополнительные <span className="text-gradient">услуги</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Индивидуальные и&nbsp;групповые занятия для всестороннего развития
            вашего ребёнка — от&nbsp;коррекции речи до&nbsp;подготовки к&nbsp;школе
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services-list">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((service, idx) => (
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

                    <h3>Что включено</h3>
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
                    <h3>Стоимость</h3>
                    <div className={styles.priceRows}>
                      {service.prices.map((p, i) => (
                        <div key={i} className={styles.priceRow}>
                          <span className={styles.priceName}>{p.name}</span>
                          <span className={styles.priceDots} />
                          <span className={styles.priceValue}>{p.price}</span>
                        </div>
                      ))}
                    </div>
                    <a href="tel:+79500383731" className="btn btn-primary">
                      Записаться
                    </a>
                  </div>
                </div>

                {idx < services.length - 1 && (
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
            Не знаете, что <span className="text-gradient">выбрать?</span>
          </h2>
          <p
            className="animate-fade-in-up delay-1"
            style={{ maxWidth: 520, margin: "16px auto 32px", color: "var(--color-text-muted)" }}
          >
            Позвоните нам — мы подберём программу, подходящую именно вашему
            ребёнку, и&nbsp;расскажем о&nbsp;расписании и&nbsp;доступных местах.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79500383731" className="btn btn-primary animate-fade-in-up delay-2">
              Позвонить
            </a>
            <a href="mailto:info@slavnyimalyi.spb.ru" className="btn btn-secondary animate-fade-in-up delay-3">
              Написать на почту
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
