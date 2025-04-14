import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import Payment from '../Payment/Payment'
//const Accessories= React.lazy(()=>import('../All_Products_Pages/Accessories/Accessories'));
export default function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/accessories/:id' element={<ProductDescription />} />
        <Route path='/clothings' element={<Clothing />} />
        <Route path='/clothings/:id' element={<ProductDescription />} />
        <Route path='/footwears' element={<Footwear />} />
        <Route path='/footwears/:id' element={<ProductDescription />} />
        <Route path='/innerwears' element={<Innerwear />} />
        <Route path='/innerwears/:id' element={<ProductDescription />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/kids/:id' element={<ProductDescription />} />
        <Route path='/loungewears' element={<Loungewear />} />
        <Route path='/loungewears/:id' element={<ProductDescription />} />
        <Route path='/new_in' element={<Newin />} />
        <Route path='/new_in/:id' element={<ProductDescription />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/sales/:id' element={<ProductDescription />} />
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
        <Route path='*' element={<h2>404, Page not found</h2>} />
      </Routes>
      <Footer />
    </div>
  )
}
