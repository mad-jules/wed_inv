"use client";

import Step1 from "@/components/Step1";
import HeroSection from "../components/HeroSection";
// import GuestsSection from "../components/GuestsSection";
import styles from "./page.module.css";
import { locations } from "@/constants/locations";
import dynamic from "next/dynamic";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

const LocationSection = dynamic(() => import("@/components/LocationSection"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section id="step-1" className={styles.section} style={{ padding: 0 }}>
        <Step1 />
      </section>
      <section id="step-2" className={styles.section} style={{ padding: 0 }}>
        <Step2 />
      </section>
      <section id="hero" className={styles.section} style={{ padding: 0 }}>
        <Step3 />
      </section>
      <section id="hero" className={styles.section} style={{ padding: 0 }}>
        <HeroSection />
      </section>
      {/* <section
        id="guests"
        className={styles.section}
        style={{ height: "auto" }}
      >
        <GuestsSection />
      </section> */}
      <section id="locations" className={styles.section}>
        <LocationSection locations={locations} />
      </section>
    </main>
  );
}
