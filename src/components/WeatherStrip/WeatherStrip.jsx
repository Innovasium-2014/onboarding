import React from 'react';
import WeatherCard from './WeatherCard.jsx'
import WEATHER_DATA from './../../constants/WeatherData.js'
import './WeatherStrip.css';

const WeatherStrip = () => {
  const [page, setPage] = React.useState(0)

  function sortWeatherData(data, key) {
    return data.sort(
      function (a, b) {
        return a[key] > b[key];
      }
    )
  }

  function displayPage(data, numperpage, pageon) {
    const sortedDate = sortWeatherData(data, 'date').slice(pageon * numperpage, pageon * numperpage + numperpage)
    const firstDate  = sortWeatherData(data, 'date')[0].date

    return sortedDate.map(
      i => 
        <WeatherCard 
          key = { i.date }
          temp = { i.temp }
          weatherStatus = { i.weatherStatus } 
          date = { i.date }
          dateFormat = "relative"
          firstDate = { firstDate }
        />
    )
  }

  function displayButtons(numelements, numperpage, pageon) {
    const pages = Array.apply(null, {length: Math.ceil(numelements / numperpage)}).map(Number.call, Number)
    return pages.map(
      i => 
        <div
          key = { i }
          className = 'button'
          onClick = { () => setPage(i) }
        >
          { i + 1 }
        </div>
    )
  }

  return (
    <div className = 'weather-widget'>
      <h1>Weather</h1>
      {
        displayPage(WEATHER_DATA, 7, page)
      }
      <div className = 'clear' />
      {
        displayButtons(WEATHER_DATA.length, 7, page)
      }
      
      <div className = 'clear' />
    </div>
  )
};

export default WeatherStrip;
