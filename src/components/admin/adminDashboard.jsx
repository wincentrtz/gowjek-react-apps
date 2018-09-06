import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../common/Sidebar/sidebar";
import Navbar from "../common/Navbar/navbar";
import DashboardContent from "./dashboardContent";
import "./admin.css";
import UserContent from "./usersContent";

class AdminDashboard extends Component {
  state = {
    user: "Admin",
    color: {
      navbar: "#3c8dbc",
      navbar_header: "#367fa9"
    },
    sidebar: [
      { label: "Dashboard", path: "/admin" },
      { label: "Users", path: "/admin/user" },
      { label: "Drivers", path: "/admin/driver" },
      { label: "Transactions", path: "/admin/transaction" },
      { label: "Reports", path: "/admin/report" }
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
          <Switch>
            <Route path="/admin/user" component={UserContent} />
            <Route path="/admin" component={DashboardContent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
