import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDos from './components/ToDos';
import ToDoForm from './components/ToDoForm';
import Footer from './components/Footer';
import arrow from './arrow.png';
import moment from 'moment';

import { reducer, initialState } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const today = moment();
  const [todoInput, setTodoInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('in handleSubmit');
    dispatch({type: 'ADD', payload: e.target.todo.value});
    setTodoInput('');
  }

  const handleChanges = e => {
    setTodoInput(e.target.value);
  }

  const toggleCompleted = (event, id) => {
    event.target.classList.toggle('completed');
    dispatch({type: 'TOGGLE', payload: id});
    const todoEl = document.getElementById(id);

    //Remove arrow and date if present
    const arrowEl = document.getElementById(`arrow${id}`);
    const timeEl = document.getElementById(`time${id}`);
    if (arrowEl) {
      todoEl.removeChild(arrowEl);
    }
    if (timeEl) {
      todoEl.removeChild(timeEl);
    }
    
    // Otherwise, add arrow and date completed
    if (event.target.classList.contains('completed')) {
      
      const node = document.createElement('img');
      node.classList.add('arrow');
      node.id = `arrow${id}`;
      node.src = arrow;
      todoEl.prepend(node);
      const timeStamp = moment().calendar();
      const timeNode = document.createElement('p');
      timeNode.id = `time${id}`;
      timeNode.textContent= `Completed: ${timeStamp}`;
      
      todoEl.appendChild(timeNode);
    }
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR'});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
          Katniss Everdeen's Todo List
        </h1>
        <h2>{today.format("dddd, MMMM Do YYYY, h:mm:ss a")}</h2>

      </header>
      <ToDoForm handleSubmit={handleSubmit} handleChanges={handleChanges} todoInput={todoInput} />
      <ToDos todos={state} toggleCompleted={toggleCompleted}/>
      <button onClick={clearCompleted}>Clear Completed Tasks</button>
      <Footer />
    </div>
  );
}

export default App;
