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
  const [state, setState] = useState<StateType>({
    count: 0,
    startValue: 0,
    maxValue: 5,
    error: null,
  });

  useEffect(() => {
    const errorLocalStorage = () => {
      if (localStorage.getItem("error") === "Incorrect value")
        return "Incorrect value";
      if (localStorage.getItem("error") === 'enter values and press "set"')
        return 'enter values and press "set"';
      else return null;
    };

    setState({
      count: Number(localStorage.getItem("count")) || 0,
      startValue: Number(localStorage.getItem("startValue")) || 0,
      maxValue: Number(localStorage.getItem("maxValue")) || 5,
      error: errorLocalStorage(),
    });
  }, []);

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
