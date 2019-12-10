import React, { useState } from 'react';

const ToDoForm = ( { handleSubmit }) => {
   const [todoInput, setTodoInput] = useState('');

   const handleChanges = e => {
       setTodoInput(e.target.value);
   }
    
    return (
        <form onSubmit={() => {
            handleSubmit();
        }}>
            <label htmlFor='todo'>Add something else for Katniss to do:</label>
            <input name='todo'
                id='todo'
                >
            </input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ToDoForm;