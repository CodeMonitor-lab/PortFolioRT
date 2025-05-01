import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ to, text, className = '' }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`text-white font-bold hover:underline ${className}`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default Links;
