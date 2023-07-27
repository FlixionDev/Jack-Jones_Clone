import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Innerwear.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { innerwearAction } from '../../../Redux/Action/Action';
export default function Innerwear() {
  let productData = useSelector((storeData) => storeData.innerwear);
  const dispatch = useDispatch();
  document.title="Mens Underwear & Innerwears: Buy Comfortable Underwear & Innerwears for Men Online"
  useEffect(() => {
    innerwearAction(dispatch)
  }, [])
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>INNERWEAR FOR MEN  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
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
