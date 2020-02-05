import React, { Component } from "react";
import "../styles/variables.css";
import "../styles/popup.css";
import Requests from "./Requests";

class Popup extends Component {
    constructor(props) {
        super(props);
    }

handleClick= async() => {
      const response = await Requests.get("/userid");
      if(response.ok){
          const userId = response.id;
          const gameId = parseInt(this.props.gameId,10);
          const responsePost = await Requests.create("/scores", { userId: userId, gameId: gameId, points: this.props.score });
          if(responsePost.ok){
              this.props.closePopup();
          }
         else{
                alert("Something went wrong");
          }



      }
  };

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
