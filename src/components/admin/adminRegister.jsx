import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class adminRegister extends Form {
  state = {
    data: { username: "", password: "", c_password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    c_password: Joi.string()
      .required()
      .label("Confirmation Password")
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("c_password", "Confirmation Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default adminRegister;
