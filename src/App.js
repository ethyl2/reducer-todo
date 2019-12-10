import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDos from './components/ToDos';
import ToDoForm from './components/ToDoForm';
import Footer from './components/Footer';
import arrow from './arrow.png';

import { reducer, initialState } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('in handleSubmit');
    dispatch({type: 'ADD', payload: e.target.todo.value});
  }

  const toggleCompleted = (event, id) => {
    event.target.classList.toggle('completed');
    dispatch({type: 'TOGGLE', payload: id});
    if (event.target.classList.contains('completed')) {
      const todoEl = document.getElementById(id);
      const node = document.createElement('img');
      node.classList.add('arrow');
      node.src = arrow;
      todoEl.prepend(node);
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

      </header>
      <ToDoForm handleSubmit={handleSubmit} />
      <ToDos todos={state} toggleCompleted={toggleCompleted}/>
      <button onClick={clearCompleted}>Clear Completed Tasks</button>
      <Footer />
    </div>
  );
}

export default App;
