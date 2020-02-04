import React, { Component } from "react";
import "../styles/variables.css";
import "../styles/popup.css";

class Popup extends Component {
  handleClick() {
    //todo send to server the submit information
  }

  render() {
    return (
      <div className="popup_div">
        <div id="top">
          <img
            id="victory_txt"
            src={require("../images/victory.png")}
            alt="victory text"
          />
          <img
            id="close_btn"
            src={require("../images/close_btn.png")}
            alt="close button"
            onClick={this.props.closePopup}
          />
        </div>
        <div id="score_section">
          <span id="score_txt">Your Score: </span>{" "}
          <span id="score">{this.props.score}</span>
        </div>
        {/*<div id="message">*/}
        {/*<h3>Congratulation you are in the first</h3> <h3> 20%</h3>*/}
        {/*</div>*/}
        <div id="add_name">
          <label>
            {" "}
            Hello, {this.props.username}. Do you want to save your score ?
          </label>
        </div>
        <button id="submit" onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default Popup;
