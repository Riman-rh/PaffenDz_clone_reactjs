import React from 'react'
import './Account.css'
import {faUserPlus, faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Account = () => {
  return (
    <ul className='account'>
      <li className='account_item'>
          <a> 
            <FontAwesomeIcon icon={faUserPlus} className='icon'/>
            Register
          </a>
        </li>
      <li className='account_item'>
        <a>
          <FontAwesomeIcon icon={faRightToBracket} className='icon'/>
          Login
        </a>
        </li>
    </ul>
  )
}

export default Account