import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Группы",
  description:
    "Группы детского сада «Славный Малый»: младшая (1,5–3 года) и старшая (3–7 лет). Узнайте о программе развития и занятиях.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/groups/" },
};

export default function GroupsPage() {
  return (
    <>
      <section className={styles.pageHero} id="groups-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className={`blob blob-teal ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">🎒 Наши группы</span>
          <h1 className="animate-fade-in-up delay-1">
            Две группы — два <span className="text-gradient">мира</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Программа занятий адаптирована под каждый возраст, чтобы дети
            развивались в&nbsp;комфортном темпе
          </p>
        </div>
      </section>

      <section className="section" id="groups-list">
        <div className="container">
          <div className={styles.groupsGrid}>
            {/* Младшая */}
            <div className={`${styles.groupCard} animate-fade-in-up`}>
              <div className={`${styles.groupHeader} ${styles.headerYoung}`}>
                <span className={styles.emoji}>🐣</span>
                <div>
                  <h2>Младшая группа</h2>
                  <span className={styles.ageTag}>1,5 – 3 года</span>
                </div>
              </div>
              <div className={styles.groupBody}>
                <p>
                  Период мягкой адаптации к&nbsp;детскому саду. Развиваем речь,
                  мелкую моторику, сенсорное восприятие и&nbsp;навыки
                  самообслуживания через игру.
                </p>
                <h3>Что входит в программу:</h3>
                <ul className={styles.programList}>
                  <li>Развитие речи и артикуляционная гимнастика</li>
                  <li>Музыкальные и ритмические занятия</li>
                  <li>Творческие мастерские (рисование, лепка)</li>
                  <li>Сенсорные и пальчиковые игры</li>
                  <li>Физкультура и подвижные игры</li>
                  <li>Окружающий мир и природа</li>
                </ul>
                <Link href="/groups/young/" className="btn btn-teal">
                  Подробнее о младшей группе
                </Link>
              </div>
            </div>

            {/* Старшая */}
            <div className={`${styles.groupCard} animate-fade-in-up delay-2`}>
              <div className={`${styles.groupHeader} ${styles.headerSenior}`}>
                <span className={styles.emoji}>🦁</span>
                <div>
                  <h2>Старшая группа</h2>
                  <span className={styles.ageTag}>3 – 7 лет</span>
                </div>
              </div>
              <div className={styles.groupBody}>
                <p>
                  Подготовка к&nbsp;школе в&nbsp;дружном коллективе. Развиваем
                  логическое мышление, социальные навыки, чтение
                  и&nbsp;элементарную математику.
                </p>
                <h3>Что входит в программу:</h3>
                <ul className={styles.programList}>
                  <li>Подготовка к школе (чтение, счёт, письмо)</li>
                  <li>Логика и развивающие игры</li>
                  <li>Английский язык в игровой форме</li>
                  <li>Творчество и конструирование</li>
                  <li>Физкультура и хореография</li>
                  <li>Социальные навыки и командная работа</li>
                </ul>
                <Link href="/groups/senior/" className="btn btn-primary">
                  Подробнее о старшей группе
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
