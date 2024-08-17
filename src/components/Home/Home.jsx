
import mainPic from './../../assets/images/avataaars.svg'
import React from 'react'

export  function Home () {
  return (
    <>
    <div className="text-center w-full bg-cyan-800 p-1 mt-10">
        <img src={mainPic} className='w-1/5 m-auto my-6 mt-14' alt="main" />
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
