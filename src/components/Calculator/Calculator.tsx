import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState(0);
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
    <div className="calculator-container"></div>
  );

};

export default Calculator;
