import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './componentes/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
require('dotenv').config();

let userCookie = axios.get(process.env.COOKIE_ROUTE);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home data={{
      logIn: false,
      username: userCookie.username
    }}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
