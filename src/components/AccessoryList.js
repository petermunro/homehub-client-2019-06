import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function Accessories(props) {
  let accessories = props.data.accessories;
  return (
    <div>
      Accessories:
      {props.data.error && (
        <span> An error occurred: {props.data.error.message}</span>
      )}
      {props.data.loading && <span> Loading...</span>}
      <ul>
        {accessories &&
          accessories.map(accessory => (
            <li key={accessory.id}>{accessory.name}</li>
          ))}
      </ul>
    </div>
  );
}

const AccessoriesQuery = gql`
  query GetAccessories {
    accessories {
      id
      name
      __typename
      ... on Light {
        brightnessLevel
        manufacturer
      }
      ... on Door {
        isClosed
        isLocked
      }
      ... on Thermostat {
        temperature
      }
      ... on Outlet {
        isOn
      }
    }
  }
`;

const MyAccessoriesWithData = graphql(AccessoriesQuery)(Accessories);
export default MyAccessoriesWithData;
