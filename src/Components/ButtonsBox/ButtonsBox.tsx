import { FC } from "react";
import { DisplayType, idType, SuperPropsType } from "../../App";
import { Button } from "../Button/Button";
import style from "./buttonsBox.module.css";

export const ButtonsBox: FC<SuperPropsType> = ({ id, state, setState }) => {
  const { count, maxValue, startValue, error, display } = state;

  const render = (id: idType, display: DisplayType) => {
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
    const onClickSetSettingsHandler = () => {
      switch (display) {
        case "counterMin":
          setState({ ...state, display: "settingsMin" });
          break;

        case "settingsMin":
          setState({
            ...state,
            count: startValue,
            error: null,
            display: "counterMin",
          });
          break;

        default:
          break;
      }
    };
    switch (id) {
      case "counter":
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
      case "settings":
        return (
          <Button
            isDisabled={error === 'enter values and press "set"' ? false : true}
            onClick={onClickSetSettingsHandler}
            text='set'
            key='set'
          />
        );
      case "counterMin":
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
            <Button
              isDisabled={false}
              onClick={onClickSetSettingsHandler}
              text='set'
              key='set'
            />
          </>
        );
      case "settingsMin":
        return (
          <Button
            isDisabled={error === "Incorrect value" ? true : false}
            onClick={onClickSetSettingsHandler}
            text='set'
            key='set'
          />
        );
    }
  };

  return <div className={style.wrapper}>{render(id, display)}</div>;
};
