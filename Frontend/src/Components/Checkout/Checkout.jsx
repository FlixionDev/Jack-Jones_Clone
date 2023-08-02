import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteCartProduct } from '../../Redux/Action/ThunkAction'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'


export default function Checkout() {
  const cartItem = useSelector((storeData) => storeData.cart)
  const [addressCheck, setAddressCheck] = useState("existAdd");
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useState(false)
  useEffect(() => {
    setTotalPrice(cartItem.reduce((total, el) => {
      if (el.price) {
        return (el.price * el.quantity) + total
      } else {
        return (999 * el.quantity) + total
      }
    }, 0))
  }, [state])
  let cartProductDelete = bindActionCreators(deleteCartProduct, dispatch);
  const removeProduct = (ind) => {
    cartProductDelete(ind);
    setState(!state)
  }
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "60% 40%" }}>
        <div style={{ border: "2px solid black" }}>
          <h1 style={{ textAlign: "center", color: "#444", fontSize: "30px" }}>Address</h1>
          <p>Delivery Details</p>
          <div><input type='radio' name='address' id='existAddress' onChange={() => { setAddressCheck("existAdd") }} defaultChecked value='existAddress' /> I want to use an existing address</div>
          {
            addressCheck === "existAdd" ? <div>
              hiii
            </div> : null
          }
          <div><input type='radio' name='address' id='newAddress' onChange={() => { setAddressCheck("newAdd") }} value='newAddress' /> I want to use a new address</div>
          {
            addressCheck === "newAdd" ? <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
              <div>
                <label>* first name</label><br />
                <input style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} type="text" />
              </div>
              <div>
                <label>* last name</label><br />
                <input style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} type="text" />
              </div>
              <div>
                <label>* Address line 1</label><br />
                <input style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} type="text" />
              </div>
              <div>
                <label>* Address line 2</label><br />
                <input style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} type="text" />
              </div>
              <div>
                <label>* Postal code</label><br />
                <input style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} type="number" />
              </div>
              <div>
                <label>* City</label><br />
                <input style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} type="text" />
              </div>
              <div>
                <label>* State</label><br />
                <select id="country-state" style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }} name="country-state">
                  <option value="">Select state</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
              </div>
              <div>
                <label>* Country</label><br />
                <select style={{ border: "1px solid grey", width: "80%", height: "40px", outline: "none", padding: "5px" }}>
                  <option>India</option>
                </select>
              </div>
            </div> : null
          }
          <div style={{}}>
            <button style={{ backgroundColor: "#002855", color: "white" }}>Continue</button>
          </div>
        </div>
        <div style={{ border: "2px solid black" }}>
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
