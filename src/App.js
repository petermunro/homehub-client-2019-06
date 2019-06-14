import React from "react";
import "./App.css";
import Uptime from "./components/Uptime";
import Hubname from "./components/Hubname";

function App(props) {
  return (
    <div>
      <header className="App-header">
        <h1>HomeHub Server</h1>
      </header>
      <div className="App">
        <Uptime />
        <Hubname />
      </div>
    </div>
  );
}

export default App;
