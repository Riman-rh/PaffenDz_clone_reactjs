import React, {useEffect, useState} from 'react'
import './Categories.css'
import Category from './category/Category'
import HomeHeader from '../homeHeader/HomeHeader'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [item, setItem] = useState(2)


  const category = [
    {
      url:'assets/images/womancategory.jpg',
      name: 'Woman Parfum'
    },
    {
      url:'assets/images/mancategory.jpg',
      name: 'Man Parfum'
    },
    {
      url:'assets/images/niche.jpg',
      name: 'Niche Parfum'
    }
  ]
  const getWindowWidth =()=>{
    let width = window.innerWidth
    return width 
  }
  const updateCategories =()=>{
    let width = getWindowWidth()
    if (width >= 750){
      setCategories(category)

    } else{
 
        const item1 = category[item % category.length]
        const item2 = category[(item+1)% category.length]
        setCategories([item1, item2])
  
    }

  }


useEffect(()=>{
  updateCategories()
 
  window.addEventListener('resize', updateCategories);
  return () => {
    window.removeEventListener('resize', updateCategories);
  };

}
,[getWindowWidth,item])
useEffect(()=>{
  let width = getWindowWidth()
  if (width < 750){
    setTimeout(()=>{
      setItem(item+1)
    },3000)  
  }

},[item])

  return (
    <div className='categories'>
       <HomeHeader title='featured categories' subtitle='our categories'/>
        <div className='categories_map' >
          {categories.map((category,index)=>{
            return <Category key={index} name={category.name} url={category.url}/>
          })}
        </div>

    </div>
  )
}

export default Categories