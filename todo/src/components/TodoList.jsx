import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginLeft: '8px',
              flexGrow: 1,
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '8px' }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
