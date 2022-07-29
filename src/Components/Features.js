import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div>
        <div className='Features' >
            <div className='content'>
                <h2 id='features-header'>Features</h2>
                <p className='Aim'> 
                    Our aim is to make it quick and easy for you to access your
                    favourite website. Your bookmark sync between your devices so you can access them on the go.
                </p>
            </div>
           
            <div className='h6'>
                <hr />
                <h6 id='simple'>Simple Bookmarking</h6>
                <hr />
                <h6 id='speedy'>Speedy Searching</h6>
                <hr />
                <h6 id='easy'>Easy Sharing</h6>
                <hr />
            </div>
            <hr id='hr' />
           

        </div>
    </div>
  )
}

export default Features