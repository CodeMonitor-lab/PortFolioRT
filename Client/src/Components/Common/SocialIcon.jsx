import React from "react";
import { SiGithub } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SocialIcon = () => {
  return (
    <ul className="gap-4 flex ">
      <li className="" ><NavLink><FaSquareInstagram color={'darkred'} size={30} /></NavLink></li>
      <li><NavLink><SiGithub color={'black'} size={30}/></NavLink></li>
      <li><NavLink><FaFacebook color={'darkblue'} size={30}/></NavLink></li>
      <li><NavLink><FaLinkedin color={'darkblue'} size={30}/></NavLink></li>
    </ul>
  );
};

export default SocialIcon;
