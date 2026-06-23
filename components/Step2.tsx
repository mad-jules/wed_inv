"use client";

import styles from "./Step1.module.css";
import s2 from "../assets/s-2.png";
import Image from "next/image";
import { Icon, IconName } from "./Icon";

export default function Step2() {
  return (
    <div className={styles.step}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.bubble} style={{}}>
        <Image
          alt="bax"
          src={s2}
          priority
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
        <div className={styles["text-wrapper"]}>
          <p className={styles["bubble-text"]} style={{}}>
            {/* {`Га? 👀`} */}
            {`Не тягніть за хвіст!`}
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
