
import React from 'react';

export function About(){

    return(
        <>
         <div className="home bg-teal-700 w-full text-white text-center h-screen flex items-center ">
        <div className="container w-3/4 m-auto">
          <p className='text-4xl font-extrabold  about'>ABOUT COMPONENT</p>
          <div className='flex justify-center mb-3 mt-3'>
            <div className='line me-3 bg-white'></div>
            <i className="fa-solid fa-star text-xl"></i>
            <div className='line ms-3 bg-white'></div>
          </div>
          <div className='flex'>
          <div className='w-1/2 text-start text-lg pe-3'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className='w-1/2 text-start text-lg ps-3'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          </div>
        </div>
      </div>
        
        
        
        </>
    )
}