import React, { useState } from 'react'
import authuser from '../assets/data/Authuser.json'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    const navigate = useNavigate()
        const handlesubmit=(e)=>{
            e.preventDefault()
           const Isemail =  authuser.find((el)=> el?.email === email)
           const Ispassword = Isemail?.password === password
           if(Isemail && Ispassword){
            localStorage.setItem('user',Isemail?.email)
               setError("")
               navigate('/')
           }else{
            if(!Isemail)
                {
                    setError("invalid email")
                }
                else if(!Ispassword){
                    setError("invalid password")
                }
           }
        }
  return (
    <main>
    <form onSubmit={handlesubmit}>
        <div className='form-card'>
        <label>Email</label>
    <input type='email' className='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter a Email'></input>
    <label>Password</label>
    <input type='password' className='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter a Password'></input>
   <p className='errorshow'>{error}</p> 
    <button type='submit'>LOGIN</button>
    </div>
    </form>
    </main>
  )
}

export default Login