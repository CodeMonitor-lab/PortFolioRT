import React from "react";
import useVisiblity from "../../hooks/useVisiblity";
import { Logo, MenuBar, NavbarLink, Visible } from "../index"; 
import ReactIcon from '../../Store/ReactIcon';


const AdminHeader = () => {
  const { isVisible, toggle } = useVisiblity(false);

  return (
    <main className="bg-sky-600">
      <header className="flex justify-between items-center px-4 py-2 relative">
        {/* Logo */}
        <span>
          <Logo />
        </span>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex items-center gap-4">
          <NavbarLink />
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden focus:outline-none ">
          <MenuBar toggle={toggle} isVisible={isVisible} />
        </button>

        {/* Mobile Dropdown Menu */}
        <Visible when={isVisible}>
          <div className="sm:hidden absolute top-full left-0 w-full bg-sky-500 z-10">
            <NavbarLink onLinkClick={toggle} className='flex flex-col text-lg font-sans font-bold border px-4 py-5' />
          </div>
        </Visible>
      </header>
    </main>
  );
};

export default AdminHeader;
