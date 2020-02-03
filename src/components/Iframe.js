import React, { Component } from "react";
import Requests from "./Requests";
import "../styles/iframe.css";

export default class Iframe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ game: await Requests.get("/games/" + id) });
    console.log(this.state.game);
  }

  render() {
    return (
      <div>
        <h1>Game</h1>
        <div className="iframe-container">
          <iframe
            className="iframe"
            title="szopol"
            src={
              "http://localhost:8080/games/" +
              this.state.game.name +
              "/index.html"
            }
          ></iframe>
        </div>
      </div>
    );
  }
}
