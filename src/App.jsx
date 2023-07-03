import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Router from './Components/Routes/Router'
import { useSelector } from 'react-redux'
function App() {
  return (
    <div className="App">
     <Router/>
    </div>
  )
}

export default App
