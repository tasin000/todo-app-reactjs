import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from "uuid";
import Header from '../Header/Header';
import TodoInfo from '../TodoInfo/TodoInfo';
import Todos from '../Todos/Todos';
import './Home.css';

const Home = () => {
     const [todoDetails, setTodoDetails] = useState({ title: "", desc: "" });
     const { title, desc } = todoDetails;
     const [todos, setTodos] = useState([]);

     // Store the changed values of input fields
     const handleChange = (e) => {
          const todoProp = e.target.name;
          const todoValue = e.target.value;
          if (todoProp === "title" && todoValue) {
               setTodoDetails({ title: todoValue, desc });
          } else if (todoProp === "desc") {
               setTodoDetails({ title, desc: todoValue });
          } else if(!todoValue) {
               Swal.fire({
                    icon: 'error',
                    title: 'Invalid input',
                    text: 'Please enter valid input'
               })
          }
     }

     // Add todo to todos
     const handleSubmit = (e) => {
          e.preventDefault();
          setTodoDetails({ title: title, desc: desc });
          setTodos([...todos, {id: uuidv4(), ...todoDetails}]);
          // console.log(todos);
          setTodoDetails({ title: "", desc: "" });
          // console.log(todoDetails.id);
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Your todo has been added',
               showConfirmButton: false,
               timer: 1500
          });
     }

     // Delete an individual todo
     const deleteTodo = todoID => {
          const index  = todos.findIndex(todo => todo.id === todoID);
          console.log(todos[index], index);
          delete todos[index];
          setTodos([...todos]);
     }

     return (
          <div className='home'>
               <header>
                    <Header />
               </header>

               <main>
                    <section id="todo-info">
                         <TodoInfo todoDetails={todoDetails} todos={todos} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </section>

                    <section id="todos">
                         <Todos todos={todos} deleteTodo={deleteTodo} />
                    </section>
               </main>
          </div>
     );
};

export default Home;