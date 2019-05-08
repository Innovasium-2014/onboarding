import React from 'react';
import './WeatherStrip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WeatherCard extends React.Component {
  convertCelsius(celsius) {
    return Math.round(parseFloat(celsius) * 9/5) + 32;
  }

  getWeatherDetails(weather) {
    switch (weather) {
      case 'sunny':
        return ["sun", "Sunny"]
      case 'cloudy': 
        return ["cloud", "Cloudy"]
      case 'light-rain':
        return ["cloud-rain","Light Rain"]
      case 'snow':
        return ["snowflake", "Snow"]
      case 'thunder-storm':
        return ["bolt", "Thunder Storm"]
      case 'overcast':
        return ["cloud-sun", "Overcast"]
      default:
        return ["exclamation-circle", "Error!"]
    }
  }

  dayOfWeek(dayNum) {
    const weekday = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

    if (typeof dayNum != 'number' ||
        dayNum > 6 || 
        dayNum < 0)
      return "Error!"

    return weekday[dayNum]
  }

  formatDate() {
    const { date, dateFormat, firstDate } = this.props 

    if (dateFormat === 'raw') {
      return date
    }
    else if (date === firstDate) {
      return 'Today'
    }
    else {
      return this.dayOfWeek(date.getDay())
    }
  }

  render() {
    const { weatherStatus, temp } = this.props 
    const [ weatherIcon, weatherName ] = this.getWeatherDetails(weatherStatus)

    return (
      <div className='card'>
        <h2>{ weatherName }</h2>
        <FontAwesomeIcon 
          icon = { weatherIcon }
          size = "4x" 
        />
        <p className = 'temperature'>
          { this.convertCelsius(temp) }° F
        </p>
        <p className = 'date'>
          { this.formatDate() } 
        </p>
      </div>
    )
  }
};

export default WeatherCard;
  