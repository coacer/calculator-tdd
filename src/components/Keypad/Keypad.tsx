import React from "react";

interface Props {
  callOperator: () => void;
  numbers: number[];
  operators: any[];
  setOperator: () => void;
  updateDisplay: () => void;
}

export type KeypadProps = Props;

const Keypad: React.FC<Props> = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay
}) => {
  return (
    <div className="keypad-container"></div>
  );
};

export default Keypad;
