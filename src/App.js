import React from 'react';
import Navbar from "./components/navbar";
import './header.css';

import './App.css';
import RoutesComponent from './RoutesComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/style.css';
import GameList from "./components/GameList";

function App() {
  return (
      <Router>
        <RoutesComponent/>
          <Navbar></Navbar>
          <GameList />
      </Router>

  );
}


export default App;
