import React from 'react';
import './WeatherStrip.css';

const enumWeather = {
  sunny: "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png",
  overcast: "https://cdn3.iconfinder.com/data/icons/weather-311/16/weather_cloud-cloudy-overcast-512.png",
  lightRain: "https://cdn4.iconfinder.com/data/icons/weather-38/100/weather_rain-512.png",
  thunderStorm: "https://image.flaticon.com/icons/svg/17/17785.svg",
  snow: "https://cdn4.iconfinder.com/data/icons/vectory-weather-1/40/snowflake-512.png"
}

const WeatherStrip = () => {
  const weather = [
    {
    "temp": `15.6`,
    "weatherStatus": 'sunny',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
    "date": `Wednesday May 8th 2019`
   },
    {
    "temp": `16.6`,
    "weatherStatus": 'snow',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
    "date": `Thursday May 9th 2019`
  },
    {
    "temp": `15.6`,
    "weatherStatus": 'thunder-storm',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
    "date": `Wednesday May 8th 2019`
   },
    {
    "temp": `16.6`,
    "weatherStatus": 'overcast',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
    "date": `Thursday May 9th 2019`
  },
    {
    "temp": `15.6`,
    "weatherStatus": 'light-rain',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
    "date": `Wednesday May 8th 2019`
   },
    {
    "temp": `16.6`,
    "weatherStatus": 'sunny',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
    "date": `Thursday May 9th 2019`
    }
  ]
  return(

    <div className="weatherStrip ">
      {
        weather.map((day, dayIndex) => (
          <WeatherCard key={dayIndex} temp={day.temp} wPic={day.weatherStatus} date={day.date} />
        ))}
    </div>
  )
};

const WeatherCard = (props) => {

  return (
    <div className="weatherCard left">
      <h1 className="date">{props.date}</h1>
      <img className="wPic" src={
        props.wPic === 'sunny'?
        enumWeather.sunny
        : props.wPic === 'overcast'?
        enumWeather.overcast
        : props.wPic === 'light-rain'?
        enumWeather.lightRain
        : props.wPic === 'thunder-storm'?
        enumWeather.thunderStorm
        : enumWeather.snow} alt="weather"/>
      <h2 className="temp">{props.temp} C</h2>
    </div>
  )
}


export default WeatherStrip;
