import React from 'react'
import './Category.css'
const Category = ({name, url}) => {
  return (
    <div className='category' style={{backgroundImage:`url(${url})`}}>
      
        <div className='category_detail'>
            <div className='category_detail_show'> 
            <h2>{name}</h2>
            <div className='category_line'></div>
            <button className='category_btn'>SHOP NOW</button>
            </div>
           
        </div>

    </div>
  )
}

export default Category