import React from 'react'
import './TopProductMenu.css'
import { useTheme } from '../../../ThemeContext'

const TopProductMenu = () => {
    
  const darkTheme = useTheme()

  return (
    <ul className='topProductMenu' >
        <li className= {`topProductMenu_item ${darkTheme && "topProductMenu_item_dark"}`}>
            <a className='topProductMenu_link'>FEATURED PRODUCTS </a>
        </li>
        <li className={`topProductMenu_item ${darkTheme && "topProductMenu_item_dark"}`}>
            <a className='topProductMenu_link'> NEW PRODUCTS</a>
        </li>
        <li className={`topProductMenu_item ${darkTheme && "topProductMenu_item_dark"}`}> 
            <a className='topProductMenu_link'>BEST SELLERS </a>
        </li>
        <li className={`topProductMenu_item ${darkTheme && "topProductMenu_item_dark"}`}>
            <a className='topProductMenu_link'> MOST RATED</a>
        </li>
    </ul>
  )
}

export default TopProductMenu