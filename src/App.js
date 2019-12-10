import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDos from './components/ToDos';
import ToDoForm from './components/ToDoForm';

import { reducer, initialState } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    console.log('in handleSubmit');
    dispatch({type: 'ADD', payload: e.target.todo.value});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
          Katniss Everdeen's Todo List
        </h1>

      </header>
      <ToDoForm handleSubmit={handleSubmit}/>
      <ToDos todos={state}/>
      
    </div>
  );
}

export default App;
