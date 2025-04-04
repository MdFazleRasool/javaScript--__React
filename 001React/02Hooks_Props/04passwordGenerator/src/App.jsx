
import { useState , useCallback, useEffect, useRef } from 'react'


function App() {
  const [length , setlength] = useState(8);
  const [noAllowed , setNoAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(noAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*_+" ;
    
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass +=str.charAt(char);
    }

    setPassword(pass);

  },[length,noAllowed,charAllowed,setPassword])  

    useEffect(() => {
        passwordGenerator()
    },[length,noAllowed,charAllowed,passwordGenerator])

    //ref hook
    const copyref = useRef();

    const copyPasswordToClipboard  = useCallback(() =>{
      copyref.current?.select();
      //copyref.current?.setSelectionRange(0,15);
      window.navigator.clipboard.writeText(password)
    },[password])
  return (
    <>

      <div  className='w-full max-w-md  mx-auto  shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-800'>
     
        <h1 className=' text-center text-white my-3 '>Password Generator</h1>

        <div  className=' flex shadow  overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className="outline-none bg-white w-full mb-6 py-2 px-4 text-gray-900"
          placeholder="Generated password"
          readOnly
          ref={copyref}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-2 ml-0.5 mb-6 shrink-0'>
            copy
        </button>
        </div>

        <div  className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type='range'
              min={8}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={noAllowed}
              id='numberInput'
              onChange={() => {
                setNoAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id='CharacterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Character</label>
          </div>
        </div>

      </div>

    
    </>
  )
}

export default App
