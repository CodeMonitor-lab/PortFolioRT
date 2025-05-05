import React, { useState } from "react";
import { Logo, MenuBar, NavbarLink } from "../index"; 

const Header = () => {
  return (
    <>
    <header className="flex px-5 py-3 justify-between bg-amber-500" >
      <div className="bg-green-500" >
      <Logo/>
      </div>
      <nav className="flex bg-red-300" >
        <NavbarLink className='flex' />
        <MenuBar/>
      </nav>
      
    </header>
    </>
  )
}

export default Header