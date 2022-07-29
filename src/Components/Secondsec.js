import React from 'react'

import tab3 from '../Assets/illustration-hero.svg'
import '../Components/Secondsec.css'

const Secondsec = () => {
    
  return (
    <div>
       <div className='section'>
            <div className='firstSection'>
                <div className='Manager'>
                    <div className='Htext'>

                        <h1 className='Simple'>A Simple Bookmark<span id='span'> Manager</span></h1>
                        <p className='para'>
                            A clean and simple interface to organize your favourite 
                            website. Open a new browser tab and see your sites load instantly. Try it for free
                        </p>
                    </div>
                    
                    <div className='clickbtn'>
                        <button className='chrome' id='Get'>Get it on Chrome</button>
                        <button className='firefox' id='Get'>Get it on Firefox</button>
                    </div>   
                </div>
                    <div className='tab'>
                        <div id='box'></div>
                        <img id='tab3' src={tab3}  alt="" />
                    </div>   
            </div>
        </div>
    </div>
  )
}

export default Secondsec