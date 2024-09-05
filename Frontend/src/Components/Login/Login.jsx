import React from 'react'
import { Link } from 'react-router-dom'
import usericon from './Icon/User_Icon.png'
import message from './Icon/message.png'
import vib from './Icon/vib.png'
import lock from './Icon/lock.png'
import calendar from './Icon/calendar.png'
import style from './Login.module.css'
import many from './Icon/many.png'
import fb from './Icon/fb.png'
import google from './Icon/Google.svg.webp'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { thunkUserLoginDone } from '../../Redux/Action/ThunkAction'
import { bindActionCreators } from 'redux'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
export default function Login() {
  const [state, setState] = React.useState(false);
  const [credential, setCredential] = useState({});
  document.title="Account Login"
  const toast=useToast();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  let isLoginAction = bindActionCreators(thunkUserLoginDone, dispatch);
  const submitDataForLogin = () => {
    fetch(`https://backendserverjackjones.onrender.com/users/login`,{
      method:"POST",
      body:JSON.stringify(credential),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((res) => res.json()).then((res) => {
      if(res.message=="Wrong Password"){
        toast({ position:"top",description: 'Please enter correct password',status: "warning",isClosable:true })
      }else if(res.message=="No account found with this email. Please Register"){
        toast({ position:"top",description: 'No account find, Please create first',status: "error",isClosable:true })
        navigate("/register");
      }else if(res.message=="Login successfull"){
        sessionStorage.setItem("isLogin",true);
        sessionStorage.setItem("userDetails",JSON.stringify({name:res.name,email:res.email}));
        sessionStorage.setItem("token",res.token)
        isLoginAction()
        toast({ position:"top",description: `Hey ${res.name}, Login successfull!`,status: "success",isClosable:true })
        navigate("/")
      }
    })

  }
  return (
    <div>
      <div className={style.SignupContainer}>
        <p style={{ textAlign: 'center', padding: "20px 0", fontSize: "18px" }}>LOG IN</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ border: '1px solid grey', width: '100%', borderBottom: state ? "1px solid orange" : "1px solid grey", padding: "6px" }}><button style={{ fontSize: "17px", marginLeft: "20%", color: state ? "orange" : "black" }} onClick={() => { setState(true) }}>LOGIN WITH OTP</button></div>
          <div style={{ border: '1px solid grey', width: '100%', borderBottom: !state ? "1px solid orange" : "1px solid grey", padding: "6px" }}><button style={{ fontSize: "17px", marginLeft: "20%", color: state ? "black" : "orange" }} onClick={() => { setState(false) }}>LOGIN WITH EMAIL</button></div>
        </div>
        <div>
          <img src={many} style={{ width: '108px', margin: 'auto' }} />
        </div>
        <div style={{ padding: "10px 0" }}>
          {
            state ? <>
              <div style={{ display: 'flex', background: "#f1f1f1", width: '90%', margin: 'auto', marginTop: "15px", padding: "6px" }}><img style={{ width: "35px", height: "35px" }} src={vib} />
                <input style={{ width: '100%', backgroundColor: '#f1f1f1', border: "none", outline: 'none', marginLeft: '15px' }} placeholder='Mobile Number*' /></div>
            </>
              :
              <>
                <div style={{ display: 'flex', background: "#f1f1f1", width: '90%', margin: 'auto', marginTop: "15px", padding: "6px" }}><img style={{ width: "35px", height: "35px" }} src={message} />
                  <input style={{ width: '100%', backgroundColor: '#f1f1f1', border: "none", outline: 'none', marginLeft: '15px' }} onChange={(e) => { setCredential({ ...credential, email: e.target.value }) }} placeholder='Your Email Address*' /></div>
                <div style={{ display: 'flex', background: "#f1f1f1", width: '90%', margin: 'auto', marginTop: "15px", padding: "6px" }}><img style={{ width: "35px", height: "35px" }} src={lock} />
                  <input type='password' style={{ width: '100%', backgroundColor: '#f1f1f1', border: "none", outline: 'none', marginLeft: '15px' }} onChange={(e) => { setCredential({ ...credential, pass: e.target.value }) }} placeholder='Choose Password*' /></div>
              </>
          }
        </div>
        <div>
          <p style={{ fontSize: '18px', textAlign: "center", color: "grey", padding: "10px 0" }}>OR</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
          <div style={{ display: 'flex', border: "1px solid grey", padding: '5px 10px', borderRadius: '4px', cursor: "pointer" }}><img style={{ width: "20px" }} src={google} /><span style={{ marginLeft: "10px" }}>Sign in</span></div>
          <div style={{ display: 'flex', border: "1px solid grey", padding: '5px 10px', borderRadius: '4px', cursor: "pointer" }}><img style={{ width: "20px" }} src={fb} /><span style={{ marginLeft: "10px" }}>Facebook</span> </div>
        </div>
        <div>
          <div style={{ width: '90%', border: "2px solid", margin: 'auto', marginTop: '15px' }}>
            {
              !state ? <button style={{ width: '100%', backgroundColor: '#002855', color: 'white', padding: '6px' }} onClick={submitDataForLogin}>Login</button> : <button style={{ width: '100%', backgroundColor: '#002855', color: 'white', padding: '6px' }}>Login</button>
            }
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "space-between", padding: '10px 20px', fontSize: '14px' }}>
          <div style={{ color: "#002855" }}>FORGOT PASSWORD</div>
          <div style={{ color: "grey" }}>NOT REGISTERED USER?<Link to='/register' style={{ color: '#002855' }}> SIGN UP</Link></div>
        </div>
      </div>
    </div>
  )
}
