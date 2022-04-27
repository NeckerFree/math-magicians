import React from 'react';
import calculate from '../logic/calculate';

const Numbers = (props) => {
  const [objectValue, setObjectValue] = React.useState({ total: null, next: null, operation: null });
  const handleClick = (event) => {
    const resultArea = document.getElementsByClassName("header")[0];
    const content = event.target.textContent;
    const { total, next, operation } = calculate(objectValue, content);
    const actualObject = { total, next, operation };
    setObjectValue(actualObject);
    if (actualObject.hasOwnProperty('next')) {
      const result = (actualObject.total === null) ? 0 : actualObject.total;
      resultArea.innerHTML = (actualObject.next === null) ? result : actualObject.next;
    }
  };
  return (
    <div className="container">
      <div className="header">0</div>
      {props.operators.map((val, index) => {
        let value = '';
        value = (<button className={props.clasesSigns[index]} onClick={handleClick}>{val}</button>);
        return value;
      })}
      {props.nums.map((val, index) => {
        let value = '';
        value = (<button className={props.clasesNames[index]} onClick={handleClick}>{[val]}</button>);
        return value;
      })}
    </div>
  );
};

export default Numbers;
