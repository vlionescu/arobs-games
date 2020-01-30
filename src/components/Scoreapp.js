import React from 'react';
import Score from './Score';
import {BrowserRouter as Router, Link} from "react-router-dom";

function Scoreapp() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/snake">Scores</Link>
                    </li>
                    <li>
                        <Link to="/picturematch">Games</Link>
                    </li>
                    <li>
                        <Link to="/tictactoe">ScoresById</Link>
                    </li>
                    <li>
                        <Link to="/hangman">GamesById</Link>
                    </li>
                    <li>
                        <Link to="/battleship">GamesById</Link>
                    </li>
                    <li>
                        <Link to="/mathquiz">GamesById</Link>
                    </li>
                    <li>
                        <Link to="/connectfour">GamesById</Link>
                    </li>
                </ul>

            </div>
            <Score/>
        </Router>
    );
}

export default Scoreapp