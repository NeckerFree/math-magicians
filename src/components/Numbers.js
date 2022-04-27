import React from 'react';

const Numbers = () => {
  const clasesNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operator = [String.fromCharCode(247), 'x', '-', '+', '=', 'AC', '+/-', '%', '.'];
  const clasesSigns = ['dividBy', 'times', 'difference', 'add', 'equal', 'ac', 'sign', 'percent', 'dot'];
  return (
    <div className="container">
      <div className="header">0</div>
      {operator.map((val, index) => {
        let value = '';
        value = (<div className={clasesSigns[index]}>{val}</div>);
        return value;
      })}
      {nums.map((val, index) => {
        let value = '';
        value = (<div className={clasesNames[index]}>{[val]}</div>);
        return value;
      })}
    </div>
  );
};

export default Numbers;
