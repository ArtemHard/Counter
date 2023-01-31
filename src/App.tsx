import { useState } from "react";
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
