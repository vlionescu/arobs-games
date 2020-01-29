import React from 'react';
import Navbar from "./components/navbar";
import './header.css';

import logo from './logo.svg';
import './App.css';
import RoutesComponent from './RoutesComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
      <Router>
        <RoutesComponent/>
          <Navbar></Navbar>
      </Router>

  );
}


export default App;
