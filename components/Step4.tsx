"use client";

import Image from "next/image";
import styles from "./Step1.module.css";
import heroStyles from "./HeroSection.module.css";
import final from "../assets/final.png";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_DATE } from "@/constants/wedding";
import { Icon, IconName } from "./Icon";
import { addToCalendar } from "@/utils/calendar";

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
      <div className={styles["dark-overlay"]} />

      <div className={styles.bubble} style={{ justifyContent: "end", gap: 0 }}>
        <div
          style={{
            backgroundColor: "#ffdfea",
            borderRadius: 16,
            padding: 8,
            fontSize: 11,
          }}
          onClick={addToCalendar}
        >
          {/* <div className={styles["text-wrapper"]} style={{ top: "10%", backgroundImage:'none' }}> */}
          <p
            className={styles["bubble-text"]}
            style={{
              // padding: 8,
              margin: "auto",
              position: "static",
              transform: "translate(0, 0)",
            }}
          >{`Чекаємо вас на святкування через:`}</p>
          {/* </div> */}
          <div
            className={heroStyles.timer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            <div
              style={{
                // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <span>{days.toString().padStart(2, "0")}</span>
              <small>днів</small>
            </div>
            <div
              style={{
                // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <span>{hours.toString().padStart(2, "0")}</span>
              <small>год</small>
            </div>
            <div
              style={{
                // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <span>{minutes.toString().padStart(2, "0")}</span>
              <small>хв</small>
            </div>
            <div
              style={{
                // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <span>{seconds.toString().padStart(2, "0")}</span>
              <small>сек</small>
            </div>
          </div>
        </div>
        <Image
          src={final}
          alt="we"
          style={{
            width: "100dvw",
            height: "70%",
            objectFit: "cover",
            objectPosition: "left",
          }}
          priority
        />
        <Icon
          style={{ position: "absolute", color: "white" }}
          className={styles["animated-arrow"]}
          iconName={IconName.DownArrowAlt}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
