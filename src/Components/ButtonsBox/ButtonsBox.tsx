import { FC } from "react";
import { SuperPropsType } from "../../App";
import { Button } from "../Button/Button";
import style from "./buttonsBox.module.css";

export const ButtonsBox: FC<SuperPropsType> = ({ id, state, setState }) => {
  const { count, maxValue, startValue, error } = state;

  const render = () => {
    if (id === "counter") {
      const onClickChangeCountHandler = () => {
        switch (count) {
          case maxValue:
            break;
          default:
            setState({ ...state, count: count + 1 });
        }
      };
      const onClickResetCountHandler = () => {
        setState({ ...state, count: startValue });
      };

      return (
        <>
          <Button
            isDisabled={error || maxValue === count ? true : false}
            onClick={onClickChangeCountHandler}
            text='inc'
            key='inc'
          />
          <Button
            isDisabled={error || startValue === count ? true : false}
            onClick={onClickResetCountHandler}
            text='reset'
            key='reset'
          />
        </>
      );
    } else if (id === "settings") {
      const onClickSetSettingsHandler = () => {
        localStorage.setItem("error", JSON.stringify(error));
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("startValue", JSON.stringify(startValue));
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
        setState({ ...state, count: startValue, error: null });
      };
      return (
        <Button
          isDisabled={error === 'enter values and press "set"' ? false : true}
          onClick={onClickSetSettingsHandler}
          text='set'
          key='set'
        />
      );
    }
  };

  return <div className={style.wrapper}>{render()}</div>;
};
