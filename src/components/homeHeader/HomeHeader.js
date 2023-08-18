import React from 'react'
import './HomeHeader.css'
import { useTheme, useThemeUpdate } from '../../ThemeContext'
const HomeHeader = ({title,subtitle}) => {
  const darkTheme = useTheme()
  return (
    <div className='homeHeader'>
            <h2 style={{fontFamily: 'Send Flowers', color: darkTheme?'#E8E8E8		':'#585858'}}>{subtitle}</h2>
        <div className='homeHeader_h1'>
            <div className='homeHeader_div'>

            </div>
            <h1 style={{color: darkTheme?'#F5F5F5	':'#383838'}}>{title}</h1>
            <div className='homeHeader_div'>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader