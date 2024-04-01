"use client";
import React, { useState } from "react";

export default function page() {
  const [count, setCount] = useState(1);

  const onClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return <div onClick={onClick}>page {count}</div>;
}
