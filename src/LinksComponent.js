import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";


function LinksComponent() {
    return (
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
    </div>
        </Router>
    );
}

export default LinksComponent