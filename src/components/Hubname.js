import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function Hubname(props) {
  let system = props.data.system;
  return (
    <p>
      Hubname:
      {props.data.error && (
        <span> An error occurred: {props.data.error.message}</span>
      )}
      {props.data.loading && <span> Loading...</span>}
      <span> {system && system.hubname} </span>
    </p>
  );
}

const HubnameQuery = gql`
  query HubnameQuery {
    system {
      hubname
    }
  }
`;

const MyHubnameWithData = graphql(HubnameQuery)(Hubname);
export default MyHubnameWithData;
