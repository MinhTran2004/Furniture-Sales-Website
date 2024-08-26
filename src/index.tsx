import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreenProduct from './View/JavaScript/ScreenProduct';
// import ScreenHomePager from './View/JavaScript/ScreenHomePager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScreenProduct />
  </React.StrictMode>
);

