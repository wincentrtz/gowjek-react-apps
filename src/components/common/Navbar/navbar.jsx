import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        style={{ backgroundColor: this.props.color.navbar }}
        className="navbar navbar-expand navbar-light"
      >
        <div
          className="container"
          style={{ paddingLeft: "15px", paddingRight: "15px" }}
        >
          <i
            style={{ color: "white" }}
            onClick={this.props.onToggle}
            className="fa fa-align-justify"
          />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-bell" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user-circle" /> Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
