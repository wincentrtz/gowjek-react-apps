import React, { Component } from "react";
import CardBody from "../common/cardBody";
import { Line } from "react-chartjs-2";

class DashboardContent extends Component {
  state = {
    datas: [
      { label: "Users", count: "1300", bg: "#20a8d8", icon: "fa fa-users" },
      {
        label: "Drivers",
        count: "300",
        bg: "#ffc107",
        icon: "fa fa-motorcycle"
      },
      {
        label: "Transactions",
        count: "1000",
        bg: "#4dbd74",
        icon: "fa fa-bitcoin"
      },
      {
        label: "Reports",
        count: "30",
        bg: "#f86c6b",
        icon: "fa fa-exclamation-triangle"
      }
    ]
  };

  render() {
    const data = canvas => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);

      return {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Users",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(32, 168, 216,1)",
            borderColor: "rgba(32, 168, 216,1)",
            borderWidth: 1
          }
        ],
        backgroundColor: gradient
      };
    };
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.datas.map(data => (
              <div key={data.label} className="col-3">
                <CardBody data={data} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-6">
              <Line data={data} />
            </div>
            <div className="col-6">
              <Line data={data} />
            </div>
            <div className="col-6">
              <Line data={data} />
            </div>
            <div className="col-6">
              <Line data={data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardContent;
