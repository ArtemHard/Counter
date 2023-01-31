import { FC } from "react";
import style from "./superInput.module.css";
type SuperInputPropsType = {
  inputText: string;
  startValue?: number;
  maxValue?: number;
  setMaxValue?: (number: number) => void;
  setStartValue?: (number: number) => void;
};
export const SuperInput: FC<SuperInputPropsType> = ({
  inputText,
  startValue,
  maxValue,
  setMaxValue,
  setStartValue,
}) => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>{inputText + ":"}</p>
      <input className={style.input} id='maxValue' type='number' />
    </div>
  );
};
