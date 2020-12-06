import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Check Weather </h1>
      </header>
      <main className="App-main">
        <Forecast />
      </main>
      <footer className="App-footer">Page created by Devarshi sagar</footer>
    </div>
  );
}

export default App;
