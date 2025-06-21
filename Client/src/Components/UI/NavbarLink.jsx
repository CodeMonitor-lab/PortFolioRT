import React from "react";
import {MenuBar} from '../index'
import { Link } from "react-router-dom";

const NavbarLink = ({className,onLinkClick}) => {
  const navLinks = [
      { to: '/', text: 'Home' },
      { to: '/skills', text: 'Skills' },
      { to: '/projects', text: 'Projects' },
      {to:'/contact',text:'Connect-With'},
      { to: '/hiring', text: 'Hiring' },
      { to: '/about', text: 'me!' },
      // { to: '/dashboard', text: 'Dashboard' },
  ];

  return (
    <ul onClick={onLinkClick} className={`${className} flex gap-2`} >
    {navLinks.map(({to,text})=>(
      <li key={to} >
        <Link className="hover:text-blue-900" to={to} >{text}</Link>
      </li>
          ))}
    </ul>
  );
};

export default NavbarLink;
