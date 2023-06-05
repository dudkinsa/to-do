import React from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = React.useState([])
  return (
    <div>
        <h2>What's the Plan for Today?</h2>
        <TodoForm />
    </div>
  )
}

export default TodoList
