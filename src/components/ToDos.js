import React from 'react';

const ToDos = (props) => {
    return (
        <div className='todosBox'>
            {props.todos.map(todo => <div key={todo.id} className='todoBox'><h2>{todo.item}</h2></div>)}
        </div>
    );
}

export default ToDos;