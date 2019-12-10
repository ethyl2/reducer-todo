import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDos from './components/ToDos';
import Katniss from './katniss.jpg';
import { reducer, initialState } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
          Katniss Everdeen's Todo List
        </h1>

      </header>
      <ToDos todos={state}/>
      
    </div>
  );
}

export default App;
