import React from 'react';
import uuid from 'react-uuid';

const id = () =>{uuid()}

function TodoForm({onSubmit}) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    // onSubmit({
    //     id: id(),
    //     texr: input
    // })

    setInput('');
  }
  return <div>
    <form className='todo-form' onSubmit ={handleSubmit}>
        <input 
        className='todo-input'
        type="text" 
        placeholder='Add a todo' 
        value={input}
        name ='text'
        onChange={(event) => setInput(event.target.value)}
        />
    </form>
    <button className='todo-button'>Ddd todo</button>
  </div>;
}

export default TodoForm;
