import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Младшая группа (1,5–3 года)",
  description:
    "Младшая группа детского сада «Славный Малый»: мягкая адаптация, развитие речи, сенсорные игры и творчество для малышей от 1,5 до 3 лет в Приморском районе СПб.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/groups/young/" },
};

export default function YoungGroupPage() {
  return (
    <>
      <section className={styles.pageHero} id="young-hero">
        <div className={`blob blob-teal ${styles.blob1}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">🐣 Младшая группа</span>
          <h1 className="animate-fade-in-up delay-1">
            Первые шаги <span className="text-gradient">в большой мир</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Для малышей от&nbsp;1,5 до&nbsp;3 лет. Мягкая адаптация,
            индивидуальный подход и&nbsp;развитие через игру.
          </p>
        </div>
      </section>

      <section className="section" id="young-details">
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.mainContent}>
              <h2>О младшей группе</h2>
              <p>
                Первые месяцы в&nbsp;детском саду — это важнейший этап
                в&nbsp;жизни малыша. Мы делаем всё, чтобы адаптация прошла
                мягко и&nbsp;безболезненно. В&nbsp;младшей группе не&nbsp;более
                12&nbsp;детей — это позволяет уделить внимание каждому ребёнку.
              </p>

              <h3>Направления развития</h3>
              <div className={styles.directionsGrid}>
                {[
                  { icon: "🗣️", title: "Речь", desc: "Артикуляционная гимнастика, расширение словарного запаса, пересказ коротких историй" },
                  { icon: "🖐️", title: "Моторика", desc: "Пальчиковые игры, лепка, аппликации, работа с сыпучими материалами" },
                  { icon: "🎵", title: "Музыка", desc: "Ритмика, пение, игра на шумовых инструментах, музыкальные разминки" },
                  { icon: "🧸", title: "Социализация", desc: "Командные игры, навыки общения, умение делиться и ждать своей очереди" },
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
                  ["08:00", "Встреча детей, свободная игра"],
                  ["09:00", "Завтрак"],
                  ["09:30", "Развивающее занятие №1"],
                  ["10:15", "Второй завтрак, прогулка"],
                  ["12:00", "Обед"],
                  ["12:30", "Дневной сон"],
                  ["15:00", "Полдник"],
                  ["15:30", "Развивающее занятие №2"],
                  ["16:30", "Прогулка или свободная игра"],
                  ["18:00", "Ужин"],
                  ["18:30", "Творческая мастерская"],
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
                  <li><strong>Возраст:</strong> 1,5 – 3 года</li>
                  <li><strong>Размер группы:</strong> до 12 детей</li>
                  <li><strong>Воспитателей:</strong> 2 человека</li>
                  <li><strong>Питание:</strong> 5-разовое</li>
                  <li><strong>Режим:</strong> Пн–Пт, 8:00–20:00</li>
                </ul>
              </div>
              <div className={styles.sideCard}>
                <h3>Запишитесь</h3>
                <p>Попробуйте бесплатный пробный день для вашего малыша!</p>
                <a
                  href="tel:+79500383731"
                  className="btn btn-teal"
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
