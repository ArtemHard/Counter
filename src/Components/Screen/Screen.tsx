import React, { FC } from "react";
import { SuperInput } from "../SuperInput/SuperInput";
import style from "./screen.module.css";

type ScreenPropsType = {
  count?: number;
  maxValue?: number;
  startValue?: number;
  setStartValue?: (number: number) => void;
  setMaxValue?: (number: number) => void;
};

export const Screen: FC<ScreenPropsType> = ({
  count,
  maxValue,
  startValue,
  setStartValue,
  setMaxValue,
}) => {
  const styleClass = setStartValue
    ? style["screen-params"]
    : style["screen-number"];

  if (setStartValue) {
    // Функция на изменение MinMax пришла ? рендер настроек
    return (
      <div className={styleClass}>
        <SuperInput
          inputText='max value'
          maxValue={maxValue}
          setMaxValue={setMaxValue}
        />
        <SuperInput
          inputText='start value'
          startValue={startValue}
          setStartValue={setStartValue}
        />
      </div>
    );
  } // : рендер числа
  else
    return (
      <div className={styleClass}>
        <span
          className={
            count === maxValue ? style.number + " " + style.error : style.number // Макс число достигнуто? красный цвет : default
          }
        >
          {count}
        </span>
      </div>
    );
};
