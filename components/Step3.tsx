"use client";

import styles from "./Step1.module.css";

export default function Step3() {
  return (
    <div className={styles.step}>
      <div
        className={styles.background}
        style={{
          backgroundImage: 'url("/assets/bg-3.png")',
        }}
      />
      <div className={styles.bubble} style={{ right: 0 }}>
        <p className={styles["bubble-text"]}>
          {`Баксік, знову ти за своє!
          😄 Ні!
          Ми одружуємося!`}
        </p>
        <img
          src={"/assets/s-3.png"}
          alt="we"
          style={{ width: "100%", aspectRatio: 375 / 421 }}
        />
      </div>
    </div>
  );
}
