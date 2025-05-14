import React, { useRef, useState } from "react";
import useVisiblity from "../../hooks/useVisiblity";
import { Logo, MenuBar, NavbarLink,Visible,AdminHeader } from "../index"; 

const Header = () => {
  const {isVisible,toggle} = useVisiblity(false)
  const [showNav,setShowNav] = useState(false)
  const navRef = useRef(null);

  const ToggleNavbar = ()=>{
    setShowNav((prev)=>!prev);
  }

  const togStyle = 'border transform sm:border-none sm:w-auto z-10 w-full sm:bg-transparent bg-amber-300 sm:block absolute transition-all ease-in-out duration-300 sm:static top-full left-0 overflow-hidden'

  return (
    <>
    <AdminHeader/>
    {/* <header className="bg-sky-400 flex px-6 sm:px-4 py-2 sm:py-2 relative justify-between items-center" > */}
      {/* <span className="" ><Logo/></span> */}
      {/* <button onClick={ToggleNavbar} aria-controls='main-nav' aria-expanded={showNav} > */}
        {/* {showNav ? <MenuBar className=' saika block sm:hidden' /> : <MenuBar className=' saika block sm:hidden' />  } */}
      {/* </button> */}
      {/* <nav ref={navRef} className={` ${togStyle} ${showNav  ? 'block' : 'hidden' }`} > */}
      {/* <NavbarLink onLinkClick={()=>setShowNav(false)} className=' lg:text-lg sm:text-lg flex flex-col font-mono sm:font-serif sm:flex-row py-4 sm:py-2 px-6 sm:px-2 font-bold' /> */}
      {/* </nav> */}
    {/* </header> */}
    </>
  )
}

export default Header