import React from 'react';
import AboutTodoApp from '../AboutTodoApp/AboutTodoApp';
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
                    <AboutTodoApp />
               </main>

               <footer>
                    <Footer />
               </footer>
          </div>
     );
};

export default About;