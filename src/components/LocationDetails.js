import React from 'react';
import WeatherDayCard from './WeatherDayCard';

const LocationDetails = (props) => {
  const { consolidated_weather } = props.locationWeather;
  const { title } = props.locationWeather;
  const country = props.locationWeather.parent.title;
  return (
    <>
      <div>
        6 day weather forcast for {title}, {country}
      </div>
      <div className="weather-cardcontainer" />
      <div className="Weather-cards">
        {consolidated_weather.map((day) => (
          <WeatherDayCard
            key={day.id}
            date={day.applicable_date}
            weatherStateIcon={day.weather_state_abbr}
            weatherState={day.weather_state_name}
            maxtemp={Math.round(day.max_temp)}
            mintemp={Math.round(day.min_temp)}
            humidity={day.humidity}
          />
        ))}
      </div>
    </>
  );
};

export default LocationDetails;
