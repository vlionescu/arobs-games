import React from "react";
import { Link, withRouter } from "react-router-dom";
import { removeTokenFromLocalStorage } from "./utils";
import Scores from "./Scores.js";
import "../styles/header.css";

const defaultLinks = (
  <ul className="ul-nav-list">
    <li className="li-nav-list">
      <Link className="navbar-link" to="/games">Games</Link>
    </li>
    <li className="li-nav-list btn-login">
      <Link className="navbar-link" to="/login">Login</Link>
    </li>
  </ul>
);

const Navbar = props => {
  const linksForAuthenticatedUser = (
    <ul className="ul-nav-list" >
      <li className="li-nav-list">
        <Link className="navbar-link" to="/games">Games</Link>
      </li>
      <li className="li-nav-list">
        <Scores />
      </li>

      <li >
        <p className="p-name" > Hello, {localStorage.getItem("username")}</p>
      </li>
        <li className="li-nav-list btn-login">
            <Link to = "/#"
                  className="navbar-link"
                  onClick={() => {
                      removeTokenFromLocalStorage();
                      props.history.push("/");
                  }}
            >
                Logout
            </Link>        </li>

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
