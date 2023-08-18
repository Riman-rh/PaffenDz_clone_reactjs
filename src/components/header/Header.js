import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faUser, faCaretDown, faCartShopping, faBars, faXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Account from './account/Account'
import { useTheme, useThemeUpdate } from '../../ThemeContext'
import Nav from './nav/Nav'
import {
    Link
  } from "react-router-dom";
  import Switch from '@mui/material/Switch';
import MobileNav from './mobileNav/MobileNav'

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Header = ({cart}) => {
    const [showAccount, setShowAccount] = useState(false)
    const [menu, setMenu] = useState(false)
    const [count, setCount] = useState([])
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    useEffect(()=>{
        if(cart !== null){
            setCount(cart);
        }
              
        }, [cart])
    const getWindowWidth =()=>{
        let width = window.innerWidth
        return width 
        }

    useEffect(()=>{
        const handleResize = () => {
            const width = getWindowWidth();
            if (width > 765) {
              setMenu(false);
              console.log("this is making menu false", menu);
            }
          };
          window.addEventListener('resize', handleResize);

          return () => {
            window.removeEventListener('resize', handleResize);
          };


    }, [getWindowWidth])


  return (
    <div className='header' >
        <div className='header_wrapper' style={{backgroundColor: darkTheme?'#101010': '#FFFFFF'}}>
        <div className='header_contact' style={{backgroundColor: darkTheme?'#101010': '#FFFFFF'}}>
                <div className='header_contact_left'>
                    <div className='header_contact_socialM'>
                        <a className='fb_icon' href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a className='twitter_icon' href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className='insta_icon' href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <div className='header_contact_phone'>
                        <FontAwesomeIcon icon={faPhone} className='phone_icon'/>
                        <p>CALL US: 0558321419</p>
                    </div>

            </div>
           
     
            <div className='header_contact_right'>
                <div className='phone_menu'>
                    {
                        menu?
                        (<FontAwesomeIcon icon={faXmark} onClick={()=>setMenu(!menu)} />):
                        (<FontAwesomeIcon icon={faBars} onClick={()=>setMenu(!menu)}/> )
                    }
                </div>
                
                
                <div onClick={()=> setShowAccount(prevShowAccount=>!prevShowAccount)} className='header_contact_account'>
                    <FontAwesomeIcon icon={faUser} className='user_icon'style={{color: darkTheme?'#A0A0A0':'#585858'}}/>
                    <span className='header_contact_account_list'>
                            My Account
                            <FontAwesomeIcon icon={faCaretDown} className='cartdown_icon' style={{color: darkTheme?'#A0A0A':'#585858'}} />
                    </span>
                 
                </div>
            
                <div className='header_contact_theme' onClick={toggleTheme}>
                    <Switch {...label} defaultChecked color="default" />
                </div>

            </div>
            </div>
                { showAccount? (<Account/>) : null}
            <div className='header_middle' style={{backgroundColor: darkTheme?'#101010': '#FFFFFF'}}>
            <img src='assets/images/pafen.webp' className='header_middle_img' />
            <form className='header_search'>
                <select className='search_select'>
                    <option>All Products</option>
                    <option>Free Shipping</option>
                    <option>New</option>
                    <option>Promotions</option>
                </select>
                <input type='text' className='search_input' name='search' placeholder='Search...'/>
                <button className='search_btn'>Search</button> 
            </form>
            <Link className='cart_link' to="/cart">
                <FontAwesomeIcon className='shopping_icon' icon={faCartShopping}/>
                <div className='cart_count'>
                    {count.length}
                </div>
            </Link>

        </div>
        <Nav/>
        </div>
        {
            menu && <MobileNav setMenu={setMenu} />
        }
    </div>
  )
}

export default Header