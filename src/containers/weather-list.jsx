import React from "react";
import WeatherCard from "../components/weather-card";
import "../styles/weather-list.css";

const WeatherList = ({ data }) => {
  return (
    <ul className="weather">
      {data.map((item) => (
        <li className="weather_item">
          <WeatherCard key={`${item.name}-${item.comment}`} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default WeatherList;
