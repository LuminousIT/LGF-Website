import styles from "./page.module.css";
import { LandingHero } from "./_components/LandingHero";
import CompanyInfo from "./_components/CompanyInfo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <LandingHero />
        </section>
        <section className={styles.companyInfo}>
          <CompanyInfo />
        </section>
      </main>
    </div>
  );
}
