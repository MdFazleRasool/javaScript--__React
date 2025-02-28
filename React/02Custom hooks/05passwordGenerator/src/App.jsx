import { useCallback, useState ,useEffect ,useRef} from 'react'



function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState("");

  // useRef hook
  const passwordRef=useRef(null)



  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(numberAllowed) str+="!@#$%^&*-+=[]{}~`"
    for(let i=1;i<=length;i++){
      let char  =  Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToclipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  } ,[password])  //[] iske andar every jgh whii include karo jispe dependency hogi 
 
  useEffect(()=> {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
     

      <div  className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-800 bg-gray-700'>
        <h1 className='text-white text-center my-3'>passwordGenerator</h1>
        <div   className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input value={password} ref={passwordRef} type='text'  placeholder='password' readOnly className='outline-none w-full py-1 px-3 '/>
          <button onClick={copyPasswordToclipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-pink-700 hover:bg-red-700'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer '  onChange={(e)=>{setLength(e.target.value)}}/>
            <label> length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'defaultChecked={numberAllowed} id='numberInput'  onChange={()=>{setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor='numberInput'> Numbers </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'defaultChecked={numberAllowed} id='charactersInput'  onChange={()=>{setCharAllowed((prev) => !prev)}}/>
            <label htmlFor='charactersInput'> Characters </label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
