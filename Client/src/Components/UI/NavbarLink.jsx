import React from "react";
import { Links } from "../index";
import {MenuBar} from '../index'

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
        <nav className={className} >
        {navLinks.map(({to,text})=>(
            <ul  key={to} >
            <Links to={to} text={text} />
            </ul>
        ))}
      </nav>
  );
};

export default NavbarLink;
