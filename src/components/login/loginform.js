import React from 'react'
import './loginform.css'

const loginform = () => {
  return (
    <div className='login-form container'>
        <form>
            <h1>Login</h1>
            <div className='username'>
                <input type='text' placeholder='Username' name='username' id='username' required/>
            </div>
            <div className='password'>
                <input type='password' placeholder='Password' name='password' id='password' required/>
            </div>
            <p>Forgot password?</p>
            <input type='submit' value='Login' className='btn btnform-submit'/>
            <p className='signup'>Not a member? Sign up</p>
        </form>
    </div>
  )
}

export default loginform