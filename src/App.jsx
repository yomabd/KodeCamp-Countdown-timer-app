import { useState, useEffect } from 'react';
import Heading from './components/Heading';
import TimerControls from './components/TimerControls';
import TimerDisplay from './components/TimerDisplay';
import TimeInput from './components/TimerInput';

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "80vh",
};

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(seconds);
    setIsRunning(false);
  };

  const handleSetTime = (inputSeconds) => {
    setSeconds(inputSeconds);
    setTimeLeft(inputSeconds);
    setIsRunning(false);
  };

  return (
    <div>
      <Heading />
      <TimerDisplay time={timeLeft} />
      <div style={container}>
        <TimeInput label={"Enter Number of Seconds"} setTime={handleSetTime} />
        <TimerControls start={handleStart} pause={handlePause} reset={handleReset} />
      </div>
    </div>
  );
}

export default App;
