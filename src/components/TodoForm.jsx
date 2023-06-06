import React from 'react';
import uuid from 'react-uuid';

const id = () =>{return uuid()}

function TodoForm(props) {
  const [input, setInput] = React.useState('');

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
        <input 
        className='todo-input'
        type="text" 
        placeholder='Add a todo' 
        value={input}
        name ='text'
        onChange={handleChange}
        />
    </form>
    <button  onClick={handleSubmit} className='todo-button'>Ddd todo</button>
  </div>;
}

export default TodoForm;
