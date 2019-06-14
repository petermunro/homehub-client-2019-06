import React from "react";
import "./App.css";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Uptime from "./components/Uptime";

function App(props) {
  let system = props.data.system;
  return (
    <div>
      <header className="App-header">
        <h1>HomeHub Server</h1>
      </header>
      <div className="App">
        <Uptime />
        <p>
          Hubname: <span>{system && system.hubname} </span>
        </p>
      </div>
    </div>
  );
}

const MyQuery = gql`
  query MyQuery {
    system {
      hubname
      uptime
    }
  }
`;

const MyAppWithData = graphql(MyQuery)(App);
export default MyAppWithData;
