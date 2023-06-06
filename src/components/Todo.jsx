import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'



function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = React.useState({
        id: null,
        value: '',
    })
  return todos.map((todo, index)=>(
    <div key = {index} className={todo.isComplite ? 'todo-row complete': 'todo-row'}>
        <div key={todo.id} onClick ={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine
            className='delete-icon'
            onClick={() => removeTodo(todo.id)}
            />
            <TiEdit 
             className='edit-icon'
             onClick={() => setEdit({id: todo, value: todo.text})}
             />
            
        </div>
    </div>
  )

  )
  
}

export default Todo
// установка иконок с помощью команды yarn add react-icons  
// или npm i react-icons
// https://react-icons.github.io/react-icons/