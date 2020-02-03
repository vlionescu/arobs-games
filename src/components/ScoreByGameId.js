import React from "react";
import Requests from "./Requests";
import "../styles/scores.css"

class ScoresByGameId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ scores: await Requests.get("/scores/" + id) });
  }

  getScoresInList = () => {
    const list = this.state.scores.map((score, index) => {
      return (
        <li className="scoreListItem" key={index}>
          <p>
            {score.Points} <span>{score.Username}</span>
          </p>
        </li>
      );
    });

    return list;
  };

  render() {
    return (
      <div>
        <h2>Scores</h2>
        <ul className="scoreListClass">{this.getScoresInList()} </ul>
      </div>
    );
  }
}

export default ScoresByGameId;