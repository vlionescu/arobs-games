import React, { Component } from "react";
import "../styles/variables.css";
import "../styles/popup.css";
import Popup from "./Popup";

//this class is used to open the popup activity
//It contains the functions necessary for opening and closing the popup

class OpenPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      username: ""
    };
  }

  async componentDidMount() {
    this.setState({  username:localStorage.getItem("username")  });
  }

  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.togglePopup}>show popup</button>
        {this.state.showPopup ? (
          <Popup score="89"  username={this.state.username}  closePopup={this.togglePopup} />
        ) : null}
      </div>
    );
  }
}

export default OpenPopup;
