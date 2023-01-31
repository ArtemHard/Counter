import style from "./buttonsBox.module.css";

type ButtonsPanelPropsTypes = {
  count?: number;
  maxValue: number;
  startValue: number;
  setCount: (number: number) => void;
};
export const ButtonsBox = () => {
  return <div className={style.wrapper}></div>;
};
