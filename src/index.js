import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';

// Forgetting this import gave me hard time for several hours
import { ShoppingCartProvider } from './store/shoppingcart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Forgetting to wrap context provider arund my app gave me really hard time for hours 
  <ShoppingCartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShoppingCartProvider>
);

// reportWebVitals();
