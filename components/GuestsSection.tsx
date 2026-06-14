"use client";

import { guests } from "@/constants/guests";
import GuestCard from "./GuestCard";
import styles from "./GuestsSection.module.css";

export default function GuestsSection() {
  return (
    <div className={styles.list}>
      {guests.map((guest, index) => (
        <GuestCard key={index} {...guest} />
      ))}
    </div>
  );
}
