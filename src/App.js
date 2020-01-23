import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <a
              className="App-link"
              href="/games"
              // target="_blank"
              rel="noopener noreferrer"
          >
            Arobs Games
          </a>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/scores">Scores</Link>
                </li>
                <li>
                  <Link to="/games">Games</Link>
                </li>
                <li>
                  <Link to="/scores/:id">ScoresById</Link>
                </li>
                <li>
                  <Link to="/games/:id">GamesById</Link>
                </li>
              </ul>

              <hr />
              <Switch>
                <Route exact path="/scores">
                  <Scores />
                </Route>
                <Route path="/games">
                  <Games />
                </Route>
                <Route path="/scores/:id">
                  <ScoresById />
                </Route>
                <Route path="/games/:id">
                  <GamesById />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
      </div>
  );
}

function Scores() {
  return (
      <div>
        <h2>Scores</h2>
      </div>
  );
}

function Games() {
  return (
      <div>
        <h2>Games</h2>
      </div>
  );
}

function ScoresById() {
  return (
      <div>
        <h2>Scores By Id</h2>
      </div>
  );
}

function GamesById() {
  return (
      <div>
        <h2>Games by id</h2>
      </div>
  );
}
export default App;
