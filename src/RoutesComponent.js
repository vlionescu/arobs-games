import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function RoutesComponent() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
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
        </Router>
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
export default RoutesComponent;