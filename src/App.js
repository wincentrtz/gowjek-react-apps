import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLogin from "./components/admin/adminLogin";
import "./App.css";
import AdminRegister from "./components/admin/adminRegister";
import AdminDashboad from "./components/admin/adminDashboard";
import DriverDashboard from "./components/driver/driverDashboard";
import DriverLogin from "./components/driver/driverLogin";
import UserDashboard from "./components/user/userDashboard";
import UserLogin from "./components/user/userLogin";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin/register" component={AdminRegister} />
          <Route path="/admin/login" component={AdminLogin} />

          <Route path="/admin" component={AdminDashboad} />

          <Route path="/driver/login" component={DriverLogin} />
          <Route path="/driver" component={DriverDashboard} />

          <Route path="/user/login" component={UserLogin} />
          <Route path="/user" component={UserDashboard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
