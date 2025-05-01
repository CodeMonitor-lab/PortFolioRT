import React, { useState } from 'react';
import { ButtonSubmit, Links, ToggleSearch } from '../index';
import { TbMenuOrder } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      <nav className="bg-sky-700 px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Top section: logo + right controls */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-white font-bold text-xl">MySite</div>
          <div className="flex items-center gap-3 md:hidden">
            <ToggleSearch />
            <button
              className="bg-gray-700 p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <TbMenuOrder size={25} color="#fff" />
            </button>
          </div>
        </div>

        {/* Desktop Search (visible only on md+) */}
        <div className="hidden md:flex items-center gap-4">
          <ToggleSearch />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-semibold mt-4 md:mt-0">
          <Links to='/' text='Home' />
          <Links to='/research' text='Research' />
          <Links to='/hiring' text='Hiring' />
          <Links to='/projects' text='Projects' />
          <Links to='/about' text='About' />
          <Links to='/dashboard' text='Dashboard' />
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 mt-4 text-white font-semibold w-full md:hidden">
            <Links to='/' text='Home' />
            <Links to='/research' text='Research' />
            <Links to='/hiring' text='Hiring' />
            <Links to='/projects' text='Projects' />
            <Links to='/about' text='About' />
            <Links to='/dashboard' text='Dashboard' />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
