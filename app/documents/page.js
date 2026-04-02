import styles from "./page.module.css";

export const metadata = {
  title: "Пакет документов",
  description:
    "Список документов для поступления в частный детский сад «Славный Малый»: медицинская справка, анализы, свидетельство о рождении, прививочный сертификат.",
  alternates: { canonical: "https://slavnyimalyi.spb.ru/documents/" },
};

export default function DocumentsPage() {
  return (
    <>
      <section className={styles.pageHero} id="documents-hero">
        <div className={`blob blob-yellow ${styles.blob1}`} />
        <div className={`blob blob-orange ${styles.blob2}`} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge animate-fade-in-up">📋 Документы</span>
          <h1 className="animate-fade-in-up delay-1">
            Пакет <span className="text-gradient">документов</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroSub}`}>
            Для поступления в&nbsp;наш детский сад вам необходимо собрать следующие документы
          </p>
        </div>
      </section>

      <section className="section" id="documents-list">
        <div className="container">
          <div className={styles.docsGrid}>
            <div className={`card animate-fade-in-up delay-1 ${styles.docsCard}`}>
              <div className={styles.docsCardIcon}>🏥</div>
              <h2>Медицинские документы</h2>
              <p className={styles.docsCardDesc}>
                Оригиналы медицинских справок, необходимых для&nbsp;безопасного пребывания ребёнка в&nbsp;коллективе.
              </p>
              <ul className={styles.docsList}>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  <span>Медицинская справка о&nbsp;состоянии здоровья ребёнка от&nbsp;педиатра</span>
                </li>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  <span>Результаты анализа на&nbsp;энтеробиоз, яйцеглист</span>
                </li>
              </ul>
            </div>

            <div className={`card animate-fade-in-up delay-2 ${styles.docsCard}`}>
              <div className={styles.docsCardIcon}>📄</div>
              <h2>Копии документов</h2>
              <p className={styles.docsCardDesc}>
                Копии личных документов ребёнка для&nbsp;оформления договора.
              </p>
              <ul className={styles.docsList}>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  <span>Копия свидетельства о&nbsp;рождении ребёнка</span>
                </li>
                <li>
                  <span className={styles.docsCheck}>✓</span>
                  <span>Копия прививочного сертификата</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
