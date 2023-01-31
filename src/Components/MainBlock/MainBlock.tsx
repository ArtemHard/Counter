import React, { FC } from "react";
import { ButtonsBox } from "../ButtonsBox/ButtonsBox";
import { Screen } from "../Screen/Screen";
import style from "./mainBlock.module.css";

type MainBlockPropsType = {
  count?: number;
  maxValue: number;
  startValue: number;
  setStartValue?: (number: number) => void;
  setMaxValue?: (number: number) => void;
  setCount?: (number: number) => void;
};
export const MainBlock: FC<MainBlockPropsType> = ({
  count,
  maxValue,
  startValue,
  setStartValue,
  setMaxValue,
  setCount,
}) => {
  return (
    <div className={style.wrapper}>
      <Screen
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
      />
      <ButtonsBox
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        setCount={setCount}
      />
    </div>
  );
};
