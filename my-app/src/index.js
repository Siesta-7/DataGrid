import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {InfoContextProvider} from './contextAPI.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoContextProvider>
      <App/>
    </InfoContextProvider>   
  </React.StrictMode>
);
