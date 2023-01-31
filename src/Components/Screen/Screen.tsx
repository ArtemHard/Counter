import React, { FC } from "react";
import { SuperInput } from "../SuperInput/SuperInput";
import style from "./screen.module.css";

type ScreenPropsType = {
  count?: number;
  maxValue?: number;
  startValue?: number;
};

export const Screen: FC<ScreenPropsType> = ({
  count,
  maxValue,
  startValue,
}) => {
  const styleClass = count ? style["screen-number"] : style["screen-params"];

  if (count) {
    return (
      <div className={styleClass}>
        <span
          className={
            count === maxValue ? style.number + " " + style.error : style.number
          }
        >
          {count}
        </span>
      </div>
    );
  } else
    return (
      <div className={styleClass}>
        <SuperInput inputText='max value' maxValue={10} />
        <SuperInput inputText='start value' startValue={0} />
      </div>
    );
};
