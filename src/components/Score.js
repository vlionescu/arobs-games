import React,{Component} from "react";
import OpenPopup from "./OpenPopup";
import ReactDOM from "react-dom";
import Popup from "./Popup";
import Scoreapp from "./Scoreapp";
import {Route} from "react-router-dom";

class Score extends Component {
    constructor() {
        super();
    }

    state = {
        displayMenu: false,
    };

    showDropdownMenu = this.showDropdownMenu.bind(this);
    hideDropdownMenu = this.hideDropdownMenu.bind(this);

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (
            <div className="dropdown" style={{background:"red",width:"200px"}}>
                <div className="button" onClick={this.showDropdownMenu}>Games</div>
                {this.state.displayMenu ? (
                    <ul>
                        {/*<switch>*/}
                            {/*<Route exact path="/snake" component={Snake}/>*/}
                            {/*<Route exact path="/picturematch" component={Picturematch}/>*/}
                            {/*<Route exact path="/tictactoe" component={Tictactoe}/>*/}
                            {/*<Route exact path="/hangman" component={Hangman}/>*/}
                            {/*<Route exact path="/battleship" component={Battleship}/>*/}
                            {/*<Route exact path="/mathquiz" component={Mathquiz}/>*/}
                            {/*<Route exact path="/connectfour" component={Connectfour}/>*/}
                            <li><a href="#">Snake</a></li>
                            <li>
                                <switch>ASD
                                    <Route exact path="/picturematch" component={Picturematch}/>
                                </switch>
                            </li>
                            <li>Tictactoe</li>
                            <li>Hangman</li>
                            <li>Battleship</li>
                            <li>Mathquiz</li>
                            <li>Connectfour</li>
                        {/*</switch>*/}
                    </ul>
                ):
                    (null)
                }

            </div>
        );
    }
}
function Snake() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}

function Picturematch() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}
function Tictactoe() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}
function Hangman() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}

function Battleship() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}
function Mathquiz() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}
function Connectfour() {
    return (
        <div>
            <h2>Scores</h2>
        </div>
    );
}

export default Score;