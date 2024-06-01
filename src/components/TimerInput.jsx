import React, { useState } from 'react';

const inputStyle = {
  width: '10vw',
  display: 'block',
  height: '30px',
  borderRadius: '25px',
  paddingLeft: "25px",
  margin: "20px"
};

const TimeInput = ({ label, setTime }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputSeconds = parseInt(inputValue, 10);
    if (!isNaN(inputSeconds)) {
      setTime(inputSeconds);
    }
  };

  return (
    <div>
      <label htmlFor="timer-input">{label}</label>
      <input
        style={inputStyle}
        type="number"
        id="timer-input"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Set Timer</button>
    </div>
  );
};

export default TimeInput;
