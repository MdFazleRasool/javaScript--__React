import { useState } from 'react'
import './App.css'

function App() {
    const [color,setColor] = useState("green");
  return (
    <>
      <div  className='w-full h-screen duration-200'
        style={{backgroundColor:color}}
      >
        <div  className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        
          <div  className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-white rounded-xl'>
            <button onClick={() =>setColor("red")} className=' px-4 bg-red-900 py-1 rounded-full text-white shadow-lg'>Red</button>
            <button onClick={() =>setColor("gray")}className=' px-4 bg-gray-600 py-1 rounded-full text-white shadow-lg'>Red</button>
            <button onClick={() =>setColor("blue")}className=' px-4 bg-blue-900 py-1 rounded-full text-white shadow-lg'>Red</button>          
            <button onClick={() =>setColor("yellow")}className=' px-4 bg-yellow-500 py-1 rounded-full text-white shadow-lg'>Red</button>
            <button onClick={() =>setColor("orange")}className=' px-4 bg-orange-600 py-1 rounded-full text-white shadow-lg'>Red</button>
            <button onClick={() =>setColor("black")}className=' px-4 bg-black py-1 rounded-full text-white shadow-lg'>Red</button>

          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
