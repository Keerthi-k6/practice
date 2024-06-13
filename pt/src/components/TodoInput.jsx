import React, { useState } from 'react'

const TodoInput = ({addTodos}) => {
  const [ text ,setText] = useState('');
   const handleSubmit = (e) =>
    {
      e.preventDefault()
      addTodos(text);
      setText('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add todos ' value={text} onChange={(e)=>setText(e.target.value)} />
         <button type='submit'> Add</button>
      </form>
    </div>
  )
}

export default TodoInput
