import React, { useState } from 'react';
import './Calculator.css';
import Display from '../Display/Display'

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
    </div>
  );

};

export default Calculator;
