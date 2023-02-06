import { FC } from "react";
import { DisplayType, idType, SuperPropsType } from "../../App";
import { Button } from "../Button/Button";
import style from "./buttonsBox.module.css";

export const ButtonsBox: FC<SuperPropsType> = ({ id, state, setState }) => {
  const { count, maxValue, startValue, error, display } = state;

  const render = (id: idType, display: DisplayType) => {
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

    // SECOND
    /*
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
        const onClickSetSettingsHandler = () => {
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
      case "counterExpand":
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
              isDisabled={error || startValue === count ? true : false}
              onClick={onClickResetCountHandler}
              text='reset'
              key='reset'
            />
          </>
        );

      default:
        break;
    }
    */
  };

  return <div className={style.wrapper}>{render(id, display)}</div>;
};
