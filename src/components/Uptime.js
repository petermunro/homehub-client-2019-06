import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function Uptime(props) {
  let system = props.data.system;
  return (
    <p>
      Uptime:
      {props.data.error && (
        <span> An error occurred: {props.data.error.message}</span>
      )}
      {props.data.loading && <span> Loading...</span>}
      <span> {system && system.uptime} </span>
    </p>
  );
}

const UptimeQuery = gql`
  query UptimeQuery {
    system {
      uptime
    }
  }
`;

const MyUptimeWithData = graphql(UptimeQuery)(Uptime);
export default MyUptimeWithData;
