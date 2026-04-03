import styles from "./page.module.css";
import content from "../../content/Контакты.json";

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
          <span className="badge animate-fade-in-up">{content.hero.badge}</span>
          <h1 className="animate-fade-in-up delay-1">
            {content.hero.title_main} <span className="text-gradient">{content.hero.title_gradient}</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="section" id="contacts-info">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.cardsCol}>
              {content.contacts.map((contact, i) => (
                <div key={i} className={`card ${styles.contactCard}`}>
                  <span className={styles.cardIcon}>{contact.icon}</span>
                  <div>
                    <h3>{contact.title}</h3>
                    {contact.link ? (
                      <a href={contact.link} className={styles.contactLink} target={contact.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {contact.link_text}
                      </a>
                    ) : (
                      <p className={styles.address}>
                        {contact.multiline_text.map((line, j) => (
                          <span key={j}>{line}<br /></span>
                        ))}
                      </p>
                    )}
                    {contact.note && <p className={styles.contactNote}>{contact.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className={styles.mapCol}>
              <div className={styles.mapWrapper}>
                <iframe
                  src={content.map.url}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта расположения детского сада Славный Малый"
                  loading="lazy"
                  style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <p className={styles.mapCaption}>
                {content.map.caption}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
