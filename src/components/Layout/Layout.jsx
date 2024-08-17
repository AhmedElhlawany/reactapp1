


import React from 'react'
import {  StickyNavbar } from '../../Navbar'
import { Footer } from '../../Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <StickyNavbar/>
    
    <Outlet></Outlet>
    
    
    
    <Footer/>
    
    </>
  )
}
