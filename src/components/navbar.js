import * as React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        // const navList = document.getElementById("nav-lists");
        // function Show() {
        //     navList.classList.add("_Menus-show");
        // }
        //
        // function Hide() {
        //     navList.classList.remove("_Menus-show");
        // }

        return(
            <div className="container">
                <div className="logo">
                    <Link to={"/"}><img src={require("../images/logo1.png")} alt="logo" /></Link>
                </div>
                <div className="navbar">
                    {/*<div className="icon-bar" onClick={Show()}>*/}
                    {/*    <i></i>*/}
                    {/*    <i></i>*/}
                    {/*    <i></i>*/}
                    {/*</div>*/}
                    <ul id="nav-lists">
                        {/*<li className="close"><span onClick={Hide()}>×</span></li>*/}
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