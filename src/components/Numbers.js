import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objectValue: { total: null, next: null, operation: null } };
  }

  handleClick = (event) => {
    const resultArea = document.getElementsByClassName('header')[0];
    const content = event.target.textContent;
    const { objectValue } = this.state;
    const { total, next, operation } = calculate(objectValue, content);
    const actualObject = { total, next, operation };
    this.setState({ objectValue: actualObject });
    if (actualObject.next !== undefined) {
      const result = (actualObject.total === null) ? 0 : actualObject.total;
      resultArea.innerHTML = (actualObject.next === null) ? result : actualObject.next;
    }
  };

  render() {
    const {
      clasesNames, nums, operators, clasesSigns,
    } = this.props;
    return (
      <div className="container">
        <div className="header">0</div>
        {operators.map((val, index) => {
          let value = '';
          value = (
            <button
              type="submit"
              className={clasesSigns[index]}
              onClick={this.handleClick}
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
              onClick={this.handleClick}
            >
              {[val]}
            </button>
          );
          return value;
        })}
      </div>
    );
  }
}

Numbers.propTypes = {
  clasesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  nums: PropTypes.arrayOf(PropTypes.string).isRequired,
  operators: PropTypes.arrayOf(PropTypes.string).isRequired,
  clasesSigns: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Numbers;
