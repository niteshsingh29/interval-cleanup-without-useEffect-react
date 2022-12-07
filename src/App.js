import "./styles.css";
import { useState } from "react";

export default function App() {
  let interval;
  let timer = 0;

  const [currentTimer, setCurrentTimer] = useState(() => timer);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (!interval) {
      interval = setInterval(recursiveFunc, 1000);
      setIntervalId(interval);
    }
  };

  const recursiveFunc = () => {
    timer += 1;
    setCurrentTimer(timer);
  };

  const handleStop = () => {
    intervalId && clearInterval(intervalId);
    timer = currentTimer;
  };

  return (
    <div className="App">
      <button onClick={handleStart}>start</button>
      <div style={{ margin: 40, fontSize: 50 }}>{currentTimer}</div>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}
