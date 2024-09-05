import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import usericon from './Icon/User_Icon.png'
import message from './Icon/message.png'
import vib from './Icon/vib.png'
import lock from './Icon/lock.png'
import calendar from './Icon/calendar.png'
import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
export default function Signup() {
  const [state, setState] = useState({});
  document.title = "User Register"
  const toast = useToast();
  const navigate = useNavigate();
  const registerUser = () => {
    if (state.name != "" && state.email != "" && state.mobile != "" && state.pass != "" && state.dob != "") {
      fetch(`https://backendserverjackjones.onrender.com/users/register`, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json()).then((res) => {
        if (res.message == "Your email is already registered. Please login!") {
          toast({ position: "top", description: 'User already Exist. Please use different email address to signup', status: "warning", isClosable: true })
        } else if(res.message == "User Register Successfull") {
          toast({ position: "top", description: 'User Register successfull. Please login', status: "success", isClosable: true })
          navigate("/login")
        }else if(res.message == "Something went wrong"){
          toast({ position: "top", description: res.message, status: "error", isClosable: true })
        }
      })
    }
  }
  return (
    <div>
      <div className={style.SignupContainer}>
        <p className={style.pageTitle}>Signup with</p>
        <div className={style.innerDiv}>
          <img className={style.imgIcon} src={usericon} />
          <input className={style.inputTag} onChange={(e) => { setState({ ...state, name: e.target.value }) }} placeholder='Enter Your Name*' />
        </div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={message} />
          <input className={style.inputTag} type='email' onChange={(e) => { setState({ ...state, email: e.target.value }) }} placeholder='Your Email Address*' /></div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={vib} />
          <input className={style.inputTag} placeholder='Mobile Number*' type='number' onChange={(e) => { setState({ ...state, mobile: e.target.value }) }} /></div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={lock} />
          <input className={style.inputTag} placeholder='Choose Password*' onChange={(e) => { setState({ ...state, pass: e.target.value }) }} /></div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={calendar} />
          <input type='date' className={style.inputTag} placeholder='Date Of Birth*' onChange={(e) => { setState({ ...state, dob: e.target.value }) }} /></div>
        <div style={{ width: '90%', border: "2px solid", margin: 'auto', marginTop: '15px' }}><button style={{ width: '100%', backgroundColor: '#002855', color: 'white', padding: '6px' }} onClick={registerUser}>Register</button></div>
        <div style={{ width: '90%', margin: 'auto', marginTop: '15px', paddingBottom: '20px' }}><p style={{ textAlign: 'center' }}>ALREADY REGISTERED? <Link style={{ color: '#002855 ' }} to='/login'>LOG IN</Link></p></div>
      </div>
    </div>
  )
}
