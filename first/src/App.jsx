import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const lover = "Sevda ";
  const MYlover = "Sevdam ";
  // create a list of 100 lovers below copilot will help you
  let list= new Array(100).fill(MYlover);


  return (
    <div>
      {lover}
      {list.map((item, index) => {
        return <div key={index} style ={ {
          background: 'orange',
          border: '1px solid black'
        }} >{item}</div>;
      })}
    </div>
  );
}

export default App;
