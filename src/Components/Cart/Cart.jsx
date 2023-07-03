import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  let cartItem=useSelector((storeData)=>storeData.cart)
  console.log(cartItem)
  return (
    <div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}
