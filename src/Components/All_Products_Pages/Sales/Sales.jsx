import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Sales.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunkSalesAction } from '../../../Redux/Action/ThunkAction';
export default function Sales() {
  let productData = useSelector((storeData) => storeData.sales);
  const dispatch = useDispatch();
  useEffect(() => {
    //fetchProduct("https://curious-hare-jewelry.cyclic.app/sales");
    let salesthunk = bindActionCreators(thunkSalesAction, dispatch);
    salesthunk();
  }, [])
  const fetchProduct = (url) => {
    fetch(`${url}`).then((res) => { return res.json() }).then((res) => { setState(res) })
  }

  return (
    <div className={style.CollectionDiv}>
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>UP TO 50%  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
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
