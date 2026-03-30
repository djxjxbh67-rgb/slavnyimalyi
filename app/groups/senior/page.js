import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Старшая группа (3–7 лет)",
  description:
    "Старшая группа детского сада «Славный Малый»: подготовка к школе, английский язык, логика и творчество для детей от 3 до 7 лет. Приморский район СПб.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/groups/senior/" },
};

export default function SeniorGroupPage() {
  return (
    <>
      <section className={styles.pageHero} id="senior-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">🦁 Старшая группа</span>
          <h1 className="animate-fade-in-up delay-1">
            Готовимся к&nbsp;школе <span className="text-gradient">с радостью</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Для детей от&nbsp;3 до&nbsp;7 лет. Развитие интеллекта,
            творчества и&nbsp;социальных навыков в&nbsp;дружной компании.
          </p>
        </div>
      </section>

      <section className="section" id="senior-details">
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.mainContent}>
              <h2>О старшей группе</h2>
              <p>
                Старшая группа «Славного Малого» — пространство для
                формирования будущих первоклассников. Здесь дети учатся читать,
                считать и&nbsp;писать, одновременно развивая критическое
                мышление и&nbsp;навыки работы в&nbsp;команде.
              </p>

              <h3>Направления развития</h3>
              <div className={styles.directionsGrid}>
                {[
                  { icon: "📖", title: "Подготовка к школе", desc: "Обучение чтению, письму и счёту по современным игровым методикам" },
                  { icon: "🧠", title: "Логика", desc: "Шахматы, головоломки, развивающие настольные игры, задачи на внимание" },
                  { icon: "🌐", title: "Английский язык", desc: "Основы английского через песни, игры и интерактивные занятия" },
                  { icon: "🎭", title: "Творчество", desc: "Театральная студия, рисование, конструирование и проектная деятельность" },
                ].map((d, i) => (
                  <div key={i} className={`card ${styles.dirCard}`}>
                    <span className={styles.dirIcon}>{d.icon}</span>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                ))}
              </div>

              <h3>Распорядок дня</h3>
              <div className={styles.schedule}>
                {[
                  ["08:00", "Встреча детей, утренняя зарядка"],
                  ["09:00", "Завтрак"],
                  ["09:30", "Занятие №1 (подготовка к школе / английский)"],
                  ["10:30", "Второй завтрак"],
                  ["10:45", "Занятие №2 (логика / творчество)"],
                  ["11:30", "Прогулка"],
                  ["12:30", "Обед"],
                  ["13:00", "Тихий час / чтение"],
                  ["15:00", "Полдник"],
                  ["15:30", "Занятие №3 (музыка / спорт / театр)"],
                  ["16:30", "Вторая прогулка или свободная игра"],
                  ["18:00", "Ужин"],
                  ["18:30", "Настольные игры, конструктор"],
                  ["20:00", "Завершение дня"],
                ].map(([time, activity], i) => (
                  <div key={i} className={styles.scheduleRow}>
                    <span className={styles.scheduleTime}>{time}</span>
                    <span className={styles.scheduleDot} />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3>Ключевые факты</h3>
                <ul className={styles.factList}>
                  <li><strong>Возраст:</strong> 3 – 7 лет</li>
                  <li><strong>Размер группы:</strong> до 15 детей</li>
                  <li><strong>Воспитателей:</strong> 2 человека</li>
                  <li><strong>Питание:</strong> 5-разовое</li>
                  <li><strong>Режим:</strong> Пн–Пт, 8:00–20:00</li>
                  <li><strong>Суббота:</strong> 9:00–18:00 (доп.)</li>
                </ul>
              </div>
              <div className={styles.sideCard}>
                <h3>Запишитесь</h3>
                <p>Запишите вашего ребёнка на бесплатный пробный день!</p>
                <a
                  href="tel:+79500383731"
                  className="btn btn-primary"
                >
                  Позвонить
                </a>
              </div>
              <Link href="/pricing/" className="btn btn-secondary" style={{ width: "100%" }}>
                Посмотреть цены
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
