import { FC } from "react";
import { Button } from "../Button/Button";
import style from "./buttonsBox.module.css";

type ButtonsPanelPropsTypes = {
  count?: number;
  maxValue: number;
  startValue: number;
  setCount: (number: number) => void;
};
export const ButtonsBox: FC<ButtonsPanelPropsTypes> = ({
  count,
  maxValue,
  setCount,
  startValue,
}) => {
  const render = () => {
    if (count) {
      return (
        <>
          <Button
            isDisabled={false}
            onClick={() => console.log("")}
            text={"Inc"}
            key={"Inc"}
          />
          <Button
            isDisabled={false}
            onClick={() => console.log("")}
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
