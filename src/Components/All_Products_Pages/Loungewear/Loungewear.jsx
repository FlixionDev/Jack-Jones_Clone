import React, { useEffect, useproductData } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Loungewear.module.css'
import { thunkLoungewearAction } from '../../../Redux/Action/ThunkAction';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
export default function Loungewear() {
  let productData=useSelector((storeData)=>storeData.loungewear);
  const dispatch=useDispatch();
  useEffect(() => {
    let loungewearAction=bindActionCreators(thunkLoungewearAction,dispatch);
    loungewearAction();
  },[])
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{font:'24px',padding:"10px 10px 20px 0"}}>LOUNGEWEAR FOR MEN  {productData.length > 1 ? <span style={{color:'gray'}}>{productData.length+1}</span> : null}</h1>
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
