import React from "react";
import "../styles/weather-card.css";

const WeatherCard = ({ item }) => {
  const { day, iconURL, max_temp, min_temp } = item;
  return (
    <div className="weather-card">
      <h1 className="weather-card__title">{day}</h1>
      <figure className="weather-card__figure">
        <img src={iconURL} alt="weather description" width="40" height="40" />
        <figcaption className="weather-card__caption">
          <p>
            Min: {min_temp.c}, Max: {max_temp.c}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default WeatherCard;
