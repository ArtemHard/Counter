import { FC } from "react";
import { SuperPropsType } from "../../App";
import { ButtonsBox } from "../ButtonsBox/ButtonsBox";
import { Screen } from "../Screen/Screen";
import style from "./mainBlock.module.css";

export const MainBlock: FC<SuperPropsType> = ({ id, state, setState }) => {
  return (
    <div className={style.wrapper}>
      <Screen id={id} state={state} setState={setState} />
      <ButtonsBox id={id} state={state} setState={setState} />
    </div>
  );
};
