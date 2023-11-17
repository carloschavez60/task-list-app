import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App.jsx';
import { AppContextProvider } from './contexts/AppContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);