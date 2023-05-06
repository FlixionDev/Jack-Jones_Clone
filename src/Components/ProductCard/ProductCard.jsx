import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './/ProductCard.module.css'
export default function ProductCard({first_img,second_img,title,price,_id}) {
  const [state,setState]=useState(false)
  //console.log(props)
  return (
    <Link to={_id}><div onMouseOver={()=>{setState(true)}} onMouseOut={()=>{setState(false)}} style={state ? {boxShadow:"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"} : null}>
      {
        state ? <img src={second_img}/> : <img src={first_img}/>
      }
      {state ? null : <p style={{fontSize:'13px',padding:'5px',textAlign:'center'}}>{title}</p>}
      {price ? <p style={{fontSize:'13px',padding:'0 5px 5px 5px',textAlign:'center'}}>₹ {price}</p> : <p style={{fontSize:'13px',padding:'5px',textAlign:'center'}}>₹ 999</p>}
      {state ? <div style={{display:'grid',gridTemplateColumns:'90% 10%'}}><button style={{fontSize:'15px',paddingLeft:'13%',border:'0.1px solid gray'}}>Add to cart</button><button style={{fontSize:'22px',border:'0.1px solid gray'}}>&#x2665;</button></div> : null}
    </div></Link>
    
  )
}
