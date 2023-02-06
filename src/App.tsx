import { loadavg } from "os";
import { useState, useEffect } from "react";
import "./App.css";
import { MainBlock } from "./Components/MainBlock/MainBlock";

type ErrorType = "Incorrect value" | 'enter values and press "set"' | null;
export type DisplayType = "counterMin" | "settingsMin" | null;
export type StateType = {
  count: number;
  startValue: number;
  maxValue: number;
  error: ErrorType;
  display: DisplayType;
};
export type idType = "settings" | "counter" | "counterMin" | "settingsMin";
export type SuperPropsType = {
  id: idType;
  state: StateType;
  setState: (newState: StateType) => void;
};

function App() {
  const errorLocalStorage = () => {
    if (localStorage.getItem("error") === JSON.stringify("Incorrect value"))
      return "Incorrect value";
    if (localStorage.getItem("error") === "null") return null;
    else return 'enter values and press "set"';
  };

  const [state, setState] = useState<StateType>({
    count: Number(localStorage.getItem("count")) || 0,
    startValue: Number(localStorage.getItem("startValue")) || 0,
    maxValue: Number(localStorage.getItem("maxValue")) || 5,
    error: errorLocalStorage(),
    display: null,
  });

  useEffect(() => {
    localStorage.setItem("error", JSON.stringify(state.error));
    localStorage.setItem("count", JSON.stringify(state.count));
    localStorage.setItem("startValue", JSON.stringify(state.startValue));
    localStorage.setItem("maxValue", JSON.stringify(state.maxValue));
  }, [state]);

  const renderDisplay = (display: DisplayType) => {
    switch (display) {
      case "counterMin":
        return (
          <>
            <MainBlock id='counterMin' setState={setState} state={state} />
          </>
        );
      case "settingsMin":
        return (
          <>
            <MainBlock id='settingsMin' setState={setState} state={state} />
          </>
        );
      default:
        return (
          <>
            <MainBlock
              key='settings'
              id='settings'
              setState={setState}
              state={state}
            />
            <MainBlock
              key='counter'
              id='counter'
              setState={setState}
              state={state}
            />
          </>
        );
    }
  };
  return <div className='App'>{renderDisplay(state.display)}</div>;
}

export default App;
