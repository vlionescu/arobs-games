import React, {Component} from "react";
import Popup from "./Popup";

//this class is used to open the popup activity
//It contains the functions necessary for opening and closing the popup

class OpenPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    togglePopup=()=> {
        this.setState((prevState)=>({
            showPopup: !prevState.showPopup
        }));
    };
    render() {
        return (
            <div className="App">
                <button onClick={this.togglePopup}>show popup</button>
                {this.state.showPopup ?
                    <Popup score='89' closePopup={this.togglePopup }/>
                    :null
                }
            </div>
        );
    }
}

export default OpenPopup;