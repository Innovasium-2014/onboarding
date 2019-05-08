import React from 'react';
import './WeatherStrip.css';

const enumWeather = {
  sunny: "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png",
  overcast: "https://cdn3.iconfinder.com/data/icons/weather-311/16/weather_cloud-cloudy-overcast-512.png",
  lightRain: "https://cdn4.iconfinder.com/data/icons/weather-38/100/weather_rain-512.png",
  thunderStorm: "https://image.flaticon.com/icons/svg/17/17785.svg",
  snow: "https://cdn4.iconfinder.com/data/icons/vectory-weather-1/40/snowflake-512.png"
}

const weather = [
  {
  "temp": `15.6`,
  "weatherStatus": 'sunny',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,8)
 },
  {
  "temp": `16.6`,
  "weatherStatus": 'snow',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,9)
},
  {
  "temp": `15.6`,
  "weatherStatus": 'thunder-storm',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,10)
 },
  {
  "temp": `16.6`,
  "weatherStatus": 'overcast',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,11)
},
  {
  "temp": `15.6`,
  "weatherStatus": 'light-rain',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,12)
 },
  {
  "temp": `16.6`,
  "weatherStatus": 'sunny',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,13)
},
  {
  "temp": `15.1`,
  "weatherStatus": 'snow',//`an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": new Date(2019,4,14)
  }
]

const WeatherStrip = () => {
  return(
    <div className="weatherStripWrapper">
      <h1 className="title"> Weather App </h1>
      <br/>
      <div className="weatherStrip ">
        {
          weather.map((day, dayIndex) => (
            <WeatherCard key={dayIndex} temp={day.temp} wPic={day.weatherStatus} date={day.date.toDateString()} />
          ))
        }
      </div>
    </div>
  )
};

const WeatherCard = ({temp, wPic, date}) => {
  let src = ''
  if (wPic === 'sunny'){
    src = enumWeather.sunny
  }
  else if (wPic === 'overcast'){
    src = enumWeather.overcast
  }
  else if (wPic === 'light-rain'){
    src = enumWeather.lightRain
  }
  else if (wPic === 'thunder-storm'){
    src = enumWeather.thunderStorm
  }
  else {
    src = enumWeather.snow
  }

  return (
    <div className="weatherCard left">
      <h1 className="date">{date}</h1>
      <img className="wPic" src={src} alt="error"/>
      <h2 className="temp">{temp} C</h2>
    </div>
  )
}


export default WeatherStrip;
