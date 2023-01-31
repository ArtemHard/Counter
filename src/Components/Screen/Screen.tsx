import { ChangeEvent, FC, useState } from "react";
import { SuperPropsType } from "../../App";
import { SuperInput } from "../SuperInput/SuperInput";
import style from "./screen.module.css";
export type MinMax = {
  maxValue: number;
  startValue: number;
};
export const Screen: FC<SuperPropsType> = ({ id, state, setState }) => {
  const styleClass =
    id === "settings" ? style["screen-params"] : style["screen-number"];
  const { count, maxValue, startValue } = state;
  const [minMax, setMinMax] = useState({
    maxValue: state.maxValue,
    startValue: state.startValue,
  });
  if (id === "settings") {
    // props id говорит отображать настройки
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      // setState({ ...state, maxValue: +e.currentTarget.value });
      // e.currentTarget.value
    };
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      // setState({ ...state, startValue: +e.currentTarget.value });
      // e.currentTarget.value
    };
    return (
      <form className={styleClass}>
        <SuperInput
          inputText='max value'
          state={state}
          setState={setState}
          onChange={onChangeMaxValueHandler}
        />
        <SuperInput
          inputText='start value'
          state={state}
          setState={setState}
          onChange={onChangeMinValueHandler}
        />
      </form>
    );
  } // : рендер числа
  else
    return (
      <div className={styleClass}>
        <span
          className={
            count === maxValue ? style.number + " " + style.error : style.number // Макс число достигнуто? красный цвет : default
          }
        >
          {count}
        </span>
      </div>
    );
};
