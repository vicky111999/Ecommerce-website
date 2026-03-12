import React, { useState } from 'react'
import authuser from '../assets/data/Authuser.json'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    const navigate = useNavigate()
        const handlesubmit=(e)=>{
            e.preventDefault()
           const Isemail =  authuser.find((el)=> el.email === email)
           const Ispassword = Isemail.password === password
           if(Isemail && Ispassword){
            localStorage.setItem('user',Isemail.email)
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
    <form onSubmit={handlesubmit} className=''>
        <label>Email</label>
    <input type='email' className='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter a Email'></input>
    <label>Password</label>
    <input type='password' className='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter a Password'></input>
    {error}
    <button type='submit'>Login</button>
    </form>
  )
}

export default Login