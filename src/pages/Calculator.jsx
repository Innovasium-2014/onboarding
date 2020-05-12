import React from 'react'

import {
  Calculator,
  CalculatorButton,
  Display,
  ButtonContainer,
} from '../components/Calculator'

const buttonValues = [
  'Ans',
  '(',
  ')',
  'Backspace',
  'C',
  '%',
  '7',
  '8',
  '9',
  '/',
  'sin(',
  '4',
  '5',
  '6',
  '*',
  'cos(',
  '1',
  '2',
  '3',
  '-',
  'tan(',
  '0',
  '.',
  '=',
  '+',
]

const CalculatorPage = () => {
  const [displayValue, setDisplayValue] = React.useState('0')
  const [prevResult, setPrevResult] = React.useState('0')
  const [errorState, setErrorState] = React.useState(false)

  const handleButtonPress = (buttonValue) => {
    setErrorState(false)
    switch (buttonValue) {
      case 'C':
        setDisplayValue('0')
        break
      case '=':
        try {
          let newStr = displayValue
          newStr = newStr.replace(/sin/g, 'Math.sin')
          newStr = newStr.replace(/cos/g, 'Math.cos')
          newStr = newStr.replace(/tan/g, 'Math.tan')
          newStr = newStr.replace(/Ans/g, prevResult)
          newStr = String(eval(newStr))
          if (newStr === 'Infinity') setErrorState('True')
          else {
            setDisplayValue('0')
            setPrevResult(newStr)
          }
        } catch (e) {
          setErrorState(true)
        }
        break
      case 'Backspace':
        let newStr = displayValue.substring(0, displayValue.length - 1)

        if (!newStr) newStr = '0'
        setDisplayValue(newStr)
        break
      default:
        if (displayValue === '0' && buttonValue !== '.')
          setDisplayValue(buttonValue)
        else setDisplayValue(displayValue + buttonValue)
        break
    }
  }
  return (
    <Calculator>
      <Display
        value={displayValue}
        prevResult={prevResult}
        error={errorState}
      />
      <ButtonContainer>
        {buttonValues.map((values) => (
          <CalculatorButton
            key={values}
            value={values}
            onClick={() => handleButtonPress(values)}
          />
        ))}
      </ButtonContainer>
    </Calculator>
  )
}
export default CalculatorPage
