import React from 'react'
import '../Components/Thirdsec.css'
import chrome from '../Assets/logo-chrome.svg'
import dots from '../Assets/bg-dots.svg'
import firefox from '../Assets/logo-firefox.svg'
import opera from '../Assets/logo-opera.svg'

const Thirdsec = () => {
  return (
    <div>
        <div className='extension'>
            <div className='download'>
                <h2 id='exten'>Download the extension</h2>
                <p id='more'>
                    We've got more browsers in the pipeline. Please do let us know if 
                <span> you've got a favourite you'd like us to prioritize</span> 
                </p>
            </div>

            <div className='browsers'>
                <div className='browser' id='chromes'>
                    <img id='chrome' src={chrome} alt="" />
                    <h5 id='Add'>Add to Chrome</h5>
                    <p id='version'>Minimum version 62</p>
                    <img id='dots' src={dots} alt="" />
                    <button id='install'>Add & Install Extension</button>
                </div>
                <div className='browser' id='firefoxs'>
                    <img id='chrome' src={firefox} alt="" />
                    <h5 id='Add'>Add to Firefox</h5>
                    <p id='version'>Minimum version 55</p>
                    <img id='dots' src={dots} alt="" />
                    <button id='install'>Add & Install Extension</button>
                </div>
                <div className='browser' id='operas'>
                    <img id='chrome' src={opera} alt="" />
                    <h5 id='Add'>Add to Opera</h5>
                    <p id='version'>Minimum version 46</p>
                    <img id='dots' src={dots} alt="" />
                    <button id='install'>Add & Install Extension</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Thirdsec