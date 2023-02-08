import React, { FC } from "react";
import { DisplayType, SuperPropsType } from "../../../App";
import { ButtonsBox } from "../../ButtonsBox/ButtonsBox";
import { Screen } from "../../Screen/Screen";

export const Block: FC<SuperPropsType> = ({ id, state, setState }) => {
  const idArr = {
    counterMin: ["counter", "counterMin"],

    settingsMin: ["settings", "settingsMin"],
  };

  const generateIdScreen = (dispaly: DisplayType): string => {
    switch (dispaly) {
      case "counterMin":
        return idArr.counterMin[0];

      case "settingsMin":
        return idArr.settingsMin[0];

      default:
        return "counterMin";
    }
  };
  console.log(generateIdScreen(state.display));
  return (
    <>
      <Screen id={"counter"} state={state} setState={setState} />
      <ButtonsBox id={"counter"} state={state} setState={setState} />
    </>
  );
};
