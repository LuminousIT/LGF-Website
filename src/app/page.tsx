"use client";
import styles from "./page.module.css";
import { LandingHero } from "./_components/LandingHero";
import CompanyInfo from "./_components/CompanyInfo";
import CompanyDetails from "./_components/CompanyDetails";

import { Projects } from "./_components/Projects";
// import { SocialsDetails } from "./_components/SocialsDetails";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <LandingHero />
        </section>
        <section className={styles.sessionInfo}>
          <CompanyInfo />
        </section>
        <section className={styles.sessionInfo}>
          <CompanyDetails />
        </section>
        <section className={styles.sessionInfo}>
          <Projects />
        </section>
        <section>{/* <SocialsDetails /> */}</section>
      </main>
    </div>
  );
}
