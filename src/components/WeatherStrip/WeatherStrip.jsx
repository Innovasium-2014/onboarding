import React from 'react'
import PropTypes from 'prop-types'
import './WeatherStrip.css'
import { Card } from '@material-ui/core'

export const WEATHER_TYPES = {
  OVERCAST: {
    name: 'Overcast',
    icon: '☁️',
  },
  SUN: {
    name: 'Sunny',
    icon: '🌞',
  },
  LIGHTRAIN: {
    name: 'Light Rain',
    icon: '🌧️',
  },
  THUNDERSTORM: {
    name: 'Thunderstorms',
    icon: '⛈️',
  },
  SNOW: {
    name: 'Snowy',
    icon: '🌨️',
  },
}

export const WeatherStrip = ({ data, isRelative }) => (
  <div className="weather-strip-style">
    {data
      .filter((day, index) => index < 7)
      .map((day, index) => (
        <WeatherCard
          weatherData={day}
          key={day.date.getDay()}
          index={index}
          isRelative={isRelative}
        ></WeatherCard>
      ))}
  </div>
)
WeatherStrip.propTypes = {
  data: PropTypes.array,
  isRelative: PropTypes.bool,
}

export const WeatherCard = ({ weatherData, isRelative, index }) => {
  function celsiusToFahrenheit(celsiusTemp) {
    return Math.round((celsiusTemp * 9) / 5 + 32)
  }
  function getDisplayDay(isRelative, index, date) {
    let processDate = date
    if (isRelative) {
      processDate = new Date()
      if (index === 0) return 'Today'
      processDate.setDate(processDate.getDate() + index)
    }
    return (
      processDate.toLocaleString('default', { weekday: 'long' }) +
      ', ' +
      processDate.toLocaleString('default', { month: 'short' }) +
      ' ' +
      processDate.getDate()
    )
  }

  return (
    <div className="weather-card-style">
      <Card>
        <div className="weather-content-style">
          <div className="weather-icon-style">{weatherData.type.icon}</div>
          <div className="weather-body-style">
            {getDisplayDay(isRelative, index, weatherData.date)}
            <br />
            {celsiusToFahrenheit(weatherData.temp)}
            °F
          </div>
        </div>
      </Card>
    </div>
  )
}
WeatherCard.propTypes = {
  weatherData: PropTypes.object.isRequired,
  isRelative: PropTypes.bool,
  index: PropTypes.number,
}
