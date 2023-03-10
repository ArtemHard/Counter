import { ChangeEvent, FC } from "react";

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
  const { count, maxValue, startValue, error } = state;

  const numberStyle =
    count === maxValue ? style.number + " " + style.error : style.number;
  const textStyle =
    error === "Incorrect value" ? style.text + " " + style.error : style.text;

  if (id === "settings") {
    // props id говорит отображать настройки

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = +e.currentTarget.value;
      const resultOferror = value <= startValue || value < 0 || startValue < 0;
      setState({
        ...state,
        maxValue: value,
        error: resultOferror
          ? "Incorrect value"
          : 'enter values and press "set"',
      });
    };
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = +e.currentTarget.value;
      const resultOferror = value >= maxValue || value < 0;
      setState({
        ...state,
        startValue: value,
        error: resultOferror
          ? "Incorrect value"
          : 'enter values and press "set"',
      });
      // e.currentTarget.value
    };

    return (
      <form id={id} className={styleClass}>
        <SuperInput
          inputText='max value'
          formConnector={id}
          state={state}
          setState={setState}
          onChange={onChangeMaxValueHandler}
          // errorStyle={errorInput}
        />
        <SuperInput
          inputText='start value'
          formConnector={id}
          state={state}
          setState={setState}
          onChange={onChangeMinValueHandler}
          // errorStyle={errorInput}
        />
      </form>
    );
  } // : рендер числа
  else
    return (
      <div className={styleClass}>
        <span
          className={
            // Ошибка есть вывод стиль текста ошибки, нету стиль числа
            error ? textStyle : numberStyle
          }
        >
          {error ? error : count}
        </span>
      </div>
    );
};
