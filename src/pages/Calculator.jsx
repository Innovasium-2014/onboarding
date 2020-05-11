import React from 'react'

import {
  Calculator,
  CalculatorButton,
  Display,
  ButtonContainer,
} from '../components/Calculator'

const buttonValues = [
  '0',
  '0',
  '0',
  'C',
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '-',
  '0',
  '.',
  '=',
  '+',
]

const CalculatorPage = () => {
  const [buttonPressState, setButtonPress] = React.useState('0')

  const handleButtonPress = (buttonValue) => {
    console.log(buttonValue)
    if (buttonValue === 'C') {
      setButtonPress('0')
    } else if (buttonValue === '=') {
      setButtonPress(eval(buttonPressState))
    } else {
      if (buttonPressState === '0') setButtonPress(buttonValue)
      else setButtonPress(buttonPressState + buttonValue)
    }
  }

  return (
    <Calculator>
      <Display value={buttonPressState} />
      <ButtonContainer>
        {buttonValues.map((values) => (
          <CalculatorButton
            value={values}
            onClick={() => handleButtonPress(values)}
          />
        ))}
      </ButtonContainer>
    </Calculator>
  )
}
export default CalculatorPage
