import React from 'react'
import { faXmark, faHouse, faCartShopping, faQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MobileNav.css'
import { Link } from 'react-router-dom'

const MobileNav = ({setMenu}) => {
  return (
    <div className='mobileNav' >
      <div className='mobileNav_wrapper' onClick={()=>setMenu(false)}>

      </div>
      <ul className='mobileNav_sideBar' onClick={()=>setMenu(true)}>
        <Link className='mobileNav_link'>
          <li className='mobileNav_item'>
          <FontAwesomeIcon className='mobileNav_icon' icon={faHouse}/> 
          Home 
         </li> 
         </Link>
        <Link className='mobileNav_link'>
         <li className='mobileNav_item'>
          <FontAwesomeIcon className='mobileNav_icon'  incon={faQuestion}/> 
          Categories 
         </li> 
        </Link>
        <Link className='mobileNav_link'>
          <li className='mobileNav_item'>
          <FontAwesomeIcon className='mobileNav_icon'  icon={faCartShopping}/>
           Shop 
          </li>
        </Link>
        <Link className='mobileNav_link'>
          <li className='mobileNav_item'>
          <FontAwesomeIcon className='mobileNav_icon'  icon={faQuestion}/> 
          About Us
         </li> 
        </Link>
        <Link className='mobileNav_link'> 
        <li className='mobileNav_item'>
          <FontAwesomeIcon className='mobileNav_icon'  icon={faEnvelope}/>
          Contact Us 
         </li> 
        </Link>

      </ul>
    </div>
  )
}

export default MobileNav