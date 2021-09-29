import React from 'react';

const Todo = ({ todo, index, deleteTodo, toggleEdit, toggleTodo, updateTodo }) => {
  return (
    <>
      <div className='list'>
        {!todo.edit && <h3>{todo.todo}</h3>}

        <input type="checkbox" className="checkbox" checked={todo.complete} onChange={() =>toggleTodo(index,todo)}/>


        <button className='btn-edit' onClick={() => toggleEdit(index)}>
          {/* para que cambie el texto de editar a guardar con el click */}
          {!todo.edit && <span>editar</span>}
          {todo.edit && <span>guardar</span>}
        </button>

        {todo.edit && <input type="text" placeholder={todo.todo} onChange={(e) =>updateTodo(index, e.target.value)} />}

        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          x
        </button>

      </div>
    </>
  );
};

export default Todo;
