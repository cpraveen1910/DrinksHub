import {useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [curState,setCurState]=useState("Sign in")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt ="" />
            </div>
            <div className="login-popup-inputs">
                {curState!=="Sign in"?<input type='text' placeholder='Your Name' required/> :<></>}
                <input type='email' placeholder='Your Email' required/>
                <input type='password' placeholder='Password' required/>
            </div>
            <button className='btn'>
                {curState}
            </button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>
                    By continuing, I agree to terms & privacy policy.
                </p>
            </div>
            {
                curState == "Sign in"
                    ? <p>Create a new account? <span onClick={()=>setCurState("Sign up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={()=>setCurState("Sign in")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup