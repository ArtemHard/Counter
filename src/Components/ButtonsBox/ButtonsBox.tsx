import { FC } from "react";
import { SuperPropsType } from "../../App";
import { Button } from "../Button/Button";
import style from "./buttonsBox.module.css";

export const ButtonsBox: FC<SuperPropsType> = ({ id, state, setState }) => {
  const { count, maxValue, startValue } = state;

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
            isDisabled={maxValue === count ? true : false}
            onClick={onClickChangeCountHandler}
            text='inc'
            key='inc'
          />
          <Button
            isDisabled={startValue === count ? true : false}
            onClick={onClickResetCountHandler}
            text='reset'
            key='reset'
          />
        </>
      );
    } else if (id === "settings") {
      const onClickSetSettingsHandler = () => {
        alert("Set settings");
      };
      return (
        <Button
          isDisabled={false}
          onClick={onClickSetSettingsHandler}
          text='set'
          key='set'
        />
      );
    }
  };

  return <div className={style.wrapper}>{render()}</div>;
};
