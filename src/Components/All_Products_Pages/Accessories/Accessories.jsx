import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import style from './Accessories.module.css'
import { useLocation } from 'react-router-dom';
export default function Accessories() {
  // const params=useParams();
  const location=useLocation();
  console.log(location)
  // console.log(params)
  const [state, setState] = useState([]);
  useEffect(() => {
    fetchProduct("https://curious-hare-jewelry.cyclic.app/accessories");
  },[])
  const fetchProduct = (url) => {
    fetch(`${url}`).then((res) => { return res.json() }).then((res) => { setState(res) })
  }
  
  return (
    <div className={style.CollectionDiv}>
      <h1 style={{font:'24px',padding:"10px 10px 20px 0"}}>ACCESSORIES FOR MEN  {state.length > 1 ? <span style={{color:'gray'}}>{state.length+1}</span> : null}</h1>
      <div className={style.ProductCardDiv}>
      {
        state.map((el,i)=>{
          return <div key={i+1}><ProductCard {...el}/></div>
        })
      }
      </div>
    </div>
  )
}
