import React, { FC } from "react";
import { ButtonsBox } from "../ButtonsBox/ButtonsBox";
import { Screen } from "../Screen/Screen";
import style from "./mainBlock.module.css";

type MainBlockPropsType = {
  count?: number;
  maxValue: number;
  startValue: number;
};
export const MainBlock: FC<MainBlockPropsType> = ({
  count,
  maxValue,
  startValue,
}) => {
  return (
    <div className={style.wrapper}>
      <Screen count={count} maxValue={maxValue} startValue={startValue} />
      <ButtonsBox
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        setCount={() => ""}
      />
    </div>
  );
};
