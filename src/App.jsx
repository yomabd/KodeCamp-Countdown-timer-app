import { useState } from 'react'
import Heading from './components/Heading'
import TimerControls from './components/TimerControls'
import TimerDisplay from './components/TimerDisplay'
import TimeInput from './components/TimerInput'



const container = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  width:"100vw",
  height:"80vh"
}



function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  

  return (
    <div   >
      <Heading/>
      <TimerDisplay/>
      <div style={container}>
      <TimeInput label={"Enter Number of Seconds"}/>
      <TimerControls/>
      </div>

    </div>
  )
}

export default App
