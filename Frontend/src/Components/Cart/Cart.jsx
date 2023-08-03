import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartProduct } from '../../Redux/Action/ThunkAction'
import { bindActionCreators } from 'redux'
import style from './Cart.module.css'
import { DeleteIcon } from '@chakra-ui/icons'
import { finalAmountAction } from '../../Redux/Action/Action'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function Cart() {
  let cartItem = useSelector((storeData) => storeData.cart)
  let ref1 = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const [state, setState] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCheck,setCouponCheck]=useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    let discountAmt=0;
    if(sessionStorage.getItem("coupon")=="NEW100"){
      discountAmt=-100;
      setCouponCheck(true)
    }
    setTotalPrice(cartItem.reduce((total, el) => {
      if (el.price) {
        return (el.price * el.quantity) + total
      } else {
        return (999 * el.quantity) + total
      }
    }, discountAmt))
  }, [state,totalPrice])
  let cartProductDelete = bindActionCreators(deleteCartProduct, dispatch);
  const removeProduct = (ind) => {
    cartProductDelete(ind);
    setState(!state)
  }
  const applyCouponfunc = () => {
    sessionStorage.removeItem("coupon");
    if(cartItem.length > 0){
      if (ref1.current.value == "NEW100") {
        setTotalPrice(totalPrice-100);
        toast({ position: "top", description: 'You get Rs100 OFF in this purchase', status: "success", isClosable: true });
        setCouponCheck(true);
        sessionStorage.setItem("coupon","NEW100");
        finalAmountAction(totalPrice-100,dispatch)
      } else {
        toast({ position: "top", description: 'Please enter valid coupon code', status: "error", isClosable: true })
        setCouponCheck(false)
        sessionStorage.removeItem("coupon")
      }
    }else{
      toast({ position: "top", description: 'Please add some product in your cart', status: "error", isClosable: true })
      setCouponCheck(false)
      sessionStorage.removeItem("coupon")
    }
  }
  const handleContinueShopping=()=>{
    navigate("/");
  }
  const gotoCheckout=()=>{
    navigate("/checkout")
  }
  return (
    <>
    {
      cartItem.length > 0 ?
      <div className={style.root}>
      <div style={{ background: '#faf9f8' }}>
        {
          cartItem.length > 0 ?
            <table style={{ width: '100%', textAlign: "center" }}>
              <thead>
                <tr style={{ color: "black", fontSize: "12px", padding: "7px 0" }}>
                  <th style={{ padding: "5px" }}>ITEM(S)</th>
                  <th></th>
                  <th></th>
                  <th>TOTAL ₹ {totalPrice}</th>
                </tr>
                <tr style={{ color: "#989898", fontSize: "14px", background: "white" }}>
                  <th style={{ padding: "14px 0 7px 0" }}>PRODUCT</th>
                  <th></th>
                  <th>PRICE </th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItem.map((el, ind) => {
                    return <tr key={ind + 1}>
                      <td><img width={"55px"} height={"55px"} style={{ margin: "auto" }} src={el.first_img} /></td>
                      <td style={{ textAlign: "left", paddingBottom: '10px' }}>
                        <p style={{ fontSize: "13px", color: "#333333" }}>{el.title}</p>
                        <p style={{ fontSize: "13px", color: "#a7a7a7" }}>Non Returnable Product</p>
                        <p style={{ fontSize: "13px", color: "#333333" }}>Size : {el.size}</p>
                        <button style={{ fontSize: "14px", color: "#a7a7a7" }} onClick={() => { removeProduct(ind) }}><DeleteIcon /> remove</button>
                      </td>
                      <td style={{ fontSize: "14px" }}>{el.price ? `₹ ${el.price}` : `₹ 999`}</td>
                      <td>
                        <select className={style.QuantitySelectTag} onChange={(e) => {
                          el.quantity = e.target.value;
                          setState(!state)
                          sessionStorage.setItem("cart",JSON.stringify(cartItem))
                        }} defaultValue={el.quantity}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table> : "Your Cart is Empty"
        }
      </div>
      <div style={{ background: '#faf9f8', paddingTop: "15px", height: "256px" }}>
        <div className={style.totalSubTotalDiv}>
          <b className={style.bTag}>Sub-Total :</b>
          <p>{totalPrice}</p>
        </div>
        <hr style={{ borderTop: "1px solid gray" }} />
        <div className={style.totalSubTotalDiv}>
          <b className={style.bTag}>Total :</b>
          <p>{totalPrice}</p>
        </div>
        <hr style={{ borderTop: "1px solid gray", paddingBottom: '10px' }} />
        <h5 className={style.h5}>Shop for ₹201 or more to get free shipping</h5>
        <div>
          <p style={{ color: "#999", fontSize: "14px", fontWeight: '400', paddingBottom: "7px", marginLeft: '10px' }}>* COUPON CODE</p>
          <div style={{ margin: "0 8px" }}>
            <input className={style.couponInput} ref={ref1} onChange={()=>{
              sessionStorage.removeItem("coupon")
              setCouponCheck(false)
              }} placeholder='Enter your coupon here' />
            <button className={style.applyCouponBtn} disabled={couponCheck ? true : false} style={couponCheck ? {backgroundColor:"grey"}: null} onClick={applyCouponfunc}>{couponCheck ? "Coupon applied" : "APPLY COUPON"}</button>
          </div>
        </div>
        <div style={{ margin: "0 8px" }}>
          <button className={style.buyNowBtn} onClick={gotoCheckout}>BUY NOW</button>
        </div>
      </div>
    </div> : 
    <div style={{ background: '#faf9f8',padding:"20px" }}>
      <div style={{width:"80px",height:"80px",margin:"auto",border:"3px solid #9e9e9e",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"70px"}}><i style={{fontSize:"40px",color:"#9e9e9e"}} class="fa fa-times" aria-hidden="true"></i></div>
      <h1 style={{textAlign:"center",color:"#9e9e9e"}}>Your shopping cart is empty!</h1>
      <div style={{width:"200px",margin:"auto"}}>

      <button className={style.buyNowBtn} onClick={handleContinueShopping}>Continue</button>
      </div>
    </div>
    }
    </>
  )
}
