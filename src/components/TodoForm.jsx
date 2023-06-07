import React from 'react';
import uuid from 'react-uuid';

const id = () =>{return uuid()}

function TodoForm(props) {
  const [input, setInput] = React.useState(props.edit ? props.value : '');
//хуки useRef и useEffect исползуется для взимодействие с кнопкой Enter
  const inputRef = React.useRef(null);

  React.useEffect(() =>{
    inputRef.current.focus()
  })

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    props.onSubmit({
        // id: Math.floor(Math.random()*10000),
        id: id(),
        text: input
    });
    setInput('');
  }
  return <div>
    <form className='todo-form' onSubmit ={handleSubmit}>
      {props.edit ? (
        <>
          <input 
         className='todo-input edit'
         type="text" 
         placeholder='Update your item' 
         value={input}
         name ='text'
         onChange={handleChange}
         ref ={inputRef}
         />
         <button  onClick={handleSubmit} className='todo-button edit'>Update</button>
        </>
         ) : (
          <>
          <input 
          className='todo-input'
          type="text" 
          placeholder='Add a todo' 
          value={input}
          name ='text'
          onChange={handleChange}
          ref ={inputRef}
          />
          <button  onClick={handleSubmit} className='todo-button'>Add todo</button>
          </>
          
         )}
       
    </form>
  </div>;
}

export default TodoForm;
