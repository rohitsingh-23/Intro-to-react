import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handelCounter(value) {
    setCount(count + value);
  }

  const handelCounter2 = (value) => {
    setCount(count + value);
  };
  //hoisting
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          handelCounter2(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handelCounter2(-1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
