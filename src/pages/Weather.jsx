import React from 'react'

import { WeatherStrip, WEATHER_TYPES } from '../components/WeatherStrip'

const WeatherStripPage = () => {
  const data = [
    { type: WEATHER_TYPES.OVERCAST, temp: 10, date: new Date(1999, 10, 7) },
    { type: WEATHER_TYPES.OVERCAST, temp: -3, date: new Date(1999, 10, 8) },
    { type: WEATHER_TYPES.LIGHTRAIN, temp: -23, date: new Date(1999, 10, 9) },
    {
      type: WEATHER_TYPES.THUNDERSTORM,
      temp: -10,
      date: new Date(1999, 10, 10),
    },
    { type: WEATHER_TYPES.SUN, temp: -40, date: new Date(1999, 10, 11) },
    { type: WEATHER_TYPES.SNOW, temp: 50, date: new Date(1999, 10, 12) },
    { type: WEATHER_TYPES.SUN, temp: 30, date: new Date(1999, 10, 13) },
    { type: WEATHER_TYPES.SUN, temp: -1324, date: new Date(1982, 1, 3) },
  ]

  return (
    <>
      <div>Date given by data</div>
      <WeatherStrip data={data} isRelative={false}></WeatherStrip>
      <div>Date relative to current date</div>
      <WeatherStrip data={data} isRelative={true}></WeatherStrip>
    </>
  )
}
export default WeatherStripPage
