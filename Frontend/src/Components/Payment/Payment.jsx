import React, { useEffect, useRef, useState } from 'react'
import JJicon from '../Navbar/images/JJ.webp'
import { useSelector } from 'react-redux';
import style from './Payment.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { cartAction } from '../../Redux/Action/Action';
import { useDispatch } from 'react-redux';
export default function Payment() {
  const toast=useToast();
  const navigate=useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [paymentMethod, setPaymentMethod] = useState("card");
  const dispatch=useDispatch();
  const [codCheck,setCodCheck]=useState(false)
  let codRef=useRef(null)
  const [cardData,setCardData]=useState({
    number:"",
    expiry:startDate,
    cvv:""
  })
  const cartItem = useSelector((storeData) => storeData.cart)
  console.log(cartItem)

  useEffect(() => {
    let discountAmt = 0;
    if (sessionStorage.getItem("coupon") == "NEW100") {
      discountAmt = -100;
    }
    setTotalPrice(cartItem.reduce((total, el) => {
      if (el.price) {
        return (el.price * el.quantity) + total
      } else {
        return (999 * el.quantity) + total
      }
    }, discountAmt))
  }, [state])
  const changeMethod = (value) => {
    setPaymentMethod(value)
  }
  const paymentFunc=()=>{
    if(cardData.number.length===16 && cardData.cvv.length==3){
      toast({ position:"top",description: `Payment done!, Your order is successfully placed`,status: "success",isClosable:true })
      sessionStorage.removeItem("coupon");
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("selectedAddress");
      cartAction([],dispatch)
      navigate("/")
    }else if(cardData.cvv.length!=3 && cardData.number.length!=16){
      toast({ position:"top",description: 'Card number should be 16 length and CVV should have 3 length',status: "warning",isClosable:true })
    }else if(cardData.cvv.length==3 && cardData.number.length!=16){
      toast({ position:"top",description: 'Card number should be 16 length',status: "warning",isClosable:true })
    }else if(cardData.cvv.length!=3 && cardData.number.length==16){
      toast({ position:"top",description: 'CVV should have 3 length',status: "warning",isClosable:true })
    }
  }

  const codFunc=()=>{
    if(codCheck){
      toast({ position:"top",description: `Your order is successfully placed`,status: "success",isClosable:true })
      sessionStorage.removeItem("coupon");
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("selectedAddress");
      cartAction([],dispatch)
      navigate("/")
    }else{
      toast({ position:"top",description: 'Please click on cash on delivery option before placing order',status: "warning",isClosable:true })
    }
  }
 
  return (
    <div style={{ backgroundColor: "#f8f8f8", height: "100vh" }}>
      <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", height: "100px", width: "50%", margin: "auto", justifyContent: "space-around", alignItems: "center" }}>
          <div><img src={JJicon} /></div>
          <div><article style={{ fontSize: "18px", fontWeight: "600" }}>Order on store jackandjones</article></div>
          <div><p>Amount</p><p style={{ fontWeight: "500" }}>₹ {totalPrice}</p></div>
        </div>
      </div>
      <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold", margin: "7px" }}>Payment Methods</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ border: "1px solid grey", minWidth: "250px" }}>
          <div style={{ backgroundColor: paymentMethod === "card" ? "#DBDBDB" : "white", cursor: "pointer", padding: "15px" }} onClick={() => { changeMethod("card") }}>
            <button> CREDIT / DEBIT CARD</button>
          </div>
          <div style={{ backgroundColor: paymentMethod === "cash" ? "#DBDBDB" : "white", cursor: "pointer", padding: "15px" }} onClick={() => { changeMethod("cash") }} >
            <button>PAY ON DELIVERY</button>
          </div>
        </div>
        <div style={{ border: "1px solid grey", minWidth: "350px" }}>
          {
            paymentMethod === "card" ? <div>
              <h2 style={{ fontSize: "18px", fontWeight: "400", padding: "7px" }}>Enter Credit / Debit card details</h2>
              <label className={style.label}>Card number</label>
              <input className={style.input} type='number' onChange={(e)=>{setCardData({...cardData,number:e.target.value})}} placeholder='Enter Card Number' />
              <div>
                <label className={style.label}>Expiry</label>
                {/* <input className={style.input} placeholder='MM/YY' /> */}
               
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date)
                    setCardData({...cardData,expiry:date})
                  } }
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  minDate={new Date()}
                  className={`${style.input} ${style.datepicker}`}
                />
                  

              </div>
              <div>
                <label className={style.label}>CVV</label>
                <input className={`${style.input} ${style.datepicker}`} onChange={(e)=>{setCardData({...cardData,cvv:e.target.value})}} type='number' placeholder='CVV' />
              </div>
              <button className={style.proceedToPayBtn} onClick={paymentFunc}>Proceed To Pay</button>
            </div> : <div>
              <input type='radio' id='cod' style={{ marginLeft: '7px' }} onClick={()=>{setCodCheck(true)}} defaultChecked={codCheck ? true : false} value={codCheck} placeholder='Cash On Delivery' /><label className={style.label} style={{ display: "inline", fontSize: "21px", cursor: "pointer" }} htmlFor='cod'>Cash On Delivery</label>
              <div style={{ padding: "7px" }}><button className={style.proceedToPayBtn} style={{ width: "100%", margin: "0" }} onClick={codFunc}>Place Order</button></div>
            </div>
          }


        </div>
      </div>
    </div>
  )
}
