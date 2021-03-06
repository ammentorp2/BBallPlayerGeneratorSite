import React from 'react';
import axios from 'axios'; 
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './pages/Routes';

axios.defaults.baseURL = 'http://localhost:8080/';
// makes the content type for each put and post application/json. Not
// totally necessary, but is good practice: makes it so the application
// doesn't have to guess the type of data it's passingca
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

function App() {
  return (
    <BrowserRouter>
    <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
