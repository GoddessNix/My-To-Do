import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    {
      todo: 'Hacer tareas',
      complete: false,
      //para poder editar
      edit: false
    },
  ]);


  // Esto maneja el cambio del input
  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value , complete:false, edit:false});

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {

    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    }
    setTodos([...todos, todo]);
  };

  //checkbox
  const toggleTodo = (index,todo) =>{
    console.dir(todos);

    //el negado es para el cambio de estado
    todos[index].complete= !todos[index].complete
    setTodos([...todos])
  }

  // Elimina el todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

   //Edita el texto del todo
  const toggleEdit = (index) =>{
    // console.log(index);

    todos[index].edit= !todos[index].edit
    setTodos([...todos])
  };
  
  const updateTodo = (index, value)=>{
    todos[index].todo = value;
    setTodos([...todos])
  }



  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <label>Agregar todo</label> */}
        <br />
        <input type='text' placeholder='Agregar To Do...' name='todo' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={todos[index]}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          toggleEdit={toggleEdit}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );


};

export default Form;
