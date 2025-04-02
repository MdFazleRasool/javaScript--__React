import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';

/*
const reactElement = {
  type : 'a',
  props : {
      href : 'https://www.google.com/',
      target : '_blank'
  },
  children : 'Click me to visit google'
}
*/

const anotheruser = <br/> 
const ab =  "mfr";
const anotherelement = (
  <a href='https://www.google.com/' target = '_blank' > google</a>
)

const reactElement = React.createElement(
  'a' ,
  {href : 'https://www.google.com/' ,target : '_blank'},
  'click me to visit google' , anotheruser ,ab
)
createRoot(document.getElementById('root')).render(
  // anotherelement
  reactElement
  // <App />
)
