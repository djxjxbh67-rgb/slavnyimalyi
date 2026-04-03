import Image from "next/image";
import styles from "./page.module.css";
import teamData from "../../content/Команда.json";

export const metadata = {
  title: "Наша команда",
  description:
    "Познакомьтесь с командой воспитателей и педагогов детского сада «Славный Малый» в Приморском районе СПб. Профессионалы с опытом и любовью к детям.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/team/" },
};

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
            {teamData.map((member, i) => (
              <div
                key={i}
                className={`card animate-fade-in-up delay-${(i % 4) + 1} ${styles.teamCard}`}
              >
                <div className={styles.teamAvatar}>
                  {member.photo ? (
                    <Image
                      src={`/images/team/${member.photo}`}
                      alt={member.name}
                      width={88}
                      height={88}
                      className={styles.teamPhoto}
                    />
                  ) : (
                    <span>{member.emoji}</span>
                  )}
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
