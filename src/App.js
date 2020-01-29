import React from 'react';
import Navbar from "./components/navbar";
import './header.css';

import './App.css';
<<<<<<< HEAD
import OpenPopup from "./components/OpenPopup";

function App() {
  return (
    <div className="App">
      <OpenPopup/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
=======
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

>>>>>>> develop
  );
}


export default App;
