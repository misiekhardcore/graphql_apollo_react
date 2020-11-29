import React from "react";

const LaunchItem = ({ launch }) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {launch.mission_name}</h4>
          <p>Date: {launch.launch_date_local}</p>
        </div>
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
