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
            <Route path='/accessories' element={<><Navbar/><Footer/></>}/>
            <Route path='/clothing' element={<><Navbar/><Footer/></>}/>
            <Route path='/footwear' element={<><Navbar/><Footer/></>}/>
            <Route path='/innerwear' element={<><Navbar/><Footer/></>}/>
            <Route path='/kids' element={<><Navbar/><Footer/></>}/>
            <Route path='/loungewear' element={<><Navbar/><Footer/></>}/>
            <Route path='/newin' element={<><Navbar/><Footer/></>}/>
            <Route path='/sale' element={<><Navbar/><Footer/></>}/>
            <Route path='*' element={<><Navbar/><h2>404, Page not found</h2><Footer/></>}/>
        </Routes>
    </div>
  )
}
