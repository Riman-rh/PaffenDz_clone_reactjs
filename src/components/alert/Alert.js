import React from 'react'
import './Alert.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Alert = ({msg, title,handleExit}) => {
  return (
    <div className='alert'>
      <div className='alert_header'>
        <h2 className={`alert_h2 ${title}`}>{title}</h2>
        <FontAwesomeIcon onClick={()=>{handleExit(false)}} className='alert_icon' icon={faXmark}/>
      </div>
        <p className='alert_p'>{msg}</p>
    </div>
  )
}

export default Alert