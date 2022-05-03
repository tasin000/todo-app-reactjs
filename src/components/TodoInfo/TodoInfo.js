import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './TodoInfo.css';

const TodoInfo = ({todoDetails, handleChange, handleSubmit}) => {
     const {title, desc} = todoDetails;

     return (
          <form action="" onSubmit={handleSubmit}>
               <div className='form-container'>
                    <div className="input-group">
                         <div className="form-control">
                              <label htmlFor="title">Title: </label>
                              <input type="text" name="title" id="title" value={title} onChange={handleChange} required />
                         </div>

                         <div className="form-control">
                              <label htmlFor="desc">Description: </label>
                              <textarea name="desc" id="desc" cols="30" rows="3" value={desc} onChange={handleChange}></textarea>
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