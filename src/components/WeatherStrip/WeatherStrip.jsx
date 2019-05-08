import React from 'react';
import WeatherCard from './WeatherCard.jsx'
import './WeatherStrip.css';

const data = 
[
  {
    "temp": 8.5,
    "weatherStatus": 'sunny',
    "date": "2019-05-08"
  },
  {
    "temp": 9.5,
    "weatherStatus": 'overcast',
    "date": "2019-05-09"
  },
  {
    "temp": 11.5,
    "weatherStatus": 'thunder-storm',
    "date": "2019-05-11"
  },
  {
    "temp": 14.5,
    "weatherStatus": 'thunder-storm',
    "date": "2019-05-14"
  },
  {
    "temp": 12.5,
    "weatherStatus": 'snow',
    "date": "2019-05-12"
  },
  {
    "temp": 10.5,
    "weatherStatus": 'light-rain',
    "date": "2019-05-10"
  },
  {
    "temp": 13.5,
    "weatherStatus": 'sunny',
    "date": "2019-05-13"
  },

  {
    "temp": 21.5,
    "weatherStatus": 'sunny',
    "date": "2019-05-21"
  },
  {
    "temp": 15.5,
    "weatherStatus": 'overcast',
    "date": "2019-05-15"
  },
  {
    "temp": 16.5,
    "weatherStatus": 'thunder-storm',
    "date": "2019-05-16"
  },
  {
    "temp": 17.5,
    "weatherStatus": 'thunder-storm',
    "date": "2019-05-17"
  },
  {
    "temp": 18.5,
    "weatherStatus": 'snow',
    "date": "2019-05-18"
  },
  {
    "temp": 19.5,
    "weatherStatus": 'light-rain',
    "date": "2019-05-19"
  },
  {
    "temp": 20.5,
    "weatherStatus": 'sunny',
    "date": "2019-05-20"
  },

  {
    "temp": 22.5,
    "weatherStatus": 'sunny',
    "date": "2019-05-22"
  }
]


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
    console.log(sortedDate)

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
        displayPage(data, 7, page)
      }
      <div className = 'clear' />
      {
        displayButtons(data.length, 7, page)
      }
      
      <div className = 'clear' />
    </div>
  )
};

export default WeatherStrip;
