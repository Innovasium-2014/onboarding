import React from 'react'
import PropTypes from 'prop-types'
import './Calculator.css'

export const Calculator = ({ children }) => (
  <div className="calculatorstyle">
    Welcome to my calculator!
    <br />
    {children}
  </div>
)

Calculator.propTypes = {
  children: PropTypes.node,
}

export const Display = ({ value = '', prevResult = '', error = false }) => (
  <div className={error ? 'displayerrorstyle' : 'displaystyle'}>
    <div className="displayprevresultstyle">{prevResult}</div>
    <div className="displaytextstyle">{value}</div>
  </div>
)

export const ButtonContainer = ({ children }) => (
  <div className="buttoncontainerstyle">{children}</div>
)

ButtonContainer.propTypes = {
  children: PropTypes.node,
}

export const CalculatorButton = ({ value = '', onClick }) => (
  <button className="buttonstyle" onClick={onClick}>
    {value}
  </button>
)

CalculatorButton.propTypes = {
  value: PropTypes.string,
  prevResult: PropTypes.string,
  error: PropTypes.bool,
}
