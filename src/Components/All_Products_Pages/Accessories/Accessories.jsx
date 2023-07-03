import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Accessories.module.css'
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { accessoriesAction } from '../../../Redux/Action/Action';
export default function Accessories() {
  let productData = useSelector((storeData)=>storeData.accessories);
  const dispatch=useDispatch();
  useEffect(() => {
    accessoriesAction(dispatch)
  },[])
  
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{font:'24px',padding:"10px 10px 20px 0"}}>ACCESSORIES FOR MEN  {productData.length > 1 ? <span style={{color:'gray'}}>{productData.length+1}</span> : null}</h1>
     {
      productData.length > 0 ?  <div className={style.ProductCardDiv}>
      {
        productData.map((el,i)=>{
          return <div key={i+1}><ProductCard {...el}/></div>
        })
      }
      </div> : null
     }
    </div>
  )
}
