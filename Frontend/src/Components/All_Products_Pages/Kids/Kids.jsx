import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Kids.module.css'
import { thunkKidsAction } from '../../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';
import { useSelector,useDispatch } from 'react-redux';
export default function Kids() {
  const dispatch=useDispatch();
  let productData=useSelector((storeData)=>storeData.kids)
  document.title="Jack & Jones"
  useEffect(() => {
    // fetchProduct("https://curious-hare-jewelry.cyclic.app/kids");
    let actionThunk=bindActionCreators(thunkKidsAction,dispatch)
    actionThunk();
  },[])
  // const fetchProduct = (url) => {
  //   fetch(`${url}`).then((res) => { return res.json() }).then((res) => { setState(res) })
  // }
  
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{font:'24px',padding:"10px 10px 20px 0"}}>KIDS CLOTHES  {productData.length > 1 ? <span style={{color:'gray'}}>{productData.length+1}</span> : null}</h1>
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
