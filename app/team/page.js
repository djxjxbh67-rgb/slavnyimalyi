import styles from "./page.module.css";

export const metadata = {
  title: "Наша команда",
  description:
    "Познакомьтесь с командой воспитателей и педагогов детского сада «Славный Малый» в Приморском районе СПб. Профессионалы с опытом и любовью к детям.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/team/" },
};

const team = [
  {
    emoji: "👩‍🏫",
    name: "Анна Сергеевна",
    role: "Старший воспитатель",
    bio: "Педагогический стаж 12 лет. Специалист по раннему развитию и мягкой адаптации малышей. Находит подход к каждому ребёнку и помогает семьям пройти период адаптации максимально комфортно.",
  },
  {
    emoji: "👩‍🎨",
    name: "Елена Викторовна",
    role: "Воспитатель старшей группы",
    bio: "Высшее педагогическое образование. Увлекает детей творчеством и проектной деятельностью. Организует тематические недели, которые дети обожают.",
  },
  {
    emoji: "👨‍🔬",
    name: "Мария Александровна",
    role: "Логопед-дефектолог",
    bio: "Работает с детьми от 2 лет. Проводит индивидуальные и групповые занятия по развитию речи. Помогает малышам заговорить чисто и уверенно.",
  },
  {
    emoji: "👩‍🎤",
    name: "Ольга Дмитриевна",
    role: "Музыкальный руководитель",
    bio: "Проводит ритмику, музыкальные занятия и готовит праздничные утренники для всех групп. Дети с нетерпением ждут каждого её урока.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className={styles.pageHero} id="team-hero">
        <div className={`blob blob-orange ${styles.blob1}`} />
        <div className={`blob blob-lavender ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">👩‍🏫 Команда</span>
          <h1 className="animate-fade-in-up delay-1">
            Наша <span className="text-gradient">команда</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Профессиональные и&nbsp;любящие педагоги — сердце нашего детского сада.
            Каждый из&nbsp;них прошёл строгий отбор и&nbsp;разделяет наши ценности.
          </p>
        </div>
      </section>

      <section className="section" id="team-grid">
        <div className="container">
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div
                key={i}
                className={`card animate-fade-in-up delay-${i + 1} ${styles.teamCard}`}
              >
                <div className={styles.teamAvatar}>
                  <span>{member.emoji}</span>
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
