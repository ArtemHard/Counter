import { FC } from "react";
import style from "./superInput.module.css";
type SuperInputPropsType = {
  inputText: string;
  startValue?: number;
  maxValue?: number;
};
export const SuperInput: FC<SuperInputPropsType> = ({
  inputText,
  startValue,
  maxValue,
}) => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>{inputText + ":"}</p>
      <input className={style.input} id='maxValue' type='number' />
    </div>
  );
};
