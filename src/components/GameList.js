import React from "react";
import Requests from "./Requests";
import ReactImageFallback from "react-image-fallback";

import "../App.css";

const getNpiecesOfWord = (str, pieces) => {
  let overview = "";
  if (str) {
    overview = str
      .split(/\s+/)
      .slice(0, pieces)
      .join(" ");
    if (str.length > overview.length) {
      overview += " ...";
    }
  }
  return overview;
};

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.gamesInGrid = this.gamesInGrid.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  async componentDidMount() {
    this.setState({ games: await Requests.get("/games") });
  }

  onClickHandle = id => {
    this.props.history.push("/games/" + id);
  };

  gamesInGrid = () => {
    const list = this.state.games.map(game => {
      let imgsrc = "http://localhost:8080/" + game.imageUrl;

      return (
        <div
          className="gamecomponent"
          onClick={() => this.onClickHandle(game.id)}
          key={game.id}
        >
          <ReactImageFallback
            className="screenshot"
            src={imgsrc}
            alt={game.name ? game.name : "No Title"}
            fallbackImage="./no-image.png"
            initialImage="loader.gif"
          />
          <div className="description">
            <p className="gamename">{game.name ? game.name : "No Title"}</p>
            <p className="descriptionfield">
              {game.description
                ? getNpiecesOfWord(game.description, 40)
                : "No Description"}
            </p>
          </div>
        </div>
      );
    });
    return list;
  };

  render() {
    return (
      <div className="container">
        <h2>Games</h2>
        <div className="gameList">{this.gamesInGrid()}</div>
      </div>
    );
  }
}

export default GameList;
