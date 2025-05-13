import React from "react";
import { Links } from "../index";
import {MenuBar} from '../index'
import { Link } from "react-router-dom";

const NavbarLink = ({className}) => {
  const navLinks = [
      { to: '/', text: 'Home' },
      { to: '/research', text: 'Research' },
      { to: '/hiring', text: 'Hiring' },
      { to: '/projects', text: 'Projects' },
      { to: '/about', text: 'About' },
      { to: '/dashboard', text: 'Dashboard' },
  ];

  return (
    <ul className={`${className} flex gap-2`} >
    {navLinks.map(({to,text})=>(
      <li key={to} >
        <Link  to={to} >{text}</Link>
        <hr className="sm:hidden border border-gray-600 my-2" />
      </li>
          ))}
    </ul>
  );
};

export default NavbarLink;
