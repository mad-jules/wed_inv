"use client";

import Image from "next/image";
import styles from "./GuestCard.module.css";

interface GuestCardProps {
  name: string;
  photo: string;
}

export default function GuestCard({ name, photo }: GuestCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={photo}
        alt={name}
        width={200}
        height={200}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
