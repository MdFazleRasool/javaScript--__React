
import React , {useState , useContext} from 'react'
import UserContext from '../Context/userContext'
function Login() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password});
    }
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} = useContext(UserContext);

  return (
    <div>
        <h2>Login</h2>
        <input 
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />  {"  "}
        <input 
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login