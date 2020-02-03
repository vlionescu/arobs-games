import React from "react";
import { Link, withRouter } from "react-router-dom";
import { removeTokenFromLocalStorage } from "./utils";
import Scores from "./Scores.js";
import "../styles/header.css";

const defaultLinks = (
  <ul id="nav-lists">
    <li>
      <Link to="/games">Games</Link>
    </li>
    <li className="btn-login">
      <Link to="/login">Login</Link>
    </li>
  </ul>
);

const Navbar = props => {
  const linksForAuthenticatedUser = (
    <ul id="nav-lists">
      <li>
        <Link to="/games">Games</Link>
      </li>
      <li>
        <Scores />
      </li>
      <li className="btn-login">
        <a
          href="/#"
          onClick={() => {
            removeTokenFromLocalStorage();
            props.history.push("/");
          }}
        >
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={require("../images/logo1.png")} alt="logo" />
        </Link>
      </div>
      <div className="navbar">
        {localStorage.token ? linksForAuthenticatedUser : defaultLinks}
      </div>
    </div>
  );
};
export default withRouter(Navbar);
