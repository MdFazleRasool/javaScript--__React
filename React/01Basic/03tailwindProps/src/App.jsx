import { useState } from 'react'

import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username:"FAZLE RASOOL",
    age:21
  }
  let newArr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind test</h1>

      

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img  src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-24 h-24 rounded-full mx-auto" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg ">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      <Card username="MD FAZLE RASOOL"  />
      <Card />


    </>
  )
}

export default App
