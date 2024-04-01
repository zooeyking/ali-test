"use client";
import React, { useMemo } from "react";
import { formatDate } from "@/lib/util";
import styles from "./timeRange.module.css";

const formatStr = "MM.dd HH:mm";

const TimeRange: React.FC<{ label?: string; time: [number, number] }> = (
  props
) => {
  const {
    time: [startTime, endTime],
    label = "有效期",
  } = props;

  const [start, end] = useMemo(
    () => [
      formatDate(new Date(startTime), formatStr),
      formatDate(new Date(endTime), formatStr),
    ],
    [startTime, endTime]
  );

  return (
    <div className={styles.container}>
      {label}：{start}-{end}
    </div>
  );
};

export default TimeRange;
