import React from 'react';
//import { useForm } from '../hooks/useForm';

const ToDoForm = ( { handleSubmit }) => {
    //const [todoInput, handleChanges, handleSubmit] = useForm('');
    
    return (
        <form onSubmit={handleSubmit}>
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