import React from 'react';
import ReactDOM from 'react-dom/client'; // Responsável por renderizar
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegacao from './Navegacao'; // Importado de forma padrão. Hoje em dia se usa react-router-dom

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao></Navegacao>,
    <App title="Hello Gama Academy"/>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
