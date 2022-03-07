import React from 'react'
import './login.css'

const Login = () => {

    

  return (
    <div className='box'>
        <h1 className='header'>Create an Account</h1>
        
        <div className='d1'>
         <h2 className='h2'>Already have an account?</h2>
         <a className='signin' href='#'>Sign In</a>
        </div>
        
        <div className='inputs'>
        <input placeholder='First Name' className='i1'></input>
        <input placeholder='Last Name' className='i1'></input>
        <input placeholder='Email' className='email'></input>

         <button className='b1'>Sign Up</button>
         <div className='cond'>
         <input className='b2' type={"checkbox"}></input>
         <label className='l1'>I have read and agree to the Terms of Service</label>
         </div>
         
        </div>
        
        
    </div>
  )
}

export default Login