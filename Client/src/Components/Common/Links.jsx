import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ to, text, className }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`text-blue-200 hover:text-white ${className}`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default Links;
