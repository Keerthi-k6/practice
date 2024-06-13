import React from 'react'

const TodoList = ({todos, toggleTodos, deleteTodos}) => {
  return (
    <div>
    {
      todos.map((todo)=>
      {
        return <div className="" key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodos(todo.id)}/>
          <span >{todo.text}</span>
          <button onClick={()=>deleteTodos(todo.id)}> 
            Delete 
          </button>
        </div>
      })
    }
    </div>
  )
}

export default TodoList
