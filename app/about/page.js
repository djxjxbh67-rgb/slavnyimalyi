import styles from "./page.module.css";

export const metadata = {
  title: "О нас",
  description:
    "Узнайте больше о частном детском саде «Славный Малый» в Приморском районе СПб. Наши ценности, методики развития и команда воспитателей.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/about/" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero} id="about-hero">
        <div className={`blob blob-teal ${styles.blob1}`} />
        <div className={`blob blob-lavender ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">О нашем центре</span>
          <h1 className="animate-fade-in-up delay-1">
            Место, где дети <span className="text-gradient">счастливы</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Мы создали пространство, в&nbsp;котором каждый ребёнок раскрывает свой
            потенциал через игру, творчество и&nbsp;дружбу.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" id="about-mission">
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <h2>Наша миссия</h2>
              <p>
                «Славный Малый» — это не&nbsp;просто детский сад. Это&nbsp;сообщество 
                заботливых педагогов и&nbsp;семей, объединённых общей целью: дать 
                каждому ребёнку лучший старт в&nbsp;жизни.
              </p>
              <p>
                Мы верим, что в&nbsp;основе качественного образования лежат
                безопасность, уважение к&nbsp;личности ребёнка и&nbsp;радость
                от&nbsp;познания нового. Наши воспитатели не&nbsp;просто присматривают 
                за&nbsp;детьми — они становятся наставниками и&nbsp;друзьями.
              </p>
            </div>
            <div className={styles.colVisual}>
              <div className={styles.visualCard}>
                <span className={styles.bigEmoji}>🌱</span>
                <p className={styles.visualLabel}>Растём вместе</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" id="about-values">
        <div className="container">
          <h2 className="text-center">Наши ценности</h2>
          <p className={`text-center ${styles.sectionSub}`}>
            Принципы, на которых строится каждый день в «Славном Малом»
          </p>

          <div className={styles.valuesGrid}>
            {[
              {
                icon: "❤️",
                title: "Любовь и забота",
                desc: "Каждый ребёнок чувствует тепло и принятие. Мы создаём атмосферу, где дети не боятся ошибаться.",
              },
              {
                icon: "🧩",
                title: "Индивидуальный подход",
                desc: "Малые группы позволяют нам учитывать особенности, интересы и темп развития каждого малыша.",
              },
              {
                icon: "🔒",
                title: "Безопасность",
                desc: "Закрытая территория, видеонаблюдение, медицинский контроль и безопасные материалы.",
              },
              {
                icon: "🌍",
                title: "Открытость",
                desc: "Мы всегда на связи с родителями. Прозрачная коммуникация и регулярные отчёты о развитии ребёнка.",
              },
            ].map((val, i) => (
              <div key={i} className={`card ${styles.valueCard}`}>
                <span className={styles.valueIcon}>{val.icon}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="section" id="about-environment">
        <div className="container">
          <h2 className="text-center">Наше пространство</h2>
          <p className={`text-center ${styles.sectionSub}`}>
            Два уютных филиала в&nbsp;жилых комплексах на&nbsp;ул.&nbsp;Парашютная
          </p>

          <div className={styles.featuresList}>
            {[
              "Светлые просторные комнаты с панорамными окнами",
              "Оборудованные игровые зоны для разных возрастов",
              "Зона для творчества: рисование, лепка, аппликация",
              "Музыкальный зал для занятий и утренников",
              "Спальные комнаты с индивидуальными кроватками",
              "Современная кухня с 5-разовым сбалансированным питанием",
            ].map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
