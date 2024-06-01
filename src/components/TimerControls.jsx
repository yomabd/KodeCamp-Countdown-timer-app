import React from 'react'
const style={
    width:"10vh",
    height:"50px",
    margin:"25px",
    fontSize:"1em",
    borderRadius:"15px",
    boxShadow:"2px 2px 2px #f000fe",
    backgroundColor:"#fff"
}
const flex = {
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
}

const TimerControls = () => {
  return (
    <div style={flex}>
        <button style={style} >Start</button>
        <button style={style} >Pause</button>
        <button style={style} >Reset</button>
    </div>
  )
}

export default TimerControls