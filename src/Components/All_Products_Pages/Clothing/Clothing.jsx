import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Clothing.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { clothingAction } from '../../../Redux/Action/Action';
export default function Clothing() {
  let productData = useSelector((storeData) => storeData.clothing);
  const dispatch = useDispatch();
  document.title="Buy Clothing for Mens at Jack & Jones"
  useEffect(() => {
    clothingAction(dispatch)
  }, [])
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>MENS CLOTHING  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
      {
        productData.length > 0 ?
          <div className={style.ProductCardDiv}>
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
