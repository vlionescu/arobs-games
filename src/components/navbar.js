import * as React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="logo">
                    <Link to={"/"}><img src={require("../images/logo1.png")} alt="logo" /></Link>
                </div>
                <div className="navbar">
                    <ul id="nav-lists">
                        <li>
                            <Link to={"/games"}>Games</Link>
                        </li>
                        <li>
                            <Link to={"/scores"}>Scores</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;