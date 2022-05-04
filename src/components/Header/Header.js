import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (
          <nav>
               <div className="nav-bar">
                    <div className="logo">
                         <h1>Todo App</h1>
                    </div>

                    <div className="nav-links">
                         <NavLink to={'/'}>Home</NavLink>
                         <NavLink to={'/about'}>About</NavLink>
                    </div>
               </div>
          </nav>
     );
};

export default Header;