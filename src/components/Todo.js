import React from 'react';
import './Todo.css';

export const Todo = (props) => {
  return (
    <div className="todo">
      <p>{props.text}</p>{' '}
      <button onClick={() => props.removeTodo(props.id)}>&times;</button>
    </div>
  );
};
