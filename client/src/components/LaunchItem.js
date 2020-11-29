import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({ launch }) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={launch.launch_success ? "text-success" : "text-danger"}
            >
              {launch.mission_name}
            </span>
          </h4>
          <p>
            Date:{" "}
            <Moment format="YYYY-MM-DD HH:mm">
              {launch.launch_date_local}
            </Moment>
          </p>
        </div>
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <Link
            to={`/launch/${launch.flight_number}`}
            className="btn btn-secondary"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
