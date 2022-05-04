import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (
          <nav>
               <div className="nav-bar">
                    <div className="logo">
                         <Link to={'/'}>
                              <h1>Todo App</h1>
                         </Link>
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