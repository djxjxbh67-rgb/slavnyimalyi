import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Средняя группа (3–4,5 года)",
  description:
    "Средняя группа детского сада «Славный Малый»: активное познание мира, творческое развитие, первые математические представления и социализация для детей 3-4,5 лет.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/groups/middle/" },
};

export default function MiddleGroupPage() {
  return (
    <>
      <section className={styles.pageHero} id="middle-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">🦊 Средняя группа</span>
          <h1 className="animate-fade-in-up delay-1">
            Активное познание <span className="text-gradient">каждый день</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Для любознательных детей от&nbsp;3 до&nbsp;4,5 лет. Развиваем 
            самостоятельность, творческие способности и&nbsp;связную речь.
          </p>
        </div>
      </section>

      <section className="section" id="middle-details">
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.mainContent}>
              <h2>О средней группе</h2>
              <p>
                Возраст почемучек — самый интересный и&nbsp;насыщенный период! 
                Мы поддерживаем естественное любопытство детей, предлагая увлекательные 
                игры и&nbsp;занятия. В&nbsp;средней группе не&nbsp;более
                15&nbsp;детей — мы учимся дружить, договариваться и&nbsp;работать в&nbsp;команде.
              </p>

              <h3>Направления развития</h3>
              <div className={styles.directionsGrid}>
                {[
                  { icon: "🗣️", title: "Речь", desc: "Развитие связной речи, пополнение словарного запаса, заучивание стихов" },
                  { icon: "📐", title: "Математика", desc: "Счёт в пределах 5-10, изучение геометрических форм и величин" },
                  { icon: "🎨", title: "Творчество", desc: "Рисование красками и карандашами, сложные аппликации, лепка" },
                  { icon: "🤝", title: "Социализация", desc: "Сюжетно-ролевые игры, навыки общения, вежливость" },
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
                  <li><strong>Возраст:</strong> 3 – 4,5 года</li>
                  <li><strong>Размер группы:</strong> до 15 детей</li>
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
