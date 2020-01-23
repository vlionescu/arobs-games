import React from "react";
import { withRouter, Link } from "react-router-dom";

const Header = props => {
  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    props.history.push("/");
  }

  const loginRegLink = (
    <ul className="nav-list">
      <li className="nav-item ">
        <Link to="/" className="nav-link">
          Games
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/registration" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="nav-list">
      <li className="nav-item ">
        <Link to="/" className="nav-link">
          Games
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/scores" className="nav-link">
          Scores
        </Link>
      </li>
      <li className="nav-item">
        <a href="/logout" onClick={event => logOut(event)} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <header>
      <Link className="headerLink" to="/">
        <img className="logo" src={"./arobs_logo.png"} alt="AROBS logo"></img>
        <div className="titleclass">
          <h1>{props.text}</h1>
        </div>
      </Link>
      <div className="navbar">
        {localStorage.token ? userLink : loginRegLink}
      </div>
    </header>
  );
};

export default withRouter(Header);
