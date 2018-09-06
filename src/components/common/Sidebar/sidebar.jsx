import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../../user.png";
import "./sidebar.css";

class SideBar extends Component {
  render() {
    return (
      <nav id="sidebar" className={this.props.sidebarStatus}>
        <div
          className="sidebar-header"
          style={{ backgroundColor: this.props.color.navbar_header }}
        >
          <h6 className="text-center">DASHBOARD</h6>
        </div>

        <ul className="list-unstyled components">
          <li className=" text-center">
            <img
              src={profile}
              alt=""
              style={{ width: "50%", marginBottom: "10px" }}
            />
            <h6>{this.props.user}</h6>
          </li>

          {this.props.sidebar.map(s => (
            <li key={s.path}>
              <NavLink to={s.path}>{s.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default SideBar;
