"use client";

import Image from "next/image";
import styles from "./Step1.module.css";
import { Icon, IconName } from "./Icon";
import s1 from "../assets/s-1.png";

export default function Step1() {
  const imageWidth = 640;
  const imageHeight = 440;

  return (
    <div className={styles.step}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.bubble}>
        <Image
          src={s1}
          alt={"name"}
          priority
          width={imageWidth}
          height={imageHeight}
          placeholder="empty"
          style={{ position: "relative", left: 24 }}
        />
        <div className={styles["text-wrapper"]}>
          <p className={styles["bubble-text"]} style={{ top: "44%" }}>
            {`Усім привіт! 🐾
          Мене звати Фібі, і у моїх хазяїнів є для вас чудова новина!`}
          </p>
        </div>
        <Icon
          className={styles["animated-arrow"]}
          iconName={IconName.DownArrowAlt}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
