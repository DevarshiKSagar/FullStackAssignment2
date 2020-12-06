import React from "react";
import axios from "axios";
import { useState } from "react";

const Forecast = () => {
  let [data, setData] = useState({});
  let [city, setCity] = useState("");
  // const uriEncodedCity = encodeURIComponent(city);
  function getForecast(e) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6e00f7d59ac5b3e25afe0901361f3d45`
    )
      .then((response) => {
        console.log(
          "api call :"`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6e00f7d59ac5b3e25afe0901361f3d45`
        );
        console.log("in the first then before setdata is called");

        return response.json();
      })
      .then((response) => {
        console.log("in the second then before setdata is called" + response);
        setData(JSON.stringify(response));
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <h2>Get Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter the City name to get wheather data"
          maxLength="70"
          value={city}
          onChange={(t) => setCity(t.target.value)}
        />

        <button type="submit">Find out wheather</button>
      </form>
    </div>
  );
};

export default Forecast;
