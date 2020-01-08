import React from "react";
import './Display.css';

interface Props {
  displayValue: string;
}

export type DisplayProps = Props;

const Display: React.FC<Props> = ({ displayValue }) => {
  return (
    <div className="display-container">
      <div className="display-value">
        {displayValue}
      </div>
    </div>
  );
};

export default Display;
