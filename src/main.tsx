import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Battle from './pages/Battle';
import Wallet from './pages/Wallet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />}>
          <Route path="wallet" element={<Wallet />} />
          <Route path="battle" element={<Battle />} />
          <Route path="*" element={<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
