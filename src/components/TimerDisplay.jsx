import React from 'react'
const style = {
    background:"#f0f0f0",
    padding:"5px",
    textAlign:"center",
    fontSize:"5em"


}

const TimerDisplay = () => {
  return (
    <div>
        <div style={style} id='displayTime'>00:00</div>

    </div>
  )
}

export default TimerDisplay