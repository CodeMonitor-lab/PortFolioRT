import React from 'react'
import {Header,Footer} from '../index'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <main className=' bg-gradient-to-tl  from-purple-000  to-blue-1950  px-4 py-4 sm:px-26 sm:py-5' >
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default AppLayout