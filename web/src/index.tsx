import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { IconContext } from "react-icons";
import App from './App';

const errorMessage = () => {
  const styles = { color:'black' }
  return <h2 style={styles}>Ops, um erro aconteceu, tente atualizar a página</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={errorMessage}>
      <Router>
        <IconContext.Provider value={{ className: "icone" }}>
          <App />
        </IconContext.Provider>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);