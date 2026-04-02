import styles from "./page.module.css";

export const metadata = {
  title: "Наша команда",
  description:
    "Познакомьтесь с командой воспитателей и педагогов детского сада «Славный Малый» в Приморском районе СПб. Профессионалы с опытом и любовью к детям.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/team/" },
};

const team = [
  {
    emoji: "👩‍💼",
    name: "Юлия",
    role: "Директор",
    birthday: "15 июня",
    education: "Детский психолог",
    motto: "",
  },
  {
    emoji: "👩‍🏫",
    name: "Светлана",
    role: "Управляющая",
    birthday: "16 августа",
    education: "Высшее педагогическое образование. Лингвист, английский язык.",
    motto: "Воспитываем будущее, создаём настоящее!",
  },
  {
    emoji: "👩‍🎨",
    name: "Елизавета",
    role: "Воспитатель старшей группы",
    birthday: "",
    education: "Педагог дошкольного образования, на данный момент проходит переподготовку на логопеда-дефектолога.",
    motto: "",
  },
  {
    emoji: "👩‍🏫",
    name: "Наталья",
    role: "Воспитатель младшей группы",
    birthday: "",
    education: "Высшее педагогическое образование. Учитель начальных классов и воспитатель дошкольного учреждения.",
    motto: "Дети — это не сосуды, которые нужно заполнить, а факелы, которые нужно зажечь.",
  },
  {
    emoji: "🤝",
    name: "Олеся",
    role: "Помощник воспитателя",
    birthday: "",
    education: "Медицинский работник",
    motto: "",
  },
  {
    emoji: "👩‍🍳",
    name: "Светлана",
    role: "Повар",
    birthday: "17 июня",
    education: "Повар-кондитер",
    motto: "",
  },
  {
    emoji: "🗣️",
    name: "Елена Геннадьевна",
    role: "Логопед",
    birthday: "",
    education: "",
    motto: "",
  },
  {
    emoji: "🎵",
    name: "Елена",
    role: "Музыкальный руководитель",
    birthday: "",
    education: "",
    motto: "",
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
                className={`card animate-fade-in-up delay-${(i % 4) + 1} ${styles.teamCard}`}
              >
                <div className={styles.teamAvatar}>
                  <span>{member.emoji}</span>
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                {member.education && (
                  <p className={styles.teamEdu}>{member.education}</p>
                )}
                {member.birthday && (
                  <p className={styles.teamBirthday}>🎂 {member.birthday}</p>
                )}
                {member.motto && (
                  <blockquote className={styles.teamMotto}>
                    «{member.motto}»
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
