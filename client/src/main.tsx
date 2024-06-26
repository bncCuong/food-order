/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './appRoutes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
