import { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { maxValue, minValue } from "../Counter";
import style from "./buttonsPanel.module.css";

type ButtonsPanelPropsTypes = {
  count: number;
  setCount: (number: number) => void;
};

export const ButtonsPanel: FC<ButtonsPanelPropsTypes> = ({
  count,
  setCount,
}) => {
  const onClickIncrementBtnHandler = () => {
    switch (count) {
      case maxValue:
        break;
      default:
        setCount(count + 1);
    }
  };
  const onClickResetBtnHandler = () => setCount(minValue);

  return (
    <div className={style.wrapper}>
      <Button
        isDisabled={count === maxValue}
        onClick={onClickIncrementBtnHandler}
        text='inc'
      />
      <Button
        isDisabled={count === minValue}
        onClick={onClickResetBtnHandler}
        text='reset'
      />
    </div>
  );
};
