import React, { useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      text: todo,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  if (todos.length === 0) {
    return <div>No todos registered yet...</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          removeTodo={removeTodo}
          id={todo.id}
        />
      ))}
    </div>
  );
};
