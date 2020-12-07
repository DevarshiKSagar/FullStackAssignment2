import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/forecast";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,900"
        rel="stylesheet"
      />

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
