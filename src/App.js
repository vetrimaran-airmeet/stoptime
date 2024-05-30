import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [isrunning,setisrunning]=useState(false)
  function handler() {
    setisrunning(!isrunning)
    console.log("is running")
    
  }
  function handle() {

  }

  return (
    <div className="App">
      <h1>jikan o tomare</h1>
      <div>
        <button className='buuton' onClick={handler}>
          {isrunning ?"start":"stop"}
        </button>
        <button classname='buuton' onClick={handle}>
        reset
        </button>
      </div>
    </div>
  );
}

export default App;
