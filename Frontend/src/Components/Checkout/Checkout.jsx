import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteCartProduct } from '../../Redux/Action/ThunkAction'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from '../Checkout/Checkout.module.css'
import { useNavigate } from 'react-router-dom'
export default function Checkout() {
  const cartItem = useSelector((storeData) => storeData.cart)
  const navigate=useNavigate();
  const [addressCheck, setAddressCheck] = useState("existAdd");
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useState(false)
  const [address,setAddress]=useState({
    fname:"",
    lname:"",
    addLine1:"",
    addLine2:"",
    postcode:"",
    city:"",
    state:"",
    country:"india"
  })
  const [listaddress,setListaddress]=useState("");
  useEffect(() => {
    let discountAmt=0;
    if(sessionStorage.getItem("coupon")=="NEW100"){
      discountAmt=-100;
    }
    setTotalPrice(cartItem.reduce((total, el) => {
      if (el.price) {
        return (el.price * el.quantity) + total
      } else {
        return (999 * el.quantity) + total
      }
    }, discountAmt))
  }, [state])
  useEffect(()=>{
    fetch("https://glamorous-ring-newt.cyclic.app/address",{
      headers:{
        "Authorization":sessionStorage.getItem("token")
      }
    }).then(res=>res.json()).then((res)=>{
      setListaddress(res)
      if(res.length > 0){
      sessionStorage.setItem("selectedAddress",JSON.stringify(res[0]))
      }
    }).catch(err=>console.log(err))
  },[])
  // console.log(listaddress)
  let cartProductDelete = bindActionCreators(deleteCartProduct, dispatch);
  const removeProduct = (ind) => {
    cartProductDelete(ind);
    setState(!state)
  }
  const submitAddress=()=>{
    if(address.fname!="" && address.lname!="" && address.addLine1!="" && address.addLine2!="" && address.postcode!="" && address.city!="" && address.state!="" && address.country!=""){
      sessionStorage.setItem("selectedAddress",JSON.stringify(address))
      fetch(`https://glamorous-ring-newt.cyclic.app/address/`,{
        method:"POST",
        body:JSON.stringify(address),
        headers:{
          "Authorization":sessionStorage.getItem("token"),
          "Content-Type":"application/json"
        }
      }).then(res=>res.json()).then((res)=>{
        console.log(res)
        navigate("/payment")
      }).catch((err)=>console.log(err))
    }
  }
  const proceedToPayment=()=>{
    navigate("/payment")
  }
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "60% 40%" }}>
        <div style={{ padding:"20px" }}>
          <h1 style={{ textAlign: "center", color: "#444", fontSize: "30px" }}>Address</h1>
          <p>Delivery Details</p>
          <div><input type='radio' name='address' id='existAddress' onChange={() => { setAddressCheck("existAdd") }} defaultChecked value='existAddress' /> I want to use an existing address</div>
          {
            addressCheck === "existAdd" ? <div>
              <select onChange={(e)=>{sessionStorage.setItem("selectedAddress",JSON.stringify(e.target.value))}} style={{width:"100%", border: "1px solid grey",height: "40px",outline: "none",padding: "5px"}}>
                {/* {
                  listaddress.length > 0 ? <option value="">Please select address</option> : ""
                } */}
                {
                  listaddress.length > 0 ? 
                    listaddress.map((el,ind)=>{
                      return <option key={ind+1} value={el.addLine1 +", "+ el.addLine2 +", "+ el.city +", "+ el.postcode +", "+ el.state +", "+ el.country}>{el.addLine1 +", "+ el.addLine2 +", "+ el.city +", "+ el.postcode +", "+ el.state +", "+ el.country}</option>
                    })
                   : <option value=''>No saved address found</option>
                }
              </select>
            </div> : null
          }
          <div><input type='radio' name='address' id='newAddress' onChange={() => { setAddressCheck("newAdd") }} value='newAddress' /> I want to use a new address</div>
          {
            addressCheck === "newAdd" ? <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
              <div>
                <label>* first name</label><br />
                <input className={style.addressTag} onChange={(e)=>{setAddress({...address,fname:e.target.value})}} type="text" />
              </div>
              <div>
                <label>* last name</label><br />
                <input className={style.addressTag} onChange={(e)=>{setAddress({...address,lname:e.target.value})}}  type="text" />
              </div>
              <div>
                <label>* Address line 1</label><br />
                <input className={style.addressTag} onChange={(e)=>{setAddress({...address,addLine1:e.target.value})}} type="text" />
              </div>
              <div>
                <label>* Address line 2</label><br />
                <input className={style.addressTag} onChange={(e)=>{setAddress({...address,addLine2:e.target.value})}} type="text" />
              </div>
              <div>
                <label>* Postal code</label><br />
                <input className={style.addressTag} onChange={(e)=>{setAddress({...address,postcode:e.target.value})}} type="text" />
              </div>
              <div>
                <label>* City</label><br />
                <input className={style.addressTag} onChange={(e)=>{setAddress({...address,city:e.target.value})}} type="text" />
              </div>
              <div>
                <label>* State</label><br />
                <select id="country-state" className={style.addressTag} onChange={(e)=>{setAddress({...address,state:e.target.value})}} name="country-state">
                  <option value="">Select state</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div>
                <label>* Country</label><br />
                <select className={style.addressTag} onChange={(e)=>{setAddress({...address,country:e.target.value})}}>
                  <option value="india">India</option>
                </select>
              </div>
            </div> : null
          }
          <div style={{}}>
            <button style={{ backgroundColor: "#002855", color: "white",padding:"7px",margin:"15px 0" }} onClick={addressCheck=="existAdd" ? proceedToPayment : submitAddress}>Continue</button>
          </div>
        </div>
        <div style={{  }}>
          <div style={{ background: '#faf9f8', height: '100%', maxHeight: "600px", overflow: "scroll" }}>
            {
              cartItem.length > 0 ?
                <>
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
                              <select onChange={(e) => {
                                el.quantity = e.target.value;
                                setState(!state)
                                sessionStorage.setItem("cart", JSON.stringify(cartItem))
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
                      <tr>
                        <td></td>
                        <td></td>
                        <td><b >Total :</b></td>
                        <td>₹ {totalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </>
                : <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>Your Cart is Empty</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
