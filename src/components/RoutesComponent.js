import React from "react";
import "../styles/gamelist.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import GameList from "./GameList";

function RoutesComponent() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={GameList} />
            <Route exact path="/games" component={GameList} />

            {/* <Route exact path="/games/:id" component={...} /> */}
            {/* <Route exact path="/scores/:id" component={...} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default RoutesComponent;
