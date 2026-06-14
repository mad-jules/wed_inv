"use client";
import HeroSection from "../components/HeroSection";
import GuestsSection from "../components/GuestsSection";
import styles from "./page.module.css";
import { locations } from "@/constants/locations";
import dynamic from "next/dynamic";

const LocationSection = dynamic(() => import("@/components/LocationSection"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section id="hero" className={styles.section} style={{ padding: 0 }}>
        <HeroSection />
      </section>
      <section
        id="guests"
        className={styles.section}
        style={{ height: "auto" }}
      >
        <GuestsSection />
      </section>
      <section id="locations" className={styles.section}>
        <LocationSection locations={locations} />
      </section>
    </main>
  );
}
