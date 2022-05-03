import React from 'react';
import Header from '../Header/Header';
import TodoInfo from '../TodoInfo/TodoInfo';
import Todos from '../Todos/Todos';
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

                    <section id="todos">
                         <Todos />
                    </section>
               </main>
          </div>
     );
};

export default Home;