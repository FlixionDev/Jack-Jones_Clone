import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartProduct } from '../../Redux/Action/ThunkAction'
import { bindActionCreators } from 'redux'
export default function Cart() {
  let cartItem = useSelector((storeData) => storeData.cart)
  document.title="Shopping Cart"
  const [state,setState]=useState(false)
  const [totalPrice,setTotalPrice]=useState(0);
  useEffect(()=>{
    setTotalPrice(cartItem.reduce((total,el)=>{
      if(el.price){
        return  (el.price*el.quantity)+total
      }else{
        return  (999*el.quantity)+total
      }
    },0))
  },[state])
  const dispatch=useDispatch();
  let cartProductDelete=bindActionCreators(deleteCartProduct,dispatch);
  const removeProduct=(ind)=>{
    cartProductDelete(ind);
    setState(!state)
  }
  return (
    <div>
      <div style={{width:"70%"}}>
        {
          cartItem.length > 0 ?
          <table style={{width:'100%',textAlign:"center"}}>
          <thead style={{}}>
            <tr>
              <th>ITEM(S)</th>
              <th></th>
              <th></th>
              <th>TOTAL ₹ {totalPrice}</th>
            </tr>
            <tr>
              <th>PRODUCT</th>
              <th></th>
              <th>PRICE </th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
              {
                cartItem.map((el,ind)=>{
                  return <tr key={ind+1}>
                    <td><img width={"55px"} height={"55px"} style={{margin:"auto"}} src={el.first_img}/></td>
                    <td style={{textAlign:"left"}}>
                      <p>{el.title}</p>
                      <p>Non Returnable Product</p>
                      <p>Size : {el.size}</p>
                      <button onClick={()=>{removeProduct(ind)}}>remove</button>
                    </td>
                    <td>{el.price ? `₹ ${el.price}` : `₹ 999`}</td>
                    <td>
                      <select onChange={(e)=>{
                          el.quantity=e.target.value;
                          setState(!state)
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
      <div>

      </div>
    </div>
  )
}
