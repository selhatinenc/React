import React from 'react'
import './App.css'
export const lovers = [
    { name: 'Sevda', occupation: 'doctor' },
    { name: 'Me', occupation: 'software developer' }
    ]


function Sevda() {
    return (
        <div>
        <h1>Love</h1>
        <div id='container-1'>
            <p>SevdaM is a doctor</p>
            <input type="text" />
        </div>
        <div id='container-1'>
            <p>and Me is a software developer</p>
            <input type="text" />
        </div>
        </div>
    );
    }
    
    export default Sevda;
      