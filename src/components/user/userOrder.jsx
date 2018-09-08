/*global google*/

import React, { Component } from "react";

class UserOrder extends Component {
  state = {};

  constructor() {
    super();
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
  }
  componentDidMount() {
    let self = this;
    loadScript(
      "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyByH0c5bxYDZ48BLQ401BBsm4DppG6QNkQ&libraries=places",
      function() {
        self.directionsService = new google.maps.DirectionsService();
        self.directionsDisplay = new google.maps.DirectionsRenderer();
        self.map = new google.maps.Map(self.refs.map, {
          zoom: 13,
          center: { lat: -25.363, lng: 131.044 }
        });

        self.startInput = self.refs.start;
        self.searchBoxStart = new google.maps.places.SearchBox(self.startInput);

        self.endInput = self.refs.end;
        self.searchBoxEnd = new google.maps.places.SearchBox(self.endInput);

        self.infoWindow = new google.maps.InfoWindow();
        let pos = {};
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              self.infoWindow.open(self.map);
              self.map.setCenter(pos);
            },
            function() {
              self.handleLocationError(
                true,
                self.infoWindow,
                self.map.getCenter()
              );
            }
          );
        } else {
          // Browser doesn't support Geolocation
          self.handleLocationError(
            false,
            self.infoWindow,
            self.map.getCenter()
          );
        }

        let onChangeHandler = function() {
          self.calculateAndDisplayRoute(
            self.directionsService,
            self.directionsDisplay
          );
        };
        self.refs.start.addEventListener("change", onChangeHandler);
        self.refs.end.addEventListener("change", onChangeHandler);
        self.directionsDisplay.setMap(self.map);
      }
    );
    //this.map = new google.maps.Map(this.refs.map, { center: {lat:48.858608, lng:2.294471},  zoom: 16 });
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let self = this;
    directionsService.route(
      {
        origin: self.refs.start.value,
        destination: self.refs.end.value,
        travelMode: "DRIVING"
      },
      function(response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  render() {
    const mapStyle = {
      width: "500",
      height: "618px"
    };
    return (
      <div>
        <div className="form-group searchbox col-5">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i style={{ color: "#8cbd47" }} className="fa fa-map-marker" />
              </span>
            </div>
            <input
              className="form-control col-12 search-input"
              id="start-input"
              ref="start"
              defaultValue="Jalan Anggrek Cakra No.1A, RT.4/RW.6, Kebon Jeruk, RT.1/RW.9, Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i style={{ color: "#edb541" }} className="fa fa-map-marker" />
              </span>
            </div>
            <input
              className="form-control col-12 search-input"
              id="end-input"
              ref="end"
              defaultValue="Jalan Kyai Haji Syahdan No.9, RT.6/RW.12, Kemanggisan, Palmerah, RT.6/RW.12, Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480"
            />
          </div>
          <div
            className="row container-fluid mt-2"
            style={{ backgroundColor: "white", padding: "15px" }}
          >
            <div className="col-6">
              <h4 style={{ margin: 0 }}>IDR 15.000</h4>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-success">ORDER NOW</button>
            </div>
          </div>
        </div>

        <div ref="map" style={mapStyle} />
      </div>
    );
  }
}

function loadScript(url, callback) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}

export default UserOrder;
