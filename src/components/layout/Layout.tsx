import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbarhome from '@/features/home/Navbarhome'
import Footer  from "@/features/home/Footer";

const Layout = () => {
  return (
    <>
    <Navbarhome/>
    <main>
 <Outlet/>
    </main>
    <Footer/>
    
    
    </>
  )
}

export default Layout