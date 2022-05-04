import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
     return (
          <div className='footer-container'>
               <p>Copyright &copy; 2022 <Link to={'/'}>Todo App</Link> - All Rights Reserved </p>
               <p><strong>Author: </strong> <a href="https://github.com/tasin000" target={"_blank"} rel="noreferrer"> Tasin Anwar </a> </p>
          </div>
     );
};

export default Footer;