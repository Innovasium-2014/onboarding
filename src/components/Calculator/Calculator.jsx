import React from 'react';
import './Calculator.css';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const [screenText, setScreenText] = React.useState([''])
  const [memoryText, setMemoryText] = React.useState([''])
  const [operator, setOperator] = React.useState([''])
 
  function buttonInput(value) {
    if (!value)
      return;

    if (value === '+' ||
        value === '-' ||
        value === '/' ||
        value === '*') {

      setOperator(value)
      setMemoryText(screenText)
      setScreenText('')
    }

    else if (value === '=') {
      if (screenText) {
        setScreenText('');

        if (operator === '+') {
          setScreenText(parseFloat(screenText) + parseFloat(memoryText))
        }
        else if (operator === '-') {
          setScreenText(parseFloat(screenText) - parseFloat(memoryText))
        }
        else if (operator === '/') {
          setScreenText(parseFloat(screenText) / parseFloat(memoryText))
        }
        else if (operator === '*') {
          setScreenText(parseFloat(screenText) * parseFloat(memoryText))
        }
      }
        
      setMemoryText('')
      setOperator('')
    }

    else {
      setScreenText(screenText + value)
    }
    
  }

  return (
    <div className='calculator-body'>
      <CalculatorScreen screenText={ screenText } memoryText={ memoryText } operatorText={ operator } />

    	<CalculatorButton buttonText='7' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='8' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='9' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='/' buttonInput={buttonInput} color='orange'/>

      <CalculatorButton buttonText='4' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='5' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='6' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='*' buttonInput={buttonInput} color='orange'/>

      <CalculatorButton buttonText='1' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='2' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='3' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='-' buttonInput={buttonInput} color='orange'/>

      <CalculatorButton buttonText='0' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='.' buttonInput={buttonInput} color='gray'/>
      <CalculatorButton buttonText='=' buttonInput={buttonInput} color='blue'/>
      <CalculatorButton buttonText='+' buttonInput={buttonInput} color='orange'/>

      <div className='calculator-bottom' />
    </div>
  )
}

export default Calculator;
