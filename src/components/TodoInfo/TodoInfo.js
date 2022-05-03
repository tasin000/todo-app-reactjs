import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './TodoInfo.css';

const TodoInfo = () => {
     return (
          <form action="">
               <div className='form-container'>
                    <div className="input-group">
                         <div className="form-control">
                              <label htmlFor="title">Title: </label>
                              <input type="text" name="title" id="title" />
                         </div>

                         <div className="form-control">
                              <label htmlFor="desc">Description: </label>
                              <textarea name="desc" id="desc" cols="30" rows="3"></textarea>
                         </div>
                    </div>

                    <button type="submit">
                         Add Todo
                         <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
               </div>
          </form>
     );
};

export default TodoInfo;