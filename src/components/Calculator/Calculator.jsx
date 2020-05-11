import React from 'react'
import PropTypes from 'prop-types'
import './Calculator.css'

export const Calculator = ({ children }) => (
  <div class="calculatorstyle">
    Welcome to my calculator!
    <br />
    {children}
  </div>
)

Calculator.propTypes = {
  children: PropTypes.node,
}

export const Display = ({ value = '' }) => (
  <div class="displaystyle">{value}</div>
)

export const ButtonContainer = ({ children }) => (
  <div class="buttoncontainerstyle">{children}</div>
)

ButtonContainer.propTypes = {
  children: PropTypes.node,
}

export const CalculatorButton = ({ value = '', onClick }) => (
  <button class="buttonstyle" onClick={onClick}>
    {value}
  </button>
)

CalculatorButton.propTypes = {
  value: PropTypes.string,
}
