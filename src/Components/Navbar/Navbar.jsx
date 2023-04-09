import React from 'react'
import first_img from '../Navbar/images/JJ.webp'
import second_img from './images/Unmatched+Logo.webp'

export default function Navbar() {
  return (
    <div>
      <div>
        <img src={first_img} />
      </div>
      <div>
        <img src={second_img} />
        <input type='search'/>
        {/* <FontAwesomeIcon icon="fa-sharp fa-light fa-user" /> */}
      </div>
    </div>
  )
}
