import React from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = ({todos, deleteTodo, clearTodos}) => {
     return (
          <div className='todos-container'>
               {todos.length > 0 ? <button className="clear-todo-btn" onClick={clearTodos}>Clear Todos</button> : <></>}
               
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