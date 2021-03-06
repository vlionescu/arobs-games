import React, { Component } from "react";
import Requests from "./Requests";
import "../styles/register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      nameError: null,
      emailError: null,
      passwordError: null,
      registererror: null
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => {
      this.validatePassword();
    });
  };

  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        name.length > 3 ? null : "Name must be at least 3 characters long."
    });
  };

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)
        ? null
        : "Not a valid email."
    });
  };

  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      passwordError:
        password.length > 3
          ? null
          : "Password must be at least 3 characters long"
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, password } = this.state;

    if (
      this.state.nameError !== null ||
      this.state.passwordError !== null ||
      this.state.emailError !== null
    ) {
      this.setState({ registererror: "Something went wrong." });
    } else {
      const response = await Requests.create("/users", {
        name: name,
        email: email,
        password: password
      });
      if (!response.ok) {
        this.setState({ registererror: response.error });
      }
      if (response.auth) {
        this.props.history.push("/login");
      }
    }
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
            onBlur={this.validateName}
          />
          <div className="invalid-feedback">
            <p className="validation">{this.state.nameError}</p>
          </div>

          <p>Email</p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.validateEmail}
          />
          <div className="invalid-feedback">
            <p className="validation">{this.state.emailError}</p>
          </div>

          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.validatePassword}
          />
          <div className="invalid-feedback">
            <p className="validation">{this.state.passwordError}</p>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Register
          </button>
          <div className="invalid-feedback">
            <p className="validation">{this.state.registererror}</p>
          </div>
        </form>
      </div>
    );
  }
}
