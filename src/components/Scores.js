import React from "react";
import { withRouter } from "react-router-dom";
import Requests from "./Requests";
import "../styles/dropdown.css";

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      selectedValue: ""
    };
  }

  async componentDidMount() {
    this.setState({ games: await Requests.get("/games") });
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    const { pathname: prevPathname } = prevProps.location;

    if (prevPathname.includes("/scores") && pathname === "/games") {
      this.setState({ selectedValue: "" });
    }
  }

  onChangeHandle = id => {
    this.setState({ selectedValue: id });
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
        value={this.state.selectedValue}
        onChange={e => this.onChangeHandle(e.target.value)}
      >
        <option value="" disabled>
          Score
        </option>
        {this.getScoresInList()}
      </select>
    );
  }
}

export default withRouter(Scores);
