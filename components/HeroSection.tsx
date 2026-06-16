"use client";

import styles from "./HeroSection.module.css";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_DATE, WEDDING_DATE_FORMATTED } from "@/constants/wedding";

export default function HeroSection() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  return (
    <div className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/* <p className={styles.subtitle}>Весільне запрошення</p> */}
        {/* <h1 className={styles.title} style={{whiteSpace: 'nowrap'}}>{`Юля і Максим`}</h1> */}
        <p className={styles.description}>
          {`Будемо дуже раді розділити цей особливий день разом із вами. Запрошуємо на наше весілля! ❤️`}
        </p>
        <p className={styles.date}>{WEDDING_DATE_FORMATTED}</p>
        <div className={styles.timer}>
          <div>
            <span>{days.toString().padStart(2, "0")}</span>
            <small>днів</small>
          </div>
          <div>
            <span>{hours.toString().padStart(2, "0")}</span>
            <small>год</small>
          </div>
          <div>
            <span>{minutes.toString().padStart(2, "0")}</span>
            <small>хв</small>
          </div>
          <div>
            <span>{seconds.toString().padStart(2, "0")}</span>
            <small>сек</small>
          </div>
        </div>
      </div>
    </div>
  );
}
