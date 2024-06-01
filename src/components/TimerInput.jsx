import React from 'react'
const inputStyle = {
    width:'10vw',
    display:'block',
    height:'30px',
    borderRadius:'25px',
    paddingLeft:"25px",
    margin:"20px"
    // background:'gray',
    // border:"solid 2px dark-gray"

    }

const TimeInput = ({label}) => {
  return (
    <div>
        <label htmlFor="timer-input">{label}</label>
        <input style={inputStyle} className="" type="text" name="" id="timer-input" />

    </div>
  )
}

export default TimeInput