import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from "./components/register";
import { Provider } from 'react-redux';
import  store from './store';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Register />
          </header>
        </div>
    </Provider>
  );
}

export default App;
