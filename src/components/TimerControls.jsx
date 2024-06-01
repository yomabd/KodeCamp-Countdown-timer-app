import React from 'react';

const style = {
  width: "10vh",
  height: "50px",
  margin: "25px",
  fontSize: "1em",
  borderRadius: "15px",
  boxShadow: "2px 2px 2px #f000fe",
  backgroundColor: "#fff"
};

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const TimerControls = ({ start, pause, reset }) => {
  return (
    <div style={flex}>
      <button style={style} onClick={start}>Start</button>
      <button style={style} onClick={pause}>Pause</button>
      <button style={style} onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerControls;
