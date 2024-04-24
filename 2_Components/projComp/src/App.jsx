import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {lovers} from './Sevda'
import Sevda from './Sevda'

function App() {
  const [count, setCount] = useState(0)
  console.log(lovers);
  return (
    <div>
    

      <h1 > Love is something good</h1>


      <Sevda />
      <br />
      <Sevda />
      <br />
      <Sevda />
      <br />
    </div>
  )
}

export default App
