import React from 'react';
import { logo} from "../assets";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1d1836] text-neutral-content">
        <aside className='flex'>
            <img src={logo} className='w-6' alt="" />
          <p>Towhid | Web Developer<br/>Copyright © 2023, Towhid, All Rights Reserved</p>
        </aside> 
        <nav>
          <header className="footer-title">Social</header> 
          <div className="grid grid-flow-col gap-4">
         
       
          <a href="https://github.com/Towhidul123"> <FaGithub /></a>
          <a href="https://www.linkedin.com/in/k-m-towhidul-islam-386508230/"> <FaLinkedin /></a>
          </div>
        </nav>

        <nav>
        <header className="footer-title">Gmail</header> 
            <h2>kmtowhidulislam@gmail.com</h2>
        </nav>
      </footer>
    );
};

export default Footer;