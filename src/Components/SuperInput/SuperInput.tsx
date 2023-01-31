import { ChangeEvent, FC } from "react";
import { StateType } from "../../App";
import style from "./superInput.module.css";
type SuperInputPropsType = {
  inputText: "max value" | "start value";
  state: StateType;
  setState: (newState: StateType) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const SuperInput: FC<SuperInputPropsType> = ({
  inputText,
  state,
  onChange,
}) => {
  const value = inputText === "max value" ? state.maxValue : state.startValue;
  return (
    <div className={style.wrapper}>
      <p className={style.text}>{inputText + ":"}</p>
      <input
        className={style.input}
        id={inputText}
        type='number'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
