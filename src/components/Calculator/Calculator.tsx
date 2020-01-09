import React, { useState } from 'react';
import './Calculator.css';
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [numbers, setNumbers] = useState([]);
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const callOperator = (): void => {
    console.log('call operation');
  };

  const setOperator = (): void => {
    console.log('set operation');
  };

  const updateDisplay = (): void => {
    console.log('update display');
  };

  return (
    <div className="calculator-container">
      <Display displayValue={displayValue} />
      <Keypad
        callOperator={callOperator}
        numbers={numbers}
        operators={operators}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  );

};

export default Calculator;
