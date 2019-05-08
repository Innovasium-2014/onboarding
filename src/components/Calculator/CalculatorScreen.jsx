import React from 'react';
import './Calculator.css';

const CalculatorScreen = ({ screenText, memoryText, operatorText }) => (
  <div className='calculator-screen'>
    <div className='calculator-screen-memory'>
      { memoryText + '  ' + operatorText }
    </div>
    <div className='calculator-screen-main'>
      { screenText }
    </div>
  </div>
);

export default CalculatorScreen;
