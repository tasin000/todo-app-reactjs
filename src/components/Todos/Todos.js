import React from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = () => {
     return (
          <div className='todos-container'>
               <Todo />
               <Todo />
          </div>
     );
};

export default Todos;