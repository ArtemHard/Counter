import React, { useState } from "react";
import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel";
import style from "./counter.module.css";
import { Display } from "./Display/Display";
export const minValue = 0;
export const maxValue = 5;
export const Counter = () => {
  const [count, setCount] = useState(minValue);

  return (
    <div className={style.wrapper}>
      <Display count={count} />
      <ButtonsPanel count={count} setCount={setCount} />
    </div>
  );
};
