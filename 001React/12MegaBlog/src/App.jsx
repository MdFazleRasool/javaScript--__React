import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import {login,logout} from './store/authSlice'
import {Header , Footer } from './components'
import authService from './appwrite/auth'

function App() {
  
  const [loading , setLoading] = useState(true);
  const dispatch  = useDispatch ();

  useEffect (()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) 
        dispatch(login({userData}))
      else 
      dispatch(logout())
    })
    .finally(() => setLoading(false))
  },[])
 



  return !loading ? (
    <div className="min-h-sc flex flex-wrap content-between bg-gray-400" >
      <div  className="w-full block">
        <Header />
        <main>
          Todo : {/* {Outlet} */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
