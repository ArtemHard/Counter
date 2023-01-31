import { FC } from "react";
import { Button } from "../Button/Button";
import style from "./buttonsBox.module.css";

type ButtonsPanelPropsTypes = {
  count?: number;
  maxValue: number;
  startValue: number;
  setCount?: (number: number) => void;
  setMaxValue?: (number: number) => void;
  setStartValue?: (number: number) => void;
};
export const ButtonsBox: FC<ButtonsPanelPropsTypes> = ({
  count,
  maxValue,
  setCount,
  startValue,
  setMaxValue,
  setStartValue,
}) => {
  const render = () => {
    if (setCount && count !== undefined) {
      const onClickChangeCountHandler = () => {
        switch (count) {
          case maxValue:
            break;
          default:
            setCount(count + 1);
        }
      };
      const onClickResetCountHandler = () => {
        setCount(startValue);
      };

      return (
        <>
          <Button
            isDisabled={maxValue === count ? true : false}
            onClick={onClickChangeCountHandler}
            text={"inc"}
            key={"inc"}
          />
          <Button
            isDisabled={startValue === count ? true : false}
            onClick={onClickResetCountHandler}
            text={"reset"}
            key={"reset"}
          />
        </>
      );
    } else
      return (
        <Button
          isDisabled={false}
          onClick={() => console.log("")}
          text={"set"}
          key={"set"}
        />
      );
  };

  return <div className={style.wrapper}>{render()}</div>;
};
