import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Todo.css';

const Todo = () => {
     return (
          <div className='todo'>
               <div className="todo-details">
                    <p className='todo-title'></p>
                    <p className='todo-desc'></p>
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