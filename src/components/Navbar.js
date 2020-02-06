import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { removeTokenFromLocalStorage } from "./utils";
import Scores from "./Scores.js";
import "../styles/header.css";

const defaultLinks = (
  <Fragment>
    <ul className="ul-nav-list">
      <li className="li-nav-list">
        <Link className="nav-bar-link" to="/games">
          Games
        </Link>
      </li>
      <ul />
    </ul>
    <ul>
      <li className="li-nav-list">
        <Link className="nav-bar-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  </Fragment>
);

const Navbar = props => {
  const linksForAuthenticatedUser = (
    <Fragment>
      <ul className="ul-nav-list">
        <li className="li-nav-list">
          <Link className="nav-bar-link" to="/games">
            Games
          </Link>
        </li>
        <li className="li-nav-list">
          <Scores />
        </li>
      </ul>
      <ul className="ul-nav-list-2">
        <li className="nav-bar-link welcome-user">
          <p className="p-name"> Hello, {localStorage.getItem("username")}</p>
        </li>
        <li className="li-nav-list">
          <Link
            to="/#"
            className="nav-bar-link"
            onClick={() => {
              removeTokenFromLocalStorage();
              props.history.push("/");
            }}
          >
            Logout
          </Link>{" "}
        </li>
      </ul>
    </Fragment>
  );

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={require("../images/logo1.png")} alt="logo" />
        </Link>
      </div>
      <div className="nav-bar">
        {localStorage.token ? linksForAuthenticatedUser : defaultLinks}
      </div>
    </div>
  );
};
export default withRouter(Navbar);
