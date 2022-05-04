import React from 'react';
import AboutTodoApp from '../AboutTodoApp/AboutTodoApp';
import Header from '../Header/Header';
import './About.css';

const About = () => {
     return (
          <div className='about'>
               <header>
                    <Header />
               </header>

               <main>
                    <AboutTodoApp />
               </main>
          </div>
     );
};

export default About;