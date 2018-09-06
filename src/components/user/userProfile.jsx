import React, { Component } from "react";
import profile from "../../user.png";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center m-3">
          <div className="col-8 col-md-2">
            <img src={profile} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col-12 col-md-4">
            <input className="form-control" type="file" />
          </div>
        </div>
        <div className="row justify-content-md-center m-3">
          <div className="col-12 col-md-2 text-right">
            <h6>Email</h6>
          </div>
          <div className="col-12 col-md-4">
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="row justify-content-md-center m-3">
          <div className="col-12 col-md-2 text-right">
            <h6>Full Name</h6>
          </div>
          <div className="col-12 col-md-4">
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="row justify-content-md-center m-3">
          <div className="col-12 col-md-2 text-right">
            <h6>Phone Numbers</h6>
          </div>
          <div className="col-12 col-md-4">
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="row justify-content-md-center m-3">
          <div className="col-12 col-md-2 text-right">
            <h6>Address</h6>
          </div>
          <div className="col-12 col-md-4">
            <textarea className="form-control" />
          </div>
        </div>
        <div className="row justify-content-md-center m-3">
          <div className="col-4 offset-md-2 text-center">
            <button
              className="btn btn-success"
              style={{ backgroundColor: this.props.color.navbar }}
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
