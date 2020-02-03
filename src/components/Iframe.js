import React, { Component } from "react";
import Requests from "./Requests";
import { _apiHost } from "./utils";
import "../styles/iframe.css";

export default class Iframe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  async componentDidMount() {
    const id = await this.props.match.params.id;
    const game = await Requests.get("/games/" + id);
    this.setState({ name: game.name });
  }

  render() {
    const host = _apiHost + "/games/";
    const index = "/index.html";

    return (
      <div>
        <h1>Game</h1>
        <div className="iframe-container">
          {this.state.name ? (
            <iframe
              className="iframe"
              title={this.state.name}
              src={host + this.state.name + index}
            ></iframe>
          ) : null}
        </div>
      </div>
    );
  }
}
