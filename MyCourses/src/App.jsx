import React from 'react';
import './App.css';
import Header from './header';
import { Courses } from './data';
import Course from './course';

function App() {
  return (
    
    <div className='course-main'>
      
      <Header />
      <div className='Inner-main'>
      {Courses.map((c) => (
        <Course key={c.id} course={c} />
      ))}
      </div>
   
    </div>
  );
}

export default App;
