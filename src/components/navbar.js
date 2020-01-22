import * as React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to={"/games"}>Games</Link>
                    </li>
                    <li>
                        <Link to={"/scores"}>Scores</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Navbar;