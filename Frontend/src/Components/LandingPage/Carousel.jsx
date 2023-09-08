import React, { useState, useEffect } from 'react'
import r21 from './images/row_2_first.avif'
import r22 from './images/row_2_secondavif.avif'
import r23 from './images/row_2_third.webp'
export default function Carousel() {
    let arr2=[r21,r22,r23];
    const [state, setState] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (state == arr2.length - 1) {
                setState(0)
            } else {
                setState(state + 1);
            }
        }, 3500)
        return ()=>{
            clearInterval(timer)
        }
    },[state])
  return (
    <div>
        <div style={{marginTop:"15px"}}>
                <img style={{width:'100%'}} src={arr2[state]} />
            </div>
    </div>
  )
}
