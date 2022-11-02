import axios from "axios";
import React from "react";
import { useState } from "react";
import { Input, Label, Button, DivIconWeather, DivWeatherData } from "./form-style";

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
    setCity('');
  };
  console.log(weather);
  return (
    <form>
      <Label>
        <Input
          type={"text"}
          className="input-city"
          placeholder="Busque por uma cidade"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <Button className="btn-search" onClick={onClick}>
          Buscar
        </Button>
      </Label>

      {weather && (
        <>
          <DivWeatherData id="weather-data">
            <h2>
              <span id="city">{weather.name}</span>
            </h2>
            <DivIconWeather>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="ícone do clima"
                id="weather-icon"
              />
              <p id="temperatura">{weather.main.temp.toFixed()}&deg;</p>
            </DivIconWeather>
          </DivWeatherData>
        </>
      )}
    </form>
  );
}

export default Form;
