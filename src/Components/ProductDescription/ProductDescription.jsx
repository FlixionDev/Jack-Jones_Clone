import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function ProductDescription() {
  const {pathname}=useLocation();
  const product=pathname.split("/")
  useEffect(()=>{
    fetch(`https://curious-hare-jewelry.cyclic.app/${product[1]}?_id=${product[2]}`).then((res)=>{return res.json()}).then((res)=>{console.log(res)});
  },[])
  return (
    <div>
      
    </div>
  )
}
