import { ChangeEvent, FC } from "react";
import { StateType } from "../../App";
import style from "./superInput.module.css";
type SuperInputPropsType = {
  formConnector: "settings" | "counter";
  inputText: "max value" | "start value";
  state: StateType;
  setState: (newState: StateType) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const SuperInput: FC<SuperInputPropsType> = ({
  formConnector,
  inputText,
  state,
  onChange,
}) => {
  const { maxValue, startValue } = state;
  const value = inputText === "max value" ? maxValue : startValue;
  const inputStyle = () => {
    if (inputText === "max value" && (maxValue <= startValue || maxValue < 0))
      return " " + style.error;
    if (
      inputText === "start value" &&
      (startValue >= maxValue || startValue < 0)
    )
      return " " + style.error;
    else return "";
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
