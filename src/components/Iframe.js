import React, { Component } from "react";
import Requests from "./Requests";
import { _apiHost } from "./utils";
import "../styles/iframe.css";
import Popup from "./Popup";
import Loader from "./Spinner";

export default class Iframe extends Component {
  constructor(props) {
    window.setScore = score => {
      this.state.score = score;
      this.togglePopup();
    };
    super(props);
    this.state = {
      name: "",
      showPopup: false,
      score: null,
      username: "",
      error: null
    };
  }
  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
  };

  async componentDidMount() {
    const id = await this.props.match.params.id;
    const game = await Requests.get("/games/" + id);
    if (!game.ok) {
      this.setState({ error: game.error });
      setTimeout(() => this.props.history.push("/login"), 3000);
    }
    if (game.name) {
      this.setState({
        name: game.name,
        username: localStorage.getItem("username")
      });
    }
  }

  render() {
    const host = _apiHost + "/games/";
    const index = "/index.html";
    const gameAuth = (
      <div>
        <h1>Game</h1>
        <div className="iframe-container">
          {this.state.name ? (
            <iframe
              className="iframe"
              title={this.state.name}
              src={host + this.state.name + index}

            ></iframe>
          ) : (
            <Loader />
          )}
        </div>
        {this.state.showPopup ? (
          <Popup
            score={this.state.score}
            username={this.state.username}
            closePopup={this.togglePopup}
          />
        ) : null}
      </div>
    );
    const gameError = <div>{this.state.error}</div>;
    return <div>{!this.state.error ? gameAuth : gameError}</div>;
  }
}
