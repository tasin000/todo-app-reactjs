import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Todo.css';

const Todo = () => {
     // const { title, desc } = todoDetail;

     return (
          <div className='todo'>
               <div className="todo-details">
                    <p className='todo-title'>Todo app</p>
                    <p className='todo-desc'>Hello welcome to todo app</p>
               </div>

               <div className="icons">
                    <div className="icon">
                         <FontAwesomeIcon icon={faCircleCheck} className="check" />
                    </div>

                    <div className="icon">
                         <FontAwesomeIcon icon={faTrashCan} className="delete" />
                    </div>
               </div>
          </div>
     );
};

export default Todo;