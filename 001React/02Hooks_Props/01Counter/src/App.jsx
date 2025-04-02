import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount] = useState(10);
  const addValue = () => {
    if(count > 20){
      count=0;
      setCount(count);
    }
      setCount(count+1);
      console.log(count);
      
  }
  const removeValue = () => {
    if(count < 1){
      count=10;
      setCount(count);
    }
      setCount(count-1);
      console.log(count);
      
  }
  return (
    <>
      <h4>Learning Hooks</h4> <br /> <br /> <br />

      <div> Counter Value : {count}</div>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <p>Footer : {count}</p>
    </>
  )
}

export default App
