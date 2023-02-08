import React, { FC } from "react";
import { ButtonsBox } from "../../ButtonsBox/ButtonsBox";
import { Screen } from "../../Screen/Screen";
import { MainBlockPropsType } from "../MainBlock";

export const CounterMin: FC<MainBlockPropsType> = ({ state, setState }) => {
  return (
    <>
      <Screen id={"counter"} state={state} setState={setState} />
      <ButtonsBox id={"counterMin"} state={state} setState={setState} />
    </>
  );
};
