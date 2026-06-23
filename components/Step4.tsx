"use client";

import Image from "next/image";
import styles from "./Step1.module.css";
import heroStyles from "./HeroSection.module.css";
import final from "../assets/final.png";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_DATE } from "@/constants/wedding";

export default function Step4() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  return (
    <div className={styles.step}>
      <div
        className={styles.background}
        // style={{
        //   backgroundImage: 'url("/assets/bg-3.png")',
        // }}
      />
      <div className={styles.overlay} />

      <div className={styles.bubble} style={{ justifyContent: "end", gap: 50 }}>
        <div
          style={{
            backgroundColor: "#ffdfea",
            borderRadius: 16,
          }}
        >
          {/* <div className={styles["text-wrapper"]} style={{ top: "10%", backgroundImage:'none' }}> */}
          <p
            className={styles["bubble-text"]}
            style={{
              padding: 8,
              position: "static",
              transform: "translate(0, 0)",
            }}
          >{`Чекаємо вас на святкування через:`}</p>
          {/* </div> */}
          <div className={heroStyles.timer}>
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
        <Image
          src={final}
          alt="we"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
