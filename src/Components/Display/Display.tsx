import React, { FC, useEffect } from "react";
import { maxValue } from "../Counter";
import style from "./display.module.css";

type DisplayPropsType = {
  count: number;
};
export const Display: FC<DisplayPropsType> = ({ count }) => {
  return (
    <div className={style.wrapper}>
      <span
        className={
          count === maxValue ? style.number + " " + style.error : style.number
        }
      >
        {count}
      </span>
    </div>
  );
};
