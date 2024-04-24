import React from 'react'
import '../App.css';

function TodoCreate() {
  return (
    <div className='todo-create'>
        <input className='todo-input' type="text" placeholder='Enter Todo'/>
        <button className='todo-create-button'> TODO Create</button>

      
    </div>
  )
}

export default TodoCreate
