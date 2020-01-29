import React from "react";
import './App.css';
import { Route, Switch} from "react-router-dom";

function RoutesComponent() {
    return (

            <Switch>
                <Route exact path="/scores" component={Scores}/>
                <Route exact path="/games" component={Games}/>
                <Route exact path="/scores/:id" component={ScoresById}/>
                <Route exact path="/games/:id" component={GamesById}/>
                    {/*<GamesById />*/}

            </Switch>
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