import React from "react";
import Requests from "./Requests";
import "../styles/scores.css";

// import Scores from "../components/Scores";

class ScoresByGameId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            scores: []
        };
    }


    async componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id, scores: await Requests.get("/scores/" + id)});
    }

    async componentDidUpdate(nextProps, prevState) {
        const id = this.props.match.params.id;
        if (id !== prevState.id) {
            this.setState({id, scores: await Requests.get("/scores/" + id)});
        }
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
                <ul className="scoreListClass gameListClass">{this.getScoresInList()} </ul>
            </div>
        );
    }
}

export default ScoresByGameId;





