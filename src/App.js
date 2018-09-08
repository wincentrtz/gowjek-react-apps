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
import AdminProtectedRoute from "./components/admin/adminProtectedRoute";
import DriverRegister from "./components/driver/driverRegister";
import DriverProtectedRoute from "./components/driver/driverProtectedRoute";
import UserRegister from "./components/user/userRegister";
import UserProtectedRoute from "./components/user/userProtectedRoute";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin/register" component={AdminRegister} />
          <Route path="/admin/login" component={AdminLogin} />
          <AdminProtectedRoute path="/admin" component={AdminDashboad} />

          <Route path="/driver/register" component={DriverRegister} />
          <Route path="/driver/login" component={DriverLogin} />
          <DriverProtectedRoute path="/driver" component={DriverDashboard} />

          <Route path="/user/register" component={UserRegister} />
          <Route path="/user/login" component={UserLogin} />
          <UserProtectedRoute path="/user" component={UserDashboard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
