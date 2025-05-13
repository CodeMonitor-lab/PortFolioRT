import React, { useState } from "react";
import { Logo, MenuBar, NavbarLink } from "../index"; 

const Header = () => {
  const [showNav,setShowNav] = useState(false)
  const ToggleNavbar = ()=>{
    setShowNav((prev)=>!prev);
  }

  const togStyle = 'border transform sm:border-none sm:w-auto z-10 w-full sm:bg-transparent bg-amber-300 sm:block absolute transition-all ease-in-out duration-300 sm:static top-full left-0'

  return (
    <>
    <header className="bg-sky-400 flex px-6 sm:px-4 py-2 sm:py-2 relative justify-between items-center" >
      <span className="" ><Logo/></span>
      <button onClick={ToggleNavbar} aria-controls='main-nav' aria-expanded={showNav} >
        <MenuBar className='block sm:hidden' />
      </button>
      <nav className={`${showNav  ? 'block' : 'hidden' } ${togStyle} `} >
      <NavbarLink className=' lg:text-lg sm:text-lg flex flex-col font-mono sm:font-serif sm:flex-row py-4 sm:py-2 px-6 sm:px-2 font-bold' />
      </nav>
    </header>
    </>
  )
}

export default Header