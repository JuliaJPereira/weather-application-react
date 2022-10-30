import React from "react";
import { Label } from "./form-style";

function Form() {
  return (
    <form>
      <Label>
        <input type={"text"} name="city" placeholder="Busque por uma cidade" />
        <button className="btn-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          Buscar
        </button>
      </Label>

      <div id="weather-data">
        <h2>
          <i class="fa-solid fa-location-dot"></i>
          <span id="city">Blumenau</span>
          <img
            src="https://countryflagsapi.com/png/br"
            alt="bandeira do país"
            id="bandeira-pais"
          />
        </h2>
        <p id="temperatura">25&deg;</p>
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
          <i class="fa-solid fa-droplet"></i>
          <span>48%</span>
        </p>
        <p id="wind">
          <i class="fa-solid fa-wind"></i>
          <p id="wind">Vento</p>
          <span>3km/h</span>
        </p>
      </div>
    </form>
  );
}

export default Form;
