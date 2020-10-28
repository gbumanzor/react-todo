import React, { useState } from 'react';
import './TodoForm.css';

export const TodoForm = (props) => {
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  return (
    <div className="todo-form">
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={() => props.addTodo(todo)}>Add Todo</button>
    </div>
  );
};
