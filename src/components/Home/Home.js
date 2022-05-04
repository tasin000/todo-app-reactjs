import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from "uuid";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TodoDetails from '../TodoDetails/TodoDetails';
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
          }
     }

     // Add todo to todos
     const handleSubmit = (e) => {
          e.preventDefault();
          setTodoDetails({ title: title, desc: desc });
          setTodos([...todos, { id: uuidv4(), ...todoDetails }]);
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Your todo has been added',
               showConfirmButton: false,
               timer: 1500
          });
          setTodoDetails({ title: "", desc: "" });
     }

     // Delete an individual todo
     const deleteTodo = todoID => {
          const filteredTodos = todos.filter(todo => todo.id !== todoID);
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    setTodos([...filteredTodos]);
                    Swal.fire({
                         icon: "success",
                         title: "Deleted Todo",
                         text: "Your Todo was Deleted"
                    })
               }
          })
     }

     // Clear Todos
     const clearTodos = () => {
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete todos!'
          }).then((result) => {
               if (result.isConfirmed) {
                    setTodos([]);
                    Swal.fire({
                         icon: "success",
                         title: "Cleared Todos",
                         text: "Your Todos List was Cleared"
                    })
               }
          });
     }

     return (
          <div className='home'>
               <header>
                    <Header />
               </header>

               <main>
                    <section id="todo-info">
                         <TodoDetails todoDetails={todoDetails} todos={todos} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </section>

                    <section id="todos">
                         <Todos todos={todos} deleteTodo={deleteTodo} clearTodos={clearTodos} />
                    </section>
               </main>

               <footer>
                    <Footer />
               </footer>
          </div>
     );
};

export default Home;