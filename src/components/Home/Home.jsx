
import mainPic from '../../../images/avataaars.svg'
import React from 'react'

export  function Home () {
  return (
    <>
    <div className="text-center w-full bg-emerald-600 p-1">
        <img src={mainPic} className='w-1/5 m-auto my-6' alt="main" />
        <h2 className='text-4xl font-bold'>start Framework</h2>
        <div className='flex justify-center mb-3 mt-3'>
                    <div className='line me-3 bg-white'></div>
                    <i className="fa-solid fa-star text-xl"></i>
                    <div className='line ms-3 bg-white'></div>
                </div>
                <p className='mt-3 mb-12 text-lg'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
    
    
    
    
    </>
  )
}
