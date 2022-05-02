import React from 'react';
import Header from '../Header/Header';
import TodoInfo from '../TodoInfo/TodoInfo';
import './Home.css';

const Home = () => {
     return (
          <div className='home'>
               <header>
                    <Header />
               </header>

               <main>
                    <section id="todo-info">
                         <TodoInfo />
                    </section>
               </main>
          </div>
     );
};

export default Home;