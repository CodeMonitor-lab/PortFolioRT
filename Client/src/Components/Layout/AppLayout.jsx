import React from 'react'
import {Header,Footer} from '../index'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <main>    
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default AppLayout