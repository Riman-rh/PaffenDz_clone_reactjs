import * as React from "react";
import { useState, useEffect } from "react";
import { section_img  as images} from '../../data'
import './Section.css'

  const Section = ()=>{
    const[current, setCurrent] = useState(0)
    const nextSlide = ()=>{
      setCurrent(current === images.length-1?0: current+1 )
    }
    useEffect(()=>{
      setTimeout(()=>{
         nextSlide()
  
      },5000)
  
    },[current])
    return (
      <div className="section">
        {
          images.map((slide, index)=>{
            return(
              <div className={index === current? 'slide active': 'slide'} key="index">
                {
                  index === current && ( <img className="section_img" src={slide.url} alt="slide image" />)
                }
              </div>
            )
          })
        }
     
        
      </div>
    );

  }


export default Section