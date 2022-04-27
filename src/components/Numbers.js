import React from 'react';
import calculate from '../logic/calculate';

const Numbers = () => {
  const clasesNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'dot'];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
  const operators = ['÷', 'x', '-', '+', '=', 'AC', '+/-', '%'];
  const clasesSigns = ['dividBy', 'times', 'difference', 'add', 'equal', 'ac', 'sign', 'percent'];
  let object = { total: null, next: null, operation: null };
  const handleClick = (event) => {
    const resultArea = document.getElementsByClassName("header")[0];
    const content = event.target.textContent;
    object = calculate(object, content);
    if (object.hasOwnProperty('next')) {
      const result = (object.total === null) ? 0 : object.total;
      resultArea.innerHTML = (object.next === null) ? result : object.next;
    }
  };
  return (
    <div className="container">
      <div className="header">0</div>
      {operators.map((val, index) => {
        let value = '';
        value = (<button className={clasesSigns[index]} onClick={handleClick}>{val}</button>);
        return value;
      })}
      {nums.map((val, index) => {
        let value = '';
        value = (<button className={clasesNames[index]} onClick={handleClick}>{[val]}</button>);
        return value;
      })}
    </div>
  );
};

export default Numbers;
