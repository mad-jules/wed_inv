"use client";

import styles from "./Step1.module.css";

export default function Step2() {
  return (
    <div className={styles.step}>
      <div
        className={styles.background}
        style={{
          backgroundImage: 'url("/assets/bg-2.png")',
        }}
      />
      <div className={styles.bubble} style={{ right: 0 }}>
        <p className={styles["bubble-text"]} style={{ marginBottom: 24 }}>
          {`Яка?
          Ти з'їжджаєш? 👀`}
        </p>
        <img
          src={"/assets/s-2.png"}
          alt={"name"}
          style={{ width: "100%", aspectRatio: 480 / 523 }}
        />
      </div>
    </div>
  );
}
