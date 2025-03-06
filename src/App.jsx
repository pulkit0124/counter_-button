import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  

  const addvalue=()=>{
    if(count>=10){
      window.alert("hit the limit, sending back you to the staring point")
      setCount(0)
    }
    else{
      setCount(count+1)
    }
    

  }
  const remvalue=()=>{
    
    if(count==0){
      setCount(0)
    }
    else{
      setCount(count-1)
    }
  }
  const reset =()=>{
    setCount(0)
  }
  
  
  
  return (
    <>
    <h1 id='h1'>count {count}</h1>
    <button id='add' onClick={addvalue}>increse</button>
    <br/>
    <button id='rem' onClick={remvalue} >deacrse</button>
    <br/>
    <button id='reset' onClick={reset}>reset</button>
      
      </>
    
  )
}

export default App
