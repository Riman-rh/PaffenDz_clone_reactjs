import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBagShopping, faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './ProductCard.css'
import { useTheme } from '../../ThemeContext'
import { ACTIONS } from '../../App'
import { useSelector, useDispatch } from 'react-redux'
import { getadded,updateAdd, geterr, showErr } from '../../features/product/productSlice'
import Alert from '../alert/Alert'
  const ProductCard = ({id,title, url, price, brand, dispatch}) => {
  const darkTheme = useTheme()
  const added = useSelector(getadded)
  const err = useSelector(geterr)
  const dispatch2 = useDispatch()
  const [show, setShow] = useState(false);
  const [showerr, setShowErr] = useState(false)

  useEffect(() => {
    if (added) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
     
      }, 2000);
      dispatch2(updateAdd())
    }
  }, [added]);


  useEffect(() => {
    if (err) {
      setShowErr(true)
      setTimeout(() => {
        setShowErr(false)
      }, 2000);
      dispatch2(showErr())
    }
  }, [err]);


  const handleAddProduct = () => {
    dispatch({type:ACTIONS.ADD_PRODUCT, payload:{id:id ,title:title, url:url, price:price}})
  }
  return (
    <div className='productCard'> 
      <div className='productCard_header'>
      <img className='productCard_img' src={url} alt='miss dior'/>
      <div className='productCard_bar'>
          <a onClick={()=> handleAddProduct()}><FontAwesomeIcon className='productCard_icon' icon={faBagShopping}/></a>
          <a><FontAwesomeIcon className='productCard_icon' icon={faHeart}/></a>
          <a><FontAwesomeIcon className='productCard_icon' icon={faMagnifyingGlass}/> </a>
        </div>
        </div>
        <div className='productCard_info'>


        <div className= {`productCard_brand ${darkTheme && "productCard_dark"}`}> {brand} </div>
        <div className= {`productCard_title ${darkTheme && "productCard_dark"}`}>{title}</div>
        <div className='productCard_rating'>
            <FontAwesomeIcon className='productStar_icon' icon={faStar}/>
            <FontAwesomeIcon className='productStar_icon' icon={faStar}/>
            <FontAwesomeIcon className='productStar_icon' icon={faStar}/>
            <FontAwesomeIcon className='productStar_icon' icon={faStar}/>
            <FontAwesomeIcon className='productStar_icon' icon={faStar}/>

        </div>
        <div className={`productCard_price ${darkTheme && "productCard_dark"}`}>
            {price} DZD
        </div>
        <button className= {`productCard_btn ${darkTheme && "productCard_dark_btn"}`}>BUY NOW</button>

      </div>
      {show && <Alert handleExit={setShow} title="Success" msg="Product added successfully to cart"/>}
      {showerr && <Alert handleExit={setShowErr} title="Err" msg="Product Could not be added to cart" /> }
    </div>
  )
}

export default ProductCard