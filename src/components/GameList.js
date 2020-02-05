import React from "react";
import Requests from "./Requests";
import ReactImageFallback from "react-image-fallback";
import { getNpiecesOfWord, _apiHost } from "./utils";
import "../styles/gamelist.css";
import Loader from "./Spinner";


class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  async componentDidMount() {
    this.setState({ games: await Requests.get("/games") });
  }

  onClickHandle = id => {
    this.props.history.push("/games/" + id);
  };

  gamesInGrid = () => {
    const list = this.state.games.map(game => {
      let imgsrc = _apiHost + "/" + game.imageUrl;

      return (
        <div
          className="gamecomponent"
          onClick={() => this.onClickHandle(game.id)}
          key={game.id}
        >

          <div className="card-side front-side">
            <ReactImageFallback
                className="screenshot"
                src={imgsrc}
                alt={game.name ? game.name : "No Title"}
                fallbackImage={<Loader width={150}/>}
            />
            <p className="gamename">{game.name ? game.name : "No Title"}</p>
          </div>
          <div className="card-side back-side">
            <div className="description">
              <p className="descriptionfield">
                {game.description
                  ? getNpiecesOfWord(game.description, 40)
                  : "No Description"}
              </p>
            </div>
            <button className="btn-play">PLAY</button>
          </div>
        </div>
      );
    });
    return list;
  };

  render() {
    return (
      <div className="containerGamelist">
        <h2>Games</h2>
        <div className="gameList">{this.gamesInGrid()}</div>
      </div>
    );
  }
}

export default GameList;
