import React from 'react';

const style = {
  background: "#f0f0f0",
  padding: "5px",
  textAlign: "center",
  fontSize: "5em",
};

const TimerDisplay = ({ time }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <div style={style} id='displayTime'>{formatTime(time)}</div>
    </div>
  );
};

export default TimerDisplay;
