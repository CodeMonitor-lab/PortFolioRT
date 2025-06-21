import React from "react";
import useVisiblity from "../../hooks/useVisiblity";
import { Logo, MenuBar, NavbarLink, Visible } from "../index"; 
import ReactIcon from '../../Store/ReactIcon';


const AdminHeader = () => {
  const { isVisible, toggle } = useVisiblity(false);

  return (
    <main className=" bg-gradient-to-tr from-sky-200 to-purple-500 shadow-xl ">
      <header className="flex justify-between items-center px-4 sm:px-16 py-2 relative">
        {/* Logo */}
        <span>
          <Logo />
        </span>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex items-center gap-4">
          <NavbarLink className='text-lg font-semibold text-sky-900' />
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden focus:outline-none ">
          <MenuBar toggle={toggle} isVisible={isVisible} />
        </button>

        {/* Mobile Dropdown Menu */}
        <Visible when={isVisible}>
          <div className="sm:hidden absolute top-full left-0 w-full bg-sky-200 min-h-full z-10">
            <NavbarLink onLinkClick={toggle} className='flex underline-offset-6 underline flex-col text-lg font-sans font-bold px-4 py-5' />
            <hr className="border-2 border-sky-500" />
          </div>
        </Visible>
      </header>
    </main>
  );
};

export default AdminHeader;
