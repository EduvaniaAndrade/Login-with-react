import React from 'react'
import Myimg2 from '../images/8.png'
import { IoLogoGoogle, IoArrowForward } from "react-icons/io5";

export default function contentLogin() {
  return (
    <div className='ContainerLogin'>
      <img src={Myimg2} alt='Logotipo' className='logo' />
      <h1>Welcome Back</h1>
      <button className='google-login'><IoLogoGoogle className='icon-google' /> Log in with Google</button>
      <span className='email-login'>OR LOGIN WITH EMAIL</span>
      <input type='email' placeholder='You Email' />
      <input type='password' placeholder='You Password' />
      <div className='keep-logged'>
        <span className='forget-password'><input type='checkbox' className='checkBox' /> Keep me logged in</span>
        <span>Forget password</span>
      </div>
      <button className='submit-button'>Log in <IoArrowForward className='icon'/></button>
      <hr/>
      <div className='new-account'>
        <span>Don't have an account yet?</span>
        <span className='span-link'>Sign up</span>      
      </div>
    </div>
  )
}
