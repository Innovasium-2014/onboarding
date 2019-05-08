import React from 'react';
import './Calculator.css';

const Calculator = () => {
  const [value, setValue] = React.useState('0')
  const [storedVals, setStoredVals] = React.useState([])
  const [storedOp, setStoredOp] = React.useState([])
  const [display, setDisplay] = React.useState('0')

  const clickNum = (number) => {
    let str = ''
    console.log(value)
    value === '0'?
    str = number
    : str = value.concat(number)
    setValue(str)
    setDisplay(str)
    console.log(str)
  }

  const clearNum = () => {
    setValue('0')
    setDisplay('0')
    setStoredOp([])
    setStoredVals([])
  }

  const add = () => {
     let arr1 = storedVals
     let arr2 = storedOp
     arr1.push(parseInt(value))
     setStoredVals(arr1)
     arr2.push('+')
     setStoredOp(arr2)
     setValue('0')
     setDisplay('0')
  }

  const subtract = () => {
     let arr1 = storedVals
     let arr2 = storedOp
     arr1.push(parseInt(value))
     setStoredVals(arr1)
     arr2.push('-')
     setStoredOp(arr2)
     setValue('0')
     setDisplay('0')
  }

  const multiply = () => {
     let arr1 = storedVals
     let arr2 = storedOp
     arr1.push(parseInt(value))
     setStoredVals(arr1)
     arr2.push('x')
     setStoredOp(arr2)
     setValue('0')
     setDisplay('0')
  }

  const equals = () => {
    let arr1 = storedVals
    arr1.push(parseInt(value))
    setStoredVals(arr1)

    let numArray = storedVals
    let numOps = storedOp

    numOps.map((operation, index) => (
      operation === '+'?
      numArray[index + 1] = numArray[index] + numArray[index + 1]
      : operation === '-'?
      numArray[index + 1] = numArray[index] - numArray[index + 1]
      : operation === 'x'?
      numArray[index + 1] = numArray[index] * numArray[index + 1]
      : console.log("Error")
    ))
    setDisplay(numArray[numArray.length - 1])
    setValue(numArray[numArray.length - 1])
    setStoredVals([])
    setStoredOp([])
  }

  return (
  <div className="calculator">
    <div>
      <div className="numberBar">
        <NumberBar display={display}/>
      </div>
    </div>
    <div>
      <div className="clearArea left">
        <ClearButt onClick={clearNum}/>
      </div>
      <div className="operations left">
        <Operation onClick={multiply} str="x" />
      </div>
    </div>
    <div>
      <div className="left">
        <Number onClick={clickNum} number="7"/>
        <Number onClick={clickNum} number="4"/>
        <Number onClick={clickNum} number="1"/>
      </div>
      <div className="left middle-col">
        <Number onClick={clickNum} number="8"/>
        <Number onClick={clickNum} number="5"/>
        <Number onClick={clickNum} number="2"/>
      </div>
      <div className="left">
        <Number onClick={clickNum} number="9"/>
        <Number onClick={clickNum} number="6"/>
        <Number onClick={clickNum} number="3"/>
      </div>
      <div className="operations left">
        <Operation onClick={subtract} str="-" />
        <Operation onClick={add} str="+" />
        <Operation onClick={equals} str="=" />
      </div>
    </div>
  </div>
  )
};

const NumberBar = (props) => {

  return (
    <div>
      {props.display}
    </div>
  )
}

const Number = (props) => {
  const number = props.number

  return (
    <div onClick={() => props.onClick(props.number)}  className="number">
    {number}
    </div>
  )
}

const Operation = (props) => {
  const opStr = props.str

  return (
    <div onClick={props.onClick} className="operation">
    {opStr}
    </div>
  )
}

const ClearButt = (props) => {
  return (
    <div onClick={props.onClick} className="clearButt">
    CLEAR
    </div>
  )
}



export default Calculator;
