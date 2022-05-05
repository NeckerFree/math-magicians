import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Numbers = (props) => {
  const {
    clasesNames, nums, operators, clasesSigns, initialObjectValue,
  } = props;
  const [objectValue, setObjectValue] = useState(initialObjectValue);
  const handleClick = (event) => {
    const resultArea = document.getElementsByClassName('header')[0];
    const content = event.target.textContent;
    const { total, next, operation } = calculate(objectValue, content);
    const actualObject = { total, next, operation };
    setObjectValue(actualObject);
    if (actualObject.next !== undefined) {
      const result = (actualObject.total === null) ? 0 : actualObject.total;
      resultArea.innerHTML = (actualObject.next === null) ? result : actualObject.next;
    }
  };

  return (
    <div className="container">
      <div className="header">0</div>
      {operators.map((val, index) => {
        let value = '';
        value = (
          <button
            type="submit"
            className={clasesSigns[index]}
            onClick={handleClick}
          >
            {val}
          </button>
        );
        return value;
      })}
      {nums.map((val, index) => {
        let value = '';
        value = (
          <button
            type="submit"
            className={clasesNames[index]}
            onClick={handleClick}
          >
            {[val]}
          </button>
        );
        return value;
      })}
    </div>
  );
};

Numbers.propTypes = {
  clasesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  nums: PropTypes.arrayOf(PropTypes.string).isRequired,
  operators: PropTypes.arrayOf(PropTypes.string).isRequired,
  clasesSigns: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialObjectValue: PropTypes.shape(
    {
      total: PropTypes.string,
      next: PropTypes.string,
      operation: PropTypes.string,
    },
  ).isRequired,

};
export default Numbers;
