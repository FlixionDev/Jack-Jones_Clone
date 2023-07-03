import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Footwear.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { footwearAction } from '../../../Redux/Action/Action';
export default function Footwear() {
  let productData = useSelector((storeData) => storeData.footwear);
  const dispatch = useDispatch();
  useEffect(() => {
    footwearAction(dispatch)
  }, [])
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>FOOTWEAR AND SHOES FOR MEN  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
      {
        productData.length > 0 ? <div className={style.ProductCardDiv}>
          {
            productData.map((el, i) => {
              return <div key={i + 1}><ProductCard {...el} /></div>
            })
          }
        </div> : null
      }
    </div>
  )
}
