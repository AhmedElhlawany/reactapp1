import React from 'react';
import p2 from './../../assets/images/port2.png';
import p1 from './../../assets/images/poert1.png';
import p3 from './../../assets/images/port3.png';
import './portfolio.css'
export function Portfolio() {


    return (
        <>
            <div className="w-full text-center bg-white text-slate-900 p-1">
                <h1 className='text-4xl font-bold my-3'>portfolio component</h1>
                <div className='flex justify-center mb-3 mt-3'>
                    <div className='line me-3 bg-slate-900'></div>
                    <i className="fa-solid fa-star text-xl"></i>
                    <div className='line ms-3 bg-slate-900'></div>
                </div>
                <div className="flex flex-wrap w-3/4 m-auto">
                    <div className='p-3 rounded-md port1 relative overflow-hidden md:w-1/3'>
                        <img src={p1} className='w-full rounded-md' alt="" />
                        <div className="layer1 rounded-md">
                            <i className="fa-solid fa-plus text-9xl text-white m-auto mt-10"></i>
                        </div>
                    </div>
                    <div className='p-3 rounded-md relative port2 overflow-hidden md:w-1/3'>
                        <img src={p2} className='w-full rounded-md' alt="" />
                        <div className="layer2 rounded-md">
                            <i className="fa-solid fa-plus text-9xl text-white m-auto mt-10"></i>
                        </div>
                    </div>
                    <div className='p-3 rounded-md port3 relative overflow-hidden md:w-1/3'>
                        <img src={p3} className='w-full rounded-md' alt="" />
                        <div className="layer3 rounded-md">
                            <i className="fa-solid fa-plus text-9xl text-white m-auto mt-10"></i>
                        </div>
                    </div>
                </div>
                <div className="flex w-3/4 m-auto flex-wrap">
                    <div className='p-3 rounded-md port4 relative overflow-hidden md:w-1/3'>
                        <img src={p1} className='w-full rounded-md' alt="" />
                        <div className="layer4 rounded-md">
                            <i className="fa-solid fa-plus text-9xl text-white m-auto mt-10"></i>
                        </div>
                    </div>
                    <div className='p-3 rounded-md port5 relative overflow-hidden md:w-1/3'>
                        <img src={p2} className='w-full rounded-md' alt="" />
                        <div className="layer5 rounded-md">
                            <i className="fa-solid fa-plus text-9xl text-white m-auto mt-10"></i>
                        </div>
                    </div>
                    <div className='p-3 rounded-md port6 relative overflow-hidden md:w-1/3'>
                        <img src={p3} className='w-full rounded-md ' alt="" />
                        <div className="layer6 rounded-md">
                            <i className="fa-solid fa-plus text-9xl text-white m-auto mt-10"></i>
                        </div>
                    </div>
                </div>
            </div>





        </>




    )




}