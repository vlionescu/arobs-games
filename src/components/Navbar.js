import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={require("../images/logo1.png")} alt="logo" />
        </Link>
      </div>
      <div className="navbar">
        <ul id="nav-lists">
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/scores">Scores</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
