import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
const Forecast = () => {
  let [city, setCity] = useState("");
  let [data, setData] = useState({});

  function drawWeather() {
    var celcius = Math.round(parseFloat(data.main.temp));

    var description = data.weather[0].description;
    var iconcode = data.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/wn/" + iconcode + ".png";
    document.getElementById("wicon").src = iconurl;
    document.getElementById("wicon").style = "background: white;";
    document.getElementById("description").innerHTML = description;
    document.getElementById("temp").innerHTML = celcius + "&deg;";
    document.getElementById("location").innerHTML = data.name;

    if (description.indexOf("rain") > 0) {
      document.main.className = "rainy";
    } else if (description.indexOf("cloud") > 0) {
      document.main.className = "cloudy";
    } else if (description.indexOf("sunny") > 0) {
      document.main.className = "sunny";
    }
  }

  function getForecast(e) {
    e.preventDefault();

    setData({});

    const uriEncodedCity = encodeURIComponent(city);
    console.log("line 32");
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${uriEncodedCity}&appid=6e00f7d59ac5b3e25afe0901361f3d45`
      )
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        console.log();
        setData(response);
        console.log(data);
        drawWeather();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div>
      <div id="description"></div>
      <div id="temp"></div>
      <div id="icon">
        <img id="wicon" alt="wheather icon" />
      </div>

      <div id="location"></div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter the name of the City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Get Forecast</button>
      </form>
    </div>
  );
};

export default Forecast;
