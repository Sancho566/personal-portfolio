import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
