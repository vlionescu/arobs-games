import React from 'react';
import './App.css';
import LinksComponent from "./LinksComponent";
import RoutesComponent from './RoutesComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
      <Router>
        <RoutesComponent/>
        <LinksComponent/>
      </Router>
  );
}

export default App;
