"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./countDown.module.css";
import { formatCountTime } from "@/lib/util";

type PropsType = {
  restTime: number;
  label?: string;
};

const CountDown: React.FC<PropsType> = (props) => {
  const { restTime, label = "距结束" } = props;
  const [counter, setCounter] = useState(restTime);

  useEffect(() => {
    const callBack = () => {
      setCounter((counter) => counter - 1);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(callBack, 1000);
    };

    let timer = setTimeout(callBack, 1000);

    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  const [hours, minutes, seconds] = useMemo(() => {
    return formatCountTime(counter);
  }, [counter]);

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <ul className={styles.timeWrapper}>
        <li>{hours}</li>
        <li>{minutes}</li>
        <li>{seconds}</li>
      </ul>
    </div>
  );
};

export default CountDown;
