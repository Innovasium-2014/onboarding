# Weather Strip

Example idea came from here - [React Practice Problems](https://daveceddia.com/react-practice-projects/)

In this example you will be building a weather strip to display a range of weather
data for upcoming days. Try breaking this problem down into smaller parts and then
expand to account for all functionality listed.

## Functionality

- Accepts an array of objects that contains the follow structure

```js
{
  "temp": `float value given in celsius`,
  "weatherStatus": `an enum of 'sunny', 'overcast', 'light-rain', 'thunder-storm', or 'snow'`,
  "date": `raw javascript date`
}
```

- Calculate temperature in Fahrenheit based on Celsius value
- Display an icon or emoji to differentiate the given weather status
- Display a maximum of 7 cards at a time
- prop that will allow the display of raw date as given, or relative date to current date (eg. if it is currently tuesday, the first card would say today and the next would say wed)

### Bonus Functionality

Please complete all functionality above before implementing the following.

- Sort the data based on date before passing it in to be rendered
- Add pagination to view 7 on the screen at a time and scroll through the rest
