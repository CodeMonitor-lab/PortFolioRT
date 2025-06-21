import React from "react";
import {MenuBar} from '../index'
import { Link } from "react-router-dom";

const NavbarLink = ({className,onLinkClick}) => {
  const navLinks = [
      { to: '/', text: 'Home' },
      // { to: '/research', text: 'Research' },
      { to: '/projects', text: 'Projects' },
      { to: '/hiring', text: 'Hiring' },
      // { to: '/about', text: 'About' },
      {to:'/contact',text:'Contact Us!'},
      // { to: '/dashboard', text: 'Dashboard' },
  ];

  return (
    <ul onClick={onLinkClick} className={`${className} flex gap-2`} >
    {navLinks.map(({to,text})=>(
      <li key={to} >
        <Link to={to} >{text}</Link>
      </li>
          ))}
    </ul>
  );
};

export default NavbarLink;
