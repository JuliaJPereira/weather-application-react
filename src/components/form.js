import axios from "axios";
import React from "react";
import { useState } from "react";
import { Label } from "./form-style";

function Form() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const onClick = async (e) => {
    e.preventDefault();
    let response1 = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=e83ae355fb450341a30c6df3a60135d7`
    );
    let response2 = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${response1.data[0].lat}&lon=${response1.data[0].lon}&appid=e83ae355fb450341a30c6df3a60135d7&units=metric`
    );
    setWeather(response2.data);
  };
  console.log(weather);
  return (
    <form>
      <Label>
        <input
          type={"text"}
          name="city"
          placeholder="Busque por uma cidade"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button className="btn-search" onClick={onClick}>
          Buscar
        </button>
      </Label>

      {weather && (
        <>
          <div id="weather-data">
            <h2>
              <i className="fa-solid fa-location-dot"></i>
              <span id="city">{city}</span>
            </h2>
            <p id="temperatura">{response2.data.main.temp}&deg;</p>
          </div>

          <div id="description-container">
            <p id="description">Nublado</p>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="ícone do clima"
              id="weather-icon"
            />
          </div>

          <div id="details-container">
            <p id="umidity">
              Umidade
              <i className="fa-solid fa-droplet"></i>
              <span>48%</span>
            </p>
            <p id="wind">
              <i className="fa-solid fa-wind"></i>
              <p id="wind">Vento</p>
              <span>3km/h</span>
            </p>
          </div>
        </>
      )}
    </form>
  );
}

export default Form;
