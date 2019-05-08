import React from 'react';
import './WeatherStrip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WeatherCard extends React.Component {
  constructor(props) {
    super(props)
    this.weekday = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
  }

  convertCelsius(celsius) {
    return Math.round(parseFloat(celsius) * 9/5) + 32;
  }

  getWeatherDetails(weather) {
    if (weather === 'sunny')
      return ["sun", "Sunny"]
    else if (weather === 'cloudy')
      return ["cloud", "Cloudy"]
    else if (weather === 'light-rain')
      return ["cloud-rain","Light Rain"]
    else if (weather === 'snow')
      return ["snowflake", "Snow"]
    else if (weather === 'thunder-storm')
      return ["bolt", "Thunder Storm"]
    else if (weather === 'overcast')
      return ["cloud-sun", "Overcast"]
    else
      return ["exclamation-circle", "Error!"]
  }

  dayOfWeek(dayNum) {
    if (typeof dayNum != 'number' ||
        dayNum > 6 || 
        dayNum < 0)
      return "Error!"

    return this.weekday[dayNum]
  }

  formatDate(date, dateFormat, firstDate) {
    if (dateFormat === 'raw') {
      return date
    }
    else {
      if (date === firstDate) {
        return 'Today'
      }
      else {
        const dateObj = new Date(date)
        return this.dayOfWeek(dateObj.getDay())
      }
    }
  }

  render() {
    return (
      <div className='card'>
        <h2>{ this.getWeatherDetails(this.props.weatherStatus)[1] }</h2>
        <FontAwesomeIcon 
          icon = { this.getWeatherDetails(this.props.weatherStatus)[0] }
          size = "4x" 
        />
        <p className = 'temperature'>
          { 
            this.convertCelsius(this.props.temp) 
          }° F
        </p>

        <p className = 'date'>
          { 
            this.formatDate(this.props.date, this.props.dateFormat, this.props.firstDate)
          } </p>
      </div>
    )
  }
};

export default WeatherCard;
  