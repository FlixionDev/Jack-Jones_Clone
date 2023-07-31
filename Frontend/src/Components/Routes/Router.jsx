import React,{Suspense} from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Accessories from '../All_Products_Pages/Accessories/Accessories'
import Clothing from '../All_Products_Pages/Clothing/Clothing'
import Footwear from '../All_Products_Pages/Footwear/Footwear'
import Innerwear from '../All_Products_Pages/Innerwear/Innerwear'
import Kids from '../All_Products_Pages/Kids/Kids'
import Loungewear from '../All_Products_Pages/Loungewear/Loungewear'
import Newin from '../All_Products_Pages/Newin/Newin'
import Sales from '../All_Products_Pages/Sales/Sales'
import ProductDescription from '../ProductDescription/ProductDescription'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout'
//const Accessories= React.lazy(()=>import('../All_Products_Pages/Accessories/Accessories'));
export default function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<><Navbar/><LandingPage/><Footer/></>}/>
            <Route path='/register' element={<><Navbar/><Signup/><Footer/></>}/>
            <Route path='/login' element={<><Navbar/><Login/><Footer/></>}/>
            <Route path='/accessories' element={<><Navbar/><Accessories /><Footer/></>}/>
            <Route path='/accessories/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/clothings' element={<><Navbar/><Clothing/><Footer/></>}/>
            <Route path='/clothings/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/footwears' element={<><Navbar/><Footwear/><Footer/></>}/>
            <Route path='/footwears/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/innerwears' element={<><Navbar/><Innerwear/><Footer/></>}/>
            <Route path='/innerwears/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/kids' element={<><Navbar/><Kids/><Footer/></>}/>
            <Route path='/kids/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/loungewears' element={<><Navbar/><Loungewear/><Footer/></>}/>
            <Route path='/loungewears/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/new_in' element={<><Navbar/><Newin/><Footer/></>}/>
            <Route path='/new_in/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/sales' element={<><Navbar/><Sales/><Footer/></>}/>
            <Route path='/sales/:id'element={<><Navbar/><ProductDescription/><Footer/></>}/>
            <Route path='/cart' element={<><Navbar/><PrivateRoute><Cart/></PrivateRoute><Footer/></>}/>
            <Route path='/checkout' element={<><Navbar/><PrivateRoute><Checkout/></PrivateRoute><Footer/></>}/>
            <Route path='*' element={<><Navbar/><h2>404, Page not found</h2><Footer/></>}/>
        </Routes>
    </div>
  )
}
