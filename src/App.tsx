import { useState } from "react";
import "./App.css";
import { MainBlock } from "./Components/MainBlock/MainBlock";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <MainBlock maxValue={10} startValue={0} />
      <MainBlock count={1} maxValue={10} startValue={0} />
      {/* <Counter /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
