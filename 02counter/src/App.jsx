 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15);

//  let counter=5
const addvalue=()=>{
  if(counter<20){

    counter=counter+1
  }
  console.log("click",counter);
  setCounter(counter)
}
const removevalue=()=>{
  if(counter>0){

    counter=counter-1;
  }
  setCounter(counter);
}
  return (
    <>
     <h1>counter project</h1> 
     <h2>counter {counter}</h2>
     <button onClick={addvalue}>Add counter</button>
     <button onClick={removevalue}>Remove counter</button>
    </>
  )
}

export default App
