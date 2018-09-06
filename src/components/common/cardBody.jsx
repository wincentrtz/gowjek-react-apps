import React from "react";

const CardBody = props => {
  return (
    <React.Fragment>
      <div className="card-body" style={{ backgroundColor: props.data.bg }}>
        <div className="row">
          <div className="col-6 card-left">
            <p className="card-text">
              <span>{props.data.count}</span>
              <br />
              {props.data.label}
            </p>
          </div>
          <div className="col-6 card-right text-right">
            <h1>
              <i className={props.data.icon} />
            </h1>
          </div>
        </div>
      </div>
      <div
        className="container card-info"
        style={{ backgroundColor: props.data.bg }}
      >
        <span>
          More Info <i className="fa fa-arrow-circle-right" />
        </span>
      </div>
    </React.Fragment>
  );
};

export default CardBody;
