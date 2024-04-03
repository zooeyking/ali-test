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
    let lastTime = Date.now();
    let offset = 1000;
    const callBack = () => {
      const newTime = Date.now();
      // 计算此次需要减少的count 一般情况下是1 阻塞非常严重时可能出现 2 3 4的情况
      const subNum = Math.max(Math.floor((newTime - lastTime) / 1000), 1);
      // 计算下次timeout 需要减去偏移量
      offset = (subNum + 1) * 1000 - (newTime - lastTime);
      // console.log({
      //   offset,
      //   subNum,
      // });
      setCounter((counter) => {
        // 更新此次执行时间的时间戳
        lastTime = newTime;
        return counter - subNum;
      });

      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(callBack, offset);
    };

    let timer = setTimeout(callBack, offset);

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
