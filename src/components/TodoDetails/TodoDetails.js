import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './TodoDetails.css';

const TodoDetails = ({ todoDetails, handleChange, handleSubmit }) => {
     return (
          <form action="" onSubmit={handleSubmit}>
               <div className='form-container'>
                    <div className="input-group">
                         <div className="form-control">
                              <label htmlFor="title">Title: </label>
                              <input type="text" name="title" id="title" onChange={handleChange} required />
                         </div>

                         <div className="form-control">
                              <label htmlFor="desc">Description: </label>
                              <textarea name="desc" id="desc" cols="30" rows="3" onChange={handleChange}></textarea>
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

export default TodoDetails;