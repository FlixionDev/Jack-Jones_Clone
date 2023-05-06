import React from 'react'
import { Link } from 'react-router-dom'
import usericon from './Icon/User_Icon.png'
import message from './Icon/message.png'
import vib from './Icon/vib.png'
import lock from './Icon/lock.png'
import calendar from './Icon/calendar.png'
import style from './Signup.module.css'
export default function Signup() {
  return (
    <div>
      <div className={style.SignupContainer}>
        <p className={style.pageTitle}>Signup with</p>
        <div className={style.innerDiv}>
          <img className={style.imgIcon} src={usericon} />
          <input className={style.inputTag} placeholder='Enter Your Name*' />
        </div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={message} />
          <input className={style.inputTag} placeholder='Your Email Address*' /></div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={vib} />
          <input className={style.inputTag} placeholder='Mobile Number*' /></div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={lock} />
          <input className={style.inputTag} placeholder='Choose Password*' /></div>
        <div className={style.innerDiv}><img className={style.imgIcon} src={calendar} />
          <input type='date' className={style.inputTag} placeholder='Date Of Birth*' /></div>
        <div style={{width:'90%',border:"2px solid",margin:'auto',marginTop:'15px'}}><button style={{width:'100%',backgroundColor:'#002855',color:'white',padding:'6px'}}>Register</button></div>
        <div style={{width:'90%',margin:'auto',marginTop:'15px',paddingBottom:'20px'}}><p style={{textAlign:'center'}}>ALREADY REGISTERED? <Link style={{color:'#002855 '}} to='/login'>LOG IN</Link></p></div>
      </div>
    </div>
  )
}
