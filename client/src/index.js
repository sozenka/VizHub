import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple, reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. Apprenez-en plus : https://bit.ly/CRA-vitals
reportWebVitals();
