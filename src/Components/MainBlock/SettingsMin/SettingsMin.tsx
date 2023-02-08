import React, { FC } from "react";

import { ButtonsBox } from "../../ButtonsBox/ButtonsBox";
import { Screen } from "../../Screen/Screen";
import { MainBlockPropsType } from "../MainBlock";

export const SettingsMin: FC<MainBlockPropsType> = ({ state, setState }) => {
  return (
    <>
      <Screen id={"settings"} state={state} setState={setState} />
      <ButtonsBox id={"settingsMin"} state={state} setState={setState} />
    </>
  );
};
