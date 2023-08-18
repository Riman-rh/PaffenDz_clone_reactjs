import React from 'react'
import './TopProducts.css'
import HomeHeader from '../homeHeader/HomeHeader'
import TopProductMenu from './topProductMenu/TopProductMenu'
import ProductCard from '../product/ProductCard'
import { products } from '../../data'
const TopProducts = ({dispatch, successAdd}) => {
  return (
    <div className='topProducts'>
        <HomeHeader title='special products' subtitle='Top Collection' />
        <TopProductMenu/>
        <div className='topProducts_map'>
          {
            products?.map((product, index)=>{
              return(<ProductCard successAdd={successAdd} key={index} id={product.id} url={product.url} title={product.title} brand={product.brand} price={product.price} dispatch={dispatch} />)
            })
          }
            
          


        </div>
    </div>
  )
}

export default TopProducts