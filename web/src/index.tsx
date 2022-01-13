import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';

const errorMessage = () => <h2>Ops, um erro aconteceu, tente atualizar a página</h2>;

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={errorMessage}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);