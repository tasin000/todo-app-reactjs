import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './PageNotFound.css';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
     return (
          <div className='page-not-found'>
               <div className='page-not-found-contents'>
                    <p className='main-heading'></p>
                    <p className='heading'>Page Not Found...</p>
                    <p className='sub-heading'></p>
                    <NavLink to={'/'}>
                         <FontAwesomeIcon icon={faArrowLeftLong} />
                         Go back to Home
                    </NavLink>
               </div>
          </div>
     );
};

export default PageNotFound;