import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import GameList from "./GameList";
import Register from "./Register";
import Login from "./Login";
import Iframe from "./Iframe";
import ScoreByGameId from "./ScoreByGameId";


function RoutesComponent() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={GameList} />
            <Route exact path="/games" component={GameList} />
            <Route exact path="/scores/:id" component={ScoreByGameId} />
            <Route exact path="/games/:id" component={Iframe} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/games/:id" component={Iframe} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default RoutesComponent;
