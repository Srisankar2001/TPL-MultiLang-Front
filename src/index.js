import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SideProvider } from './Context/SideContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideProvider>
      <App/>
    </SideProvider>
  </React.StrictMode>
);

