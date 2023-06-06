import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'



function Todo({todos, completeTodo}) {
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
            <RiCloseCircleLine />
            <TiEdit />
            
        </div>
    </div>
  )

  )
  
}

export default Todo
// установка иконок с помощью команды yarn add react-icons  
// или npm i react-icons
// https://react-icons.github.io/react-icons/