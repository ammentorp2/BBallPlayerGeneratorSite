import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { GenRandomPlayer } from "./components/genRandomPlayer";
import { GenPlayerForm } from './components/genPlayerForm';

axios.defaults.baseURL = 'http://localhost:8080/';
// makes the content type for each put and post application/json. Not
// totally necessary, but is good practice: makes it so the application
// doesn't have to guess the type of data it's passingca
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <GenPlayerForm />
      <GenRandomPlayer />
    </div>
  );
}

export default App;
