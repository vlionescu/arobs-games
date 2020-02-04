import React from "react";
import Requests from "./Requests";
import "../styles/scores.css";

class ScoresByGameId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            scores: []
        };
    }

    async requestState(id) {
        try{
        const response = await Requests.get("/scores/" + id);
        this.setState({id, scores: response});}
        catch (e) {
            console.log("Error in ScoreById: "+e);
        }
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        this.requestState(id);
    }

    async componentDidUpdate(nextProps, prevState) {
        const id = this.props.match.params.id;
        if (id !== prevState.id) {
            this.requestState(id);
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