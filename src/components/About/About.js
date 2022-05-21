import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
     return (
          <div className='about'>
               <header>
                    <Header />
               </header>

               <main>
                    <div className='about-container'>
                         <div className="about-title">
                              <h3>About Todo App</h3>
                         </div>

                         <div className="about-desc">
                              <p></p>
                         </div>
                    </div>
               </main>

               <footer>
                    <Footer />
               </footer>
          </div>
     );
};

export default About;