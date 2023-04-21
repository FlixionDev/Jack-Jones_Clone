import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
export default function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<><Navbar/><LandingPage/><Footer/></>}/>
            <Route path='/register' element={<><Navbar/><Signup/><Footer/></>}/>
            <Route path='/login' element={<><Navbar/><Login/><Footer/></>}/>
        </Routes>
    </div>
  )
}
