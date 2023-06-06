import React from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos);
    }
  return (
    <div>
        <h2>What's the Plan for Today?</h2>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList
