import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Todo.css';

const Todo = ({ todo, deleteTodo }) => {
     const { id, dateCreated, timeCreated, title, desc } = todo;

     return (
          <div className='todo'>
               <div className="todo-details">
                    <div className="create-todo">
                         <p className='todo-creation'>{dateCreated}</p>
                         <p className='todo-creation'>{timeCreated}</p>
                    </div>
                    <p className='todo-title'>{title}</p>
                    <p className='todo-desc'>{desc}</p>
               </div>

               <div className="icons">
                    <div className="icon">
                         <FontAwesomeIcon icon={faTrashCan} className="delete" onClick={() => deleteTodo(id)} />
                    </div>
               </div>
          </div>
     );
};

export default Todo;