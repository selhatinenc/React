import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'

function App() {

  return (
    <div className='App'>
      <div  style={{width: '100%' , display:'flex' , flexDirection:'column' ,alignItems:'center' , justifyContent:'center'}}>
         
      <TodoCreate />

      </div>
      
    </div>
  )
}

export default App
