import { useState } from 'react'

import './App.css'

function App() {
  const [Inc,SetInc] = useState(0)
  const IncFunc= ()  => {
    debugger;
    SetInc(Inc+1)
  }
  return (
    <>
    
    <div>Inc: {Inc} </div>
    <button onClick={IncFunc}>Increment</button>
    <button onClick={() => SetInc(Inc - 1)}>Decrement</button>
    
    </>
  )
}

export default App
