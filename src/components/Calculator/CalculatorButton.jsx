import React from 'react';
import './Calculator.css';

const CalculatorButton = ({ buttonText, buttonInput, color }) => (
  <div 
    className={'calculator-button ' + color }
    onClick={() => buttonInput(buttonText)}
  >
    { buttonText }
  </div>
);

export default CalculatorButton;
