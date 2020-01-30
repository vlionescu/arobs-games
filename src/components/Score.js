import React,{Component} from "react";
import ReactDOM from "react-dom";
import Popup from "./Popup";
import Scoreapp from "./Scoreapp";

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
                        <li><a href="#">Snake</a></li>
                        {/*<Popup modal trigger={<button>Click Me</button>}>*/}
                        {/*    {close => <Scoreapp close={close} />}*/}
                        {/*</Popup>*/}
                        <li>Picturematch</li>
                        <li>Tictactoe</li>
                        <li>Hangman</li>
                        <li>Battleship</li>
                        <li>Mathquiz</li>
                        <li>Connectfour</li>
                    </ul>
                ):
                    (
                        null
                    )
                }

            </div>
        );
    }
}

export default Score;