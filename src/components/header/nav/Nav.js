import React,{useState, useEffect} from 'react'
import './Nav.css'
import { useTheme } from '../../../ThemeContext'
const Nav = () => {
    const darkTheme = useTheme()
    const [wide, setwide] = useState(false)

    const handleScroll = () => {
        const position = window.scrollY;
        if (position >= 224){
            setwide(true)
        }else(
            setwide(false)
        )

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <nav className={`nav ${darkTheme && 'nav_dark'}   ${wide && 'nav_wide'} `}>
        <ul className='nav_list'>
            <li className='nav_item'> 
                <a className='nav_link'>HOME</a>
                <div className='menu_item_div'>
                    
                </div>
            </li>
            <li className='nav_item'> 
                <a>CATEGORIES</a>
                <div className='menu_item_div'>

                </div>
            </li>
            <li className='nav_item'> 
                <a>SHOP</a>
                <div className='menu_item_div'>

                </div>
            </li>
            <li className='nav_item'>
                <a>ABOUT US</a>
                <div className='menu_item_div'>

                </div>
            </li>
            <li className='nav_item'>
                <a>CONTACT US</a>
                <div className='menu_item_div'>

                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Nav