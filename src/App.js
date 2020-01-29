import React from 'react';
import './App.css';
import LinksComponent from "./LinksComponent";
import RoutesComponent from './RoutesComponent';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <a
              className="App-link"
              href="/"
              // target="_blank"
              rel="noopener noreferrer"
          >
            Arobs Games
          </a>
        <RoutesComponent/>
        <LinksComponent/>
        </header>
      </div>
  );
}

export default App;
