import { border } from '@chakra-ui/react';
import React, { useEffect, useState,useRef } from 'react'
import { useLocation } from 'react-router-dom'
import truck from '../../assets/delivery-truck.png'
import return_icon from '../../assets/return.png'
import hanger from '../../assets/hanger.png'
import { useSelector } from 'react-redux';
import { accessoriesAction, clothingAction, footwearAction, innerwearAction } from '../../Redux/Action/Action';
import { thunkKidsAction, thunkLoungewearAction, thunkNewinAction, thunkSalesAction } from '../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../Redux/Action/Action';
import { useToast } from '@chakra-ui/react';
export default function ProductDescription() {
  const [state, setState] = useState([]);
  const [deliverable,setDeliverable]=useState({});
  const toast=useToast();
  let ref1=useRef(null);

  const dispatch = useDispatch();
  const [selectedimage, setSelectedimage] = useState(false);
  const [size, setSize] = useState("S");
  const { pathname } = useLocation();
  const product = pathname.split("/")
  let productListData = useSelector((storeData) => storeData);
  //  console.log(product)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product[1] == 'accessories') {
      if (productListData.accessories.length == 0) {
        accessoriesAction(dispatch);
      } else {
        let productData = productListData.accessories.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'clothings') {
      if (productListData.clothing.length == 0) {
        clothingAction(dispatch);
      } else {
        let productData = productListData.clothing.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'footwears') {
      if (productListData.footwear.length == 0) {
        footwearAction(dispatch);
      } else {
        let productData = productListData.footwear.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'innerwears') {
      if (productListData.innerwear.length == 0) {
        innerwearAction(dispatch);
      } else {
        let productData = productListData.innerwear.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'kids') {
      if (productListData.kids.length == 0) {
        let kidsAction = bindActionCreators(thunkKidsAction, dispatch);
        kidsAction();
      } else {
        let productData = productListData.kids.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'loungewears') {
      if (productListData.loungewear.length == 0) {
        let loungewearAction = bindActionCreators(thunkLoungewearAction, dispatch);
        loungewearAction();
      } else {
        let productData = productListData.loungewear.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'new_in') {
      if (productListData.newin.length == 0) {
        let newinAction = bindActionCreators(thunkNewinAction, dispatch);
        newinAction();
      } else {
        let productData = productListData.newin.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    } else if (product[1] == 'sales') {
      if (productListData.sales.length == 0) {
        let salesAction = bindActionCreators(thunkSalesAction, dispatch)
        salesAction();
      } else {
        let productData = productListData.sales.filter((el) => { return el._id == product[2] })
        setState(productData)
        setSelectedimage(productData[0].first_img)
      }
    }
  }, [productListData])
  const sendProductToCart = () => {
    cartAction({ ...state[0], "quantity": 1,"size":size }, dispatch)
  }
  const checkPinCode=()=>{
    let pincode=ref1.current.value;
    fetch(`https://api.postalpincode.in/pincode/${pincode}`).then((res=>res.json())).then((res)=>{
      if(res[0].Status=="Error"){
        toast({ position:"top",description: 'Pincode not found',status: "error",isClosable:true })
      }else{
        setDeliverable(res[0].PostOffice[0]);
      }
    })
  }
  return (
    <div style={{ margin: "15px" }}>
      <div style={{ display: "flex", }}>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%", width: '50%' }}>
          {
            state.length > 0 ?
              <div>
                <img style={{ width: "100px", height: "130px", border: selectedimage === state[0].first_img ? "2px solid black" : null, marginBottom: "15px" }} onClick={(e) => { setSelectedimage(e.target.src) }} src={state[0].first_img} />
                <img style={{ width: "100px", height: "130px", border: selectedimage === state[0].second_img ? "2px solid black" : null, }} onClick={(e) => { setSelectedimage(e.target.src) }} src={state[0].second_img} />
              </div> : null
          }
          <div style={{ marginLeft: "15px" }}>
            <img style={{ width: "90%",height:"600px" }} src={selectedimage} />
          </div>
        </div>
        <div style={{ width: '50%' }}>


          <h1 style={{ fontSize: "22px", color: '#002855', marginBottom: '7px' }}>{state.length > 0 ? state[0].title : null}</h1>
          <span style={{ fontWeight: '700', marginTop: "10px" }}>JACK & JONES</span>
          {state.length > 0 ? <>
            <h2 style={{ fontSize: '20px', marginTop: "7px" }}>
              {state[0].price ? `₹ ${state[0].price} ` : `₹ 999 `}
              <span style={{ fontWeight: '700', color: 'darkgreen', fontSize: '16px' }}>
                Inclusive of all taxes
              </span>
            </h2>
          </> : null}
          <h3>Select size</h3>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <div style={{ fontSize: "22px", border: "1px solid gray", padding: '5px', width: '50px', textAlign: 'center', cursor: 'pointer', backgroundColor: size === 'S' ? "#002855" : "", color: size === 'S' ? "white" : "" }} onClick={() => { setSize('S') }}>S</div>
            <div style={{ fontSize: "22px", border: "1px solid gray", padding: '5px', width: '50px', textAlign: 'center', cursor: 'pointer', backgroundColor: size === 'M' ? "#002855" : "", color: size === 'M' ? "white" : "" }} onClick={() => { setSize('M') }}>M</div>
            <div style={{ fontSize: "22px", border: "1px solid gray", padding: '5px', width: '50px', textAlign: 'center', cursor: 'pointer', backgroundColor: size === 'L' ? "#002855" : "", color: size === 'L' ? "white" : "" }} onClick={() => { setSize('L') }}>L</div>
            <div style={{ fontSize: "22px", border: "1px solid gray", padding: '5px', width: '50px', textAlign: 'center', cursor: 'pointer', backgroundColor: size === 'XL' ? "#002855" : "", color: size === 'XL' ? "white" : "" }} onClick={() => { setSize('XL') }}>XL</div>
            <div style={{ fontSize: "22px", border: "1px solid gray", padding: '5px', width: '50px', textAlign: 'center', cursor: 'pointer', backgroundColor: size === 'XXL' ? "#002855" : "", color: size === 'XXL' ? "white" : "" }} onClick={() => { setSize('XXL') }}>XXL</div>
          </div>
          <p style={{ marginTop: "15px", marginBottom: "7px" }}>BEST OFFERS</p>
          <hr style={{ borderTop: "1px solid red" }} />
          <b style={{ fontWeight: "700", color: '#444' }}>Get Rs.100 OFF on your first purchase! Use Code:</b>
          <div style={{display:'flex',alignItems:"center",marginTop:'10px'}}>
          <h1 style={{ border: "1px solid red", width: "100px", borderStyle: "dotted", padding: "8px 16px", textAlign: "center", borderRadius: "25px" }}>NEW100</h1>
          <button
            style={{color:"red",marginLeft:"16px"}}
            onClick={() => {navigator.clipboard.writeText('NEW100')
            toast({ position:"top",description: 'Coupon has been copied',status: "success",isClosable:true })}}
          >
            Tap to copy
          </button>
          </div>
          <button style={{backgroundColor:"#002855",color:'white',width:"60%",fontSize:"18px",padding:"10px",marginTop:'10px'}} onClick={sendProductToCart}>ADD TO CART</button>
          <div>
            <p style={{color:"#002855",marginTop:"10px"}}>CHECK PINCODE FOR DELIVERY</p>
            <input ref={ref1} style={{border:'1px solid #ccc',marginTop:"5px",padding:"5px"}} placeholder='Enter your Pincode'/>
            <button style={{backgroundColor:"#002855",color:'white',padding:"5px 8px",marginLeft:"10px"}} onClick={checkPinCode}>Check</button>
            <p style={{marginTop:"5px"}}>
            {
              deliverable.Name ? `This Product will get Deliver in 3 days in ` : ""
            }
            <span style={{color:"red"}}>
              {
                deliverable.Name ? deliverable.Name : ""
              }
            </span>
            </p>
          </div>
          <div style={{marginTop:'10px'}}>
            <div style={{marginBottom:'8px'}}><span><i className="fas fa-truck"></i></span> Free shipping</div>
            <div style={{marginBottom:'8px'}}><span><i className="fas fa-undo"></i></span> Shop worry-free with our easy return policy</div>
            <div style={{marginBottom:'8px'}}><span><i className="fa fa-credit-card"></i></span> Check out easily with our multiple payment options</div>


          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: "15px" }}>
        <div><img style={{ width: "40px", margin: 'auto' }} src={truck} /><p style={{ textAlign: 'center' }}>FREE SHIPPING</p></div>
        <div><img style={{ width: "40px", margin: 'auto' }} src={return_icon} /><p style={{ textAlign: 'center' }}>EASY RETURNS</p></div>
        <div><img style={{ width: "40px", margin: 'auto' }} src={hanger} /><p style={{ textAlign: 'center' }}>SEVERAL SECURE PAYMENT OPTIONS</p></div>
      </div>
    </div>
  )
}
