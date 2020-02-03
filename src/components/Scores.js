import React from "react";
import { withRouter } from "react-router-dom";
import Requests from "./Requests";
import "../styles/dropdown.css";

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      selectedvalue: ""
    };
  }

  async componentDidMount() {
    this.setState({ games: await Requests.get("/games") });
  }

  onChangeHandle = id => {
    this.setState({ selectedvalue: id });
    this.props.history.push("/scores/" + id);
  };

  getScoresInList = () => {
    const list = this.state.games.map((game, index) => {
      return (
        <option key={index} value={game.id}>
          {game.name}
        </option>
      );
    });

    return list;
  };

  render() {
    return (
      <select
        className="select-css"
        value={this.state.selectedvalue}
        onChange={e => this.onChangeHandle(e.target.value)}
      >
        >{this.getScoresInList()}
      </select>
    );
  }
}

export default withRouter(Scores);
