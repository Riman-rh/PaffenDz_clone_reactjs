import React, {useEffect, useState} from 'react'
import HomeHeader from '../homeHeader/HomeHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './BrandBar.css'
import { brand } from '../../data'
const BrandBar = () => {
  const [brands, setBrands] = useState([])
  const [max, setMax] = useState(0)
  const [firstIndex, setFirstIndex]= useState(0)
  const [lastIndex, setLastIndex] = useState(0)
  const [scroll, setScroll] = useState(true)
  const getWindowWidth =()=>{
    let width = window.innerWidth
    return width 
  }
  useEffect(()=>{
    let width = getWindowWidth()
    setFirstIndex(0)
    if(width >= 1024){
      setMax(6)
      setLastIndex(6)

    }else if (width >= 700){
      setMax(4)
      setLastIndex(4)
    }else{
      setMax(2)
      setLastIndex(2)
    }
  },[getWindowWidth()])



  useEffect(()=>{
    setBrands(brand.slice(firstIndex ,lastIndex))
  },[])
  
  function handleRight() {
    if (lastIndex === brand.length) {
      setFirstIndex(0);
      setLastIndex(max); 
    } else {
      setFirstIndex((prevFirstIndex) => (prevFirstIndex + 1) % brand.length);
      setLastIndex((prevLastIndex) => (prevLastIndex + 1) % brand.length);
    }
  }
  function handleLeft() {
    if (firstIndex === 0) {
      setFirstIndex(brand.length - 1); 
      setLastIndex(prevLastIndex=>prevLastIndex-1);
    } else {
      setFirstIndex((prevFirstIndex) =>
        (prevFirstIndex - 1 + brand.length) % brand.length
      );
      setLastIndex((prevLastIndex) =>
        (prevLastIndex - 1 + brand.length) % brand.length
      );
    }
  }

  

  useEffect(()=>{
    if(firstIndex + max === lastIndex){
      setBrands(brand.slice(firstIndex, lastIndex))
    }else{
      setBrands(brand.slice(firstIndex ,brand.length).concat(brand.slice(0, lastIndex) ))

    }
  },[firstIndex,lastIndex])
  useEffect(()=>{
    if (scroll){
      setTimeout(()=>{
        if(scroll)  handleRight()
      },3000)

    }

  },[firstIndex,scroll])

  return (
    <div className='brandBar_wrapper'>
        <HomeHeader title="VARIETY OF BRANDS" subtitle="Our Brands"/>
        <div className='brandBar'>
            <button className='brandBar_btn' onClick={handleLeft}>
                <FontAwesomeIcon icon={faAngleLeft} onMouseOver={()=>setScroll(false)} onMouseLeave={()=>setScroll(true)}  />
            </button>
            <div className='brandBar_brands'>
              {brands.map(brand=>{
                return (
                  <div key={brand.index} className='brandBar_brand' style={{backgroundImage:`url(${brand.url})`}} 
                        onMouseOver={()=>setScroll(false)} onMouseLeave={()=>setScroll(true)}  >
                    <div className='brandBar_brand_hover'>
                    </div>
                </div>
              
                )
              })}
              </div>
            <button className='brandBar_btn' onClick={handleRight}>
                 <FontAwesomeIcon icon={faAngleRight} onMouseOver={()=>setScroll(false)} onMouseLeave={()=>setScroll(true)} /> 
            </button>
        </div>
    </div>
  )
}

export default BrandBar