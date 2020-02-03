import React, { Component } from "react";
import Requests from "./Requests";
import { saveTokenIntoLocalStorage } from "./utils.js";
import "../styles/register.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            password: null,
            loginerror:null
            // i modified here for state commit
        };
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value } );
    };
  

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

    handleSubmit = async event => {
        event.preventDefault();
        const { name, password } = this.state;
        const response = await Requests.create("/login", { name: name, password: password })
                if(!response.ok) {
                    this.setState({ loginerror: response.error } );
                }
                if (response.auth){
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("username", response.username);
                    this.props.history.push("/games");

                }
    };

  handleSubmit = event => {
    event.preventDefault();
    const { name, password } = this.state;
    Requests.create("/login", { name: name, password: password }).then(
      response => {
        this.setState({ loginerror: "" });
        if (!response.ok) {
          this.setState({ loginerror: response.error });
        }
        if (saveTokenIntoLocalStorage(response)){
          this.props.history.push("/");
        };
      }
    );
  };

  toRegister = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="containerRegister">
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <div className="invalid-feedback">
            <p className="validation">{this.state.loginerror}</p>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Log in
          </button>
          <button
            onClick={this.toRegister}
            className="btn btn-success btn-block"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}
