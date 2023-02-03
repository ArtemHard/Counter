import { log } from "console";
import { useState, useEffect } from "react";
import "./App.css";
import { MainBlock } from "./Components/MainBlock/MainBlock";

type ErrorType = "Incorrect value" | 'enter values and press "set"' | null;

export type StateType = {
  count: number;
  startValue: number;
  maxValue: number;
  error: ErrorType;
};

export type SuperPropsType = {
  id: "settings" | "counter";
  state: StateType;
  setState: (newState: StateType) => void;
};

function App() {
  //BAG => функция не отрабатывает
  const errorLocalStorage = () => {
    // debugger;
    if (localStorage.getItem("error") === "Incorrect value")
      return "Incorrect value";
    if (localStorage.getItem("error") === "null") return null;
    else return 'enter values and press "set"';
  };
  console.log(localStorage.getItem("error"));
  console.log();
  console.log();
  const [state, setState] = useState<StateType>({
    count: Number(localStorage.getItem("count")) || 0,
    startValue: Number(localStorage.getItem("startValue")) || 0,
    maxValue: Number(localStorage.getItem("maxValue")) || 5,
    error: errorLocalStorage(),
  });

  useEffect(() => {
    localStorage.setItem("error", JSON.stringify(state.error));
    localStorage.setItem("count", JSON.stringify(state.count));
    localStorage.setItem("startValue", JSON.stringify(state.startValue));
    localStorage.setItem("maxValue", JSON.stringify(state.maxValue));
  }, [state]);
  return (
    <div className='App'>
      <MainBlock
        key='settings'
        id='settings'
        setState={setState}
        state={state}
      />
      <MainBlock key='counter' id='counter' setState={setState} state={state} />
    </div>
  );
}

export default App;
