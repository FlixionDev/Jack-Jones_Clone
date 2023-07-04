import React, { useEffect, useproductData } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Newin.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { thunkNewinAction } from '../../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';
export default function Newin() {
  let productData=useSelector((storeData)=>storeData.newin);
  let dispatch=useDispatch();
  document.title="Latest Mens Collection at JACK&JONES"
  useEffect(() => {
    //fetchProduct("https://curious-hare-jewelry.cyclic.app/new_in");
    let newinAction=bindActionCreators(thunkNewinAction,dispatch);
    newinAction();

  },[])
  const fetchProduct = (url) => {
    fetch(`${url}`).then((res) => { return res.json() }).then((res) => { setState(res) })
  }
  
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{font:'24px',padding:"10px 10px 20px 0"}}>NEW IN  {productData.length > 1 ? <span style={{color:'gray'}}>{productData.length+1}</span> : null}</h1>
      <div className={style.ProductCardDiv}>
      {
        productData.map((el,i)=>{
          return <div key={i+1}><ProductCard {...el}/></div>
        })
      }
      </div>
    </div>
  )
}
