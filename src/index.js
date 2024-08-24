import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WalletContext} from './contexts/WalletContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WalletContext>
    <App />
  </WalletContext>,
  </React.StrictMode>
);
