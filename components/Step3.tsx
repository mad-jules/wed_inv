"use client";

import Image from "next/image";
import styles from "./Step1.module.css";
import s3 from "../assets/s-3.png";
import { Icon, IconName } from "./Icon";

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

      <div className={styles.bubble} style={{ justifyContent: "end", gap: 0 }}>
        <div
          className={styles["text-wrapper"]}
          style={{
            //  top: "10%" , height:'-webkit-fill-available',
            backgroundPositionY: "2%",
          }}
        >
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
        <Icon
          style={{
            position: "absolute",
            color: "black",
          }}
          className={styles["animated-arrow"]}
          iconName={IconName.DownArrowAlt}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
