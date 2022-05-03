import React from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = ({todos, deleteTodo}) => {
     // console.log(todos)
     return (
          <div className='todos-container'>
               {
                    todos.map((todo, index) => 
                    <Todo
                         key={index}
                         todo={todo}
                         deleteTodo={deleteTodo}
                    />)
               }
          </div>
     );
};

export default Todos;