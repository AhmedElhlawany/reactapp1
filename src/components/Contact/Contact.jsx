import './contact.css'

import React from 'react';

export function Contact(){

    return(
        <>
        <div className="w-full bg-white p-1 text-slate-800 text-center">
            <div className="container w-3/4 m-auto">
                <h1 className="text-4xl font-bold mt-4">contact section</h1>
                <div className='flex justify-center mb-3 mt-3'>
                    <div className='line me-3 bg-slate-900'></div>
                    <i className="fa-solid fa-star text-xl"></i>
                    <div className='line ms-3 bg-slate-900'></div>
                </div>
                
                <input type="text" id='username' className="my-4 block w-3/4 m-auto h-10" placeholder="userName"/>
                <input type="number" className="my-4 block w-3/4 m-auto h-10" placeholder="userAge"/>
                <input type="email" className="my-4 block w-3/4 m-auto h-10" placeholder="userEmail"/>
                <input type="password" className="my-4 block w-3/4 m-auto h-10" placeholder="userPassword"/>
                <button type="button" className="w-34 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">send Message</button>

            </div>
        </div>
        
        
        
        
        
        </>
    )

}