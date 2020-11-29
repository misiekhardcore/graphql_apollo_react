import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";

const Launch = (props) => {
  const { flight_number } = useParams();
  const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
      launch(flight_number: $flight_number) {
        mission_name
        flight_number
        launch_year
        launch_success
        launch_date_local
        rocket {
          rocket_id
          rocket_name
          rocket_type
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: parseInt(flight_number) },
  });

  return (
    <>
      {loading && <Loader />}
      {error && console.log(error)}
      {data && (
        <div className="">
          <h1 className="display-4 my-3">
            <span className="text-muted">Mission: </span>
            {data.launch.mission_name}
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Flight Number: {data.launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch Year: {data.launch.launch_year}
            </li>
            <li className="list-group-item">
              Fligth success:{" "}
              {data.launch.launch_success ? (
                <span className="text-success">yes</span>
              ) : (
                <span className="text-danger">no</span>
              )}
            </li>
          </ul>
          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rocket ID: {data.launch.rocket.rocket_id}
            </li>
            <li className="list-group-item">
              Rocket Name: {data.launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket Type: {data.launch.rocket.rocket_type}
            </li>
          </ul>
          <hr />
          <Link to="/" className="btn btn-secondary">
            &larr; Back
          </Link>
        </div>
      )}
    </>
  );
};

export default Launch;
