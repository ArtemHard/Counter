import { FC } from "react";
import style from "./button.module.css";

type IncrementButtonPropsType = {
  onClick: () => void;
  text: "Inc" | "reset" | "set";
  isDisabled: boolean;
};

export const Button: FC<IncrementButtonPropsType> = ({
  onClick,
  text,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={
        isDisabled
          ? style.btnDefault + " " + style.btnDisabled
          : style.btnDefault
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
