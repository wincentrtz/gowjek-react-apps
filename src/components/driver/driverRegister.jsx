import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { register } from "../../services/driver/driverService";
import auth from "../../services/driver/authService";
import { Redirect } from "react-router-dom";

class DriverRegister extends Form {
  state = {
    data: {
      email: "",
      name: "",
      phone: "",
      vehicle: "",
      password: "",
      password_confirmation: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Username"),
    phone: Joi.string()
      .required()
      .label("Phone Number"),
    vehicle: Joi.string()
      .required()
      .label("Vehicle"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password"),
    password_confirmation: Joi.string()
      .required()
      .label("Password Confirmation")
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      console.log(response);
      auth.loginWithJwt(response.data["auth_token"]);

      window.location = "/driver";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/driver" />;
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Username")}
          {this.renderInput("phone", "Phone Number")}
          {this.renderInput("vehicle", "Vehicle")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput(
            "password_confirmation",
            "Password Confirmation",
            "password"
          )}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default DriverRegister;
