import React from 'react'
import './Home.css'
import Header from '../header/Header'
import { useTheme } from '../../ThemeContext'
import Section from '../section/Section'
import Categories from '../categories/Categories'
import TopProducts from '../topProducts/TopProducts'
import BrandBar from '../brandBar/BrandBar'


const Home = ({cart,dispatch}) => {
  const darkTheme = useTheme()

  return (
    <div className={`home ${darkTheme && "home_dark"}`}>
      <Header cart={cart} />
        <div className='main'>
          <Section/>
          <Categories/>
          <TopProducts dispatch={dispatch}/>
          <BrandBar/>
        </div>
    </div>
  )
}

export default Home