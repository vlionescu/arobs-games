import React from "react";
import Requests from "./Requests";
import "../styles/scores.css";

class ScoresByGameId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      scores: []
    };
  }

  async requestState(id) {
    try {
      const response = await Requests.get("/scores/" + id);
      this.setState({ id, scores: response });
    } catch (e) {
      console.log("Error in ScoreById: " + e);
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.requestState(id);
  }

  componentDidUpdate(nextProps, prevState) {
    const id = this.props.match.params.id;
    if (id !== prevState.id) {
      this.requestState(id);
    }
  }

  getScoresInList = () => {
    const list = this.state.scores.map((score, index) => {
      return (
        <tr key={index} className="scoreListItem">
          <td>{index + 1}</td>
          <td>{score.Username}</td>
          <td>{score.Points}</td>
        </tr>
      );
    });

    return list;
  };

  render() {
    return (
      <div id="mainDivScore">
        <table className="scoreListItem scoreTable">
          <thead>
            <tr>
              <td id={"top10"} align={"center"} colSpan="3">
                Top 10 Players
              </td>
            </tr>
            <tr className={"users"}>
              <th className={"users"}>Rank</th>
              <th className={"users"}>Username</th>
              <th className={"users"}>Score</th>
            </tr>
          </thead>
          <tbody>{this.getScoresInList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ScoresByGameId;
