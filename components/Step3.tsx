"use client";

import Image from "next/image";
import styles from "./Step1.module.css";
import s3 from "../assets/s-3.png";

export default function Step3() {
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
        <div className={styles["text-wrapper"]} style={{ top: "10%" }}>
          <p
            className={styles["bubble-text"]}
            style={{ top: "50%" }}
          >{`Ми одружуємося! 💍`}</p>
        </div>
        <Image
          src={s3}
          alt="we"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
