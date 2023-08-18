import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLocationPin, faPhoneFlip, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../ThemeContext'
import './Footer.css'
const Footer = () => {
  const darkTheme = useTheme()

  return (
    <div className='footer' style={{backgroundColor: darkTheme?'#101010': '#202020'}}>
        <div className='footer_top'>
            <div className='footer_social'>
                <img className='footer_img' src="assets/images/pafen.webp"/>
                <h3 className='footer_h3'>pafendz</h3>
                <div className='footer_socials'>
                    <div className='footer_social_icon'>
                        <FontAwesomeIcon className='fb_icon' icon={faFacebookF}/>
                    </div>
                    <div className='footer_social_icon'>
                        <FontAwesomeIcon className='twitter_icon' icon={faTwitter}/>
                    </div>
                    <div className='footer_social_icon'>
                        <FontAwesomeIcon className='insta_icon' icon={faInstagram}/>
                    </div>
                </div>
             

            </div>
            <div className='footer_accounts'>
                <h2 className='footer_h2'> MY ACCOUNT </h2>
                <ul className='footer_list'>
                    <li className='footer_list_item'>Login</li>
                    <li className='footer_list_item'>Register</li>
                </ul>
            </div>
            <div className='footer_links'>
                <h2 className='footer_h2'>USEFULL LINKS</h2>
                <ul className='footer_list'>
                    <li className='footer_list_item'>Shop</li>
                    <li className='footer_list_item'>About us</li>
                    <li className='footer_list_item'>Contact us</li>
                </ul>
            </div>
            <div className='footer_contact'>
                <h2 className='footer_h2'>CONTACT</h2>
                <div className='footer_address'>
                <FontAwesomeIcon className='footer_address_icon' icon={faLocationPin}/>
                Magasin Bab Ezzouar : 2eme étage centre <br/>
                commercial Mohammadia Mall les bananiers <br/>
                NUM : 0559043186 Magasin Chéraga : <br/>
                boulevard 11 décembre Dely Ibrahim NUM :<br/>
                0550971975 Magasin Oran: centre <br/>
                commercial sidi Yahia Hay El Yasmine NUM :<br/>
                0540829792 <br/>
                <FontAwesomeIcon className='footer_address_icon'  icon={faPhoneFlip}/> 0550 79 63 47 <br/>
                <FontAwesomeIcon className='footer_address_icon'  icon={faEnvelope}/> contact@pafen-dz.com

                </div>
            </div>
        </div>
        <div className='footer_bottom'>
            <div>
                Pafen dz " smell the difference " Service Marketing : 0556997159
            </div>
            <div>
               powerd by
            </div>

        </div>
    </div>
  )
}

export default Footer