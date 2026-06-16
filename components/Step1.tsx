"use client";

import Image from "next/image";
import styles from "./Step1.module.css";

export default function Step1() {
  const imageWidth = 640;
  const imageHeight = 480;

  return (
    <div className={styles.step}>
      <div className={styles.background} />
      <div className={styles.bubble}>
        <p className={styles["bubble-text"]}>
          {`Усім привіт! 🐾
          Мене звати Фібі, і у моїх хазяїнів є для вас чудова новина!`}
        </p>
        <Image
          src={"/assets/s-1.png"}
          alt={"name"}
          width={imageWidth}
          height={imageHeight}
          style={{ position: "relative", left: 24 }}
        />
      </div>
    </div>
  );
}
