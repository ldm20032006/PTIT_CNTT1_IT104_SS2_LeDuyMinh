import React from 'react';

const Calculation: React.FC = () => {
  const add = () => 10 + 10;
  const subtract = () => 10 - 10;
  const multiply = () => 10 * 10;
  const divide = () => 10 / 10;

  return (
    <div>
      <p>10 + 10 = {add()}</p>
      <p>10 - 10 = {subtract()}</p>
      <p>10 * 10 = {multiply()}</p>
      <p>10 / 10 = {divide()}</p>
    </div>
  );
};

export default Calculation;