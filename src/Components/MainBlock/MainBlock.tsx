import { FC } from "react";
import { DisplayType, StateType } from "../../App";
import { Counter } from "./Counter/Counter";
import { CounterMin } from "./CounterMin/CounterMin";
import style from "./mainBlock.module.css";
import { Settings } from "./Settings/Settings";
import { SettingsMin } from "./SettingsMin/SettingsMin";

export type MainBlockPropsType = {
  state: StateType;
  setState: (newState: StateType) => void;
};
export const MainBlock: FC<MainBlockPropsType> = ({ state, setState }) => {
  const render = (display: DisplayType) => {
    switch (display) {
      case "counterMin":
        return (
          <div className={style.wrapper}>
            <CounterMin state={state} setState={setState} />
          </div>
        );

      case "settingsMin":
        return (
          <div className={style.wrapper}>
            <SettingsMin state={state} setState={setState} />
          </div>
        );

      default:
        return (
          <>
            <div className={style.wrapper}>
              <Settings state={state} setState={setState} />
            </div>
            <div className={style.wrapper}>
              <Counter state={state} setState={setState} />
            </div>
          </>
        );
    }
  };
  return <>{render(state.display)}</>;
};
