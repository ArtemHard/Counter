import { useState } from "react";
import "./App.css";
import { MainBlock } from "./Components/MainBlock/MainBlock";

function App() {
  const [count, setCount] = useState(0);
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  return (
    <div className='App'>
      <MainBlock
        key='settings'
        maxValue={maxValue}
        startValue={startValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
      />
      <MainBlock
        key='counter'
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
