import React from "react";
import "../styles/variables.css";
import "../styles/popup.css";
import Requests from "./Requests";

const Popup = props => {
  const handleClick = async () => {
    const response = await Requests.get("/userid");
    if (response.ok) {
      const userId = response.id;
      const gameId = parseInt(props.gameId, 10);
      const responsePost = await Requests.create("/scores", {
        userId: userId,
        gameId: gameId,
        points: props.score
      });
      if (responsePost.ok) {
        props.closePopup();
      } else {
        alert("Something went wrong");
      }
    }
  };

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
          onClick={props.closePopup}
        />
      </div>
      <div id="score_section">
        <span id="score_txt">Your Score: </span>{" "}
        <span id="score">{props.score}</span>
      </div>
      {/*<div id="message">*/}
      {/*<h3>Congratulation you are in the first</h3> <h3> 20%</h3>*/}
      {/*</div>*/}
      <div id="add_name">
        <label>
          {" "}
          Hello, {props.username}. Do you want to save your score ?
        </label>
      </div>
      <button id="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Popup;
