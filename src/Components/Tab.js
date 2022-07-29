import React from 'react'
import './Tab.css'
import tab1 from '../Assets/illustration-hero.svg'
const Tab = () => {
  return (
    <div>
        <div className='Tab1'>
            <img id='tab1' src={tab1}  alt=""  width={'270px'} height={'200px'}/>
            <div className='background'></div>
        </div>
        

    </div>
  )
}

export default Tab