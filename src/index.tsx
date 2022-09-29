/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/pages';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store/store';

// Use consistent styling
import './styles/main.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
