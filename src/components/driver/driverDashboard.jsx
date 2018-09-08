import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../common/Sidebar/sidebar";
import Navbar from "../common/Navbar/navbar";
import "./driver.css";

class DriverDashboard extends Component {
  state = {
    user: "driver",
    color: {
      navbar: "#8cbd47",
      navbar_header: "#82aa49"
    },
    sidebar: [
      { label: "Dashboard", path: "/driver" },
      { label: "History", path: "/driver/history" }
    ],
    sidebarStatus: ""
  };

  handleToggle = () => {
    const { sidebarStatus } = this.state;
    if (sidebarStatus === "") {
      this.setState({ sidebarStatus: "active" });
    } else {
      this.setState({ sidebarStatus: "" });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <SideBar
          sidebarStatus={this.state.sidebarStatus}
          sidebar={this.state.sidebar}
          user={this.state.user}
          color={this.state.color}
        />
        <div
          id="content"
          style={{ backgroundColor: "#e4e5e6" }}
          className={this.state.sidebarStatus}
        >
          <Navbar onToggle={this.handleToggle} color={this.state.color} />
          <Switch />
        </div>
      </div>
    );
  }
}

export default DriverDashboard;
