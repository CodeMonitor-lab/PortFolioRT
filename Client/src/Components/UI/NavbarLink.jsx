import React from "react";
import {MenuBar} from '../index'
import { Link } from "react-router-dom";

const NavbarLink = ({className,onLinkClick}) => {
  const navLinks = [
      { to: '/', text: 'Home' },
      { to: '/research', text: 'Research' },
      { to: '/hiring', text: 'Hiring' },
      { to: '/projects', text: 'Projects' },
      { to: '/about', text: 'About' },
      { to: '/dashboard', text: 'Dashboard' },
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
