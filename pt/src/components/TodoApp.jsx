import React from 'react'
import {useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import uuid from 'react-uuid'
const TodoApp = () => {
    const [todos , setTodos ] = useState([]);
    const addTodos=(text)=>
        {
            const newTodos = {id:uuid() ,text , completed:false};
            setTodos([...todos,newTodos]);
            console.log(todos)
        }
    const toggleTodos = (id)=>
        {
           setTodos(
            todos.map((todo)=>
                todo.id === id  ? {...todo ,completed : !todo.completed} : todo
            )
           )
        }
    const deleteTodos = (id) =>
        {
            setTodos(
                todos.filter((todo) => todo.id!==id )
            )
        }

  return (
    <div>
        <h1>To do App</h1>
        <TodoInput addTodos={addTodos}/>
        <TodoList todos= {todos} toggleTodos = {toggleTodos} deleteTodos={deleteTodos}/>
    </div>
  )
}

export default TodoApp
