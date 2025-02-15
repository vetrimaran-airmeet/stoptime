import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  
  const [isrunning,setisrunning]=useState(false)
  const [time,settime]=useState(0)
  
  function start() {
    setisrunning(!isrunning)
    console.log("is running")
    

    
  }
  function reset() {
    settime(0)
  }
  
  
  //setInterval(time,10)
  useEffect(()=>{
    let interv
    if(isrunning){
      interv=setInterval(()=>settime(time+1),10)
    }
    return ()=>{clearInterval(interv)}
  },[isrunning,time]);
  const sec=Math.floor((time%6000)/100)
  const min=Math.floor((time%36000)/6000)
  const ssec=Math.floor(time%100)

  return (
    <div className="App">
      
      <h1>{min}:{sec}:{ssec}</h1>
      <div classname='buuton'>
        <button className='bluton' onClick={start}>
          {isrunning ?"stop":"start"}
        </button>
        <button classname='bruton' onClick={reset}>
        reset
        </button>
      </div>
    </div>
  );
}

export default App;
