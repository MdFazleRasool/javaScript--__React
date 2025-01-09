import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

// function MyApp(){
//     return(
//         <div>
//             <h2>Custom app !</h2>
//         </div>
//     )
// }

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
            <h2>MD FAZLE RASOOL</h2>
        </div>
    )
}


// const ReactElement= {
//     type: 'a', //element type like div , a , h1 etc etc
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children : 'Click me to visit google'
// } 

const anotherElement = (
    <a href="https://google.com" target='_blank' >Visit Google</a>
)

const anotherUser = "   chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com' ,target:'_blank'},
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).
render(

    reactElement
    //  anotherElement 
    // <ReactElement/> // this will not run syntax mismatch
   //MyApp()
    // <MyApp /> //  this is similiar to function call and we can call it just like a fynction eg1 :- function(); eg2:-  MyApp(); 
)
 