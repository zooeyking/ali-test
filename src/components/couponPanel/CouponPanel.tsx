import React from "react";
import Image from "next/image";
import type { TCoupon } from "@/lib/data";
import styles from "./couponPanel.module.css";
import CountDown from "../countDown/CountDown";
import TimeRange from "../timeRange/TimeRange";

const CouponPanel: React.FC<TCoupon> = (props) => {
  const { time, restTime, status, money, title, description } = props;

  return (
    <div className={styles.container}>
      <div className={styles.bgImage}>
        <Image
          alt="coupon banner"
          priority={true}
          fill
          src="https://gw.alicdn.com/imgextra/i1/O1CN01SzXzZl1U46EOknhoB_!!6000000002463-2-tps-1380-362.png"
        />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.moneyWrapper}>
          {parseFloat(money.toFixed(2))}
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.textContainer}>
            <div className={styles.descTitle}>{title}</div>
            <div className={styles.descInfo}>{description}</div>
          </div>
          <div className={styles.timeContainer}>
            {restTime ? (
              <CountDown restTime={restTime} />
            ) : (
              <TimeRange time={time} />
            )}
          </div>
        </div>
        <div className={styles.statusWrapper}>{status}</div>
      </div>
    </div>
  );
};

export default CouponPanel;
