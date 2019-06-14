import React from "react";
import "./App.css";
import Uptime from "./components/Uptime";
import Hubname from "./components/Hubname";
import AccessoryList from "./components/AccessoryList";

function App(props) {
  return (
    <div>
      <header className="App-header">
        <h1>HomeHub Server</h1>
      </header>
      <div className="App">
        <Uptime />
        <Hubname />
        <AccessoryList />
      </div>
    </div>
  );
}

export default App;
