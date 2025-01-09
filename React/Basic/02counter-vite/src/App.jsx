import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,updatecounter] =useState(15)  // using hooks
  // let counter=15
  const addValue = () => {
    //counter=counter+1

    
    updatecounter(prevCounter => prevCounter+1)
    updatecounter(prevCounter => prevCounter+1)
    //onsole.log("clicked add value ",counter);
    
  }
  const removeValue = () => {
    updatecounter(counter-1)
    console.log("clicked removeValue",counter);
    
  }

  return (
    <>
      <h1>Chai aur react</h1>

      <h2>Counter value : {counter} </h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>


    </>
  )
}

export default App
