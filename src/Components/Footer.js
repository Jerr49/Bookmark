import React from 'react'
import '../Components/Footer.css'
import Bookmark from '../Assets/logo-bookmark.svg'
import Facebook from '../Assets/icon-facebook.svg'
import Twitter from '../Assets/icon-twitter.svg'

const Footer = () => {
  return (
    <div >
       <div className='footer-body'>

        <div className='footer-content'>
            <div className='footer'>
                <p id='joined'>35,000+ ALREADY JOINED</p>
                <h3 className='uptodate'> Stay up-to-date with what <span>we're doing</span></h3>
                <div className='input'>
                    <input id='input' type="email" /><span><button id='contactus'>contact us</button></span>
                </div>
            </div>

        </div>
       
      
                <div className='lasticon'>
                    <div className='footer-links'>
                        <img id='footer-logo' src={Bookmark} alt="" />
                        <ul id='footer-links'>
                            <li id='list'>FEATURES</li>
                            <li id='list'>PRICING</li>
                            <li id='list'>CONTACT</li>
                        </ul>
                    </div>
                    
                    <div id='footer-icons'>
                        <img id='facebook' src={Facebook} alt="" />
                        <img id='twitter' src={Twitter} alt="" />
                    </div>
                </div>
        </div>
         
    </div>
  )
}

export default Footer