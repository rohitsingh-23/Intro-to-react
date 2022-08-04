import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });

  useEffect(() => {
    // handelTime();
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handelTime() {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec == 60) {
          return { ...prev, min: prev.min + 1, sec: 0 };
        }
        if (prev.min == 60) {
          return { ...prev, hr: prev.hr + 1, min: 0, sec: 0 };
        }

        return { ...prev, sec: prev.sec + 1 };
      });
    }, 1000);
  }

  return (
    <div className="App">
      <h1>
        {time.hr.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {time.min.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {time.sec.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </h1>
      <button onClick={() => handelTime()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
