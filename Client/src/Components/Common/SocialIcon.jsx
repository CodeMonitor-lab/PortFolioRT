import React from "react";
import { SiGithub } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SocialIcon = () => {
  return (
    <ul className="gap-2 flex ">
      <li><NavLink><FaSquareInstagram size={25} /></NavLink></li>
      <li><NavLink><SiGithub size={25}/></NavLink></li>
      <li><NavLink><FaFacebook size={25}/></NavLink></li>
      <li><NavLink><FaLinkedin size={25}/></NavLink></li>
    </ul>
  );
};

export default SocialIcon;
