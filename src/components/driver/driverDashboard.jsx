import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../common/Sidebar/sidebar";
import Navbar from "../common/Navbar/navbar";
import "./driver.css";

class DriverDashboard extends Component {
  state = {
    user: "driver",
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
        />
        <div
          id="content"
          style={{ backgroundColor: "#e4e5e6" }}
          className={this.state.sidebarStatus}
        >
          <Navbar onToggle={this.handleToggle} />
          <Switch />
        </div>
      </div>
    );
  }
}

export default DriverDashboard;
