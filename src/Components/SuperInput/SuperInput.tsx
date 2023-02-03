import { log } from "console";
import { ChangeEvent, FC, useEffect } from "react";
import { StateType } from "../../App";
import style from "./superInput.module.css";
type SuperInputPropsType = {
  formConnector: "settings" | "counter";
  inputText: "max value" | "start value";
  state: StateType;
  setState: (newState: StateType) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorStyle: ErrorInputType;
};
type ErrorInputType = {
  maxValue: boolean;
  startValue: boolean;
};

export const SuperInput: FC<SuperInputPropsType> = ({
  formConnector,
  inputText,
  state,
  onChange,
  errorStyle,
}) => {
  const { maxValue, startValue } = state;
  const value = inputText === "max value" ? maxValue : startValue;
  const inputStyle = () => {
    if (inputText === "max value") {
      return errorStyle.maxValue ? " " + style.error : "";
    }
    if (inputText === "start value") {
      return errorStyle.startValue ? " " + style.error : "";
    }
  };

  return (
    <div className={style.wrapper}>
      <p className={style.text}>{inputText + ":"}</p>
      <input
        className={style.input + inputStyle()}
        form={formConnector}
        id={inputText}
        type='number'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
