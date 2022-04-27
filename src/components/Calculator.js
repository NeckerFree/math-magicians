// eslint-disable-next-line react/prefer-stateless-function
import React, { Component } from 'react';
import Numbers from './Numbers';

const clasesNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'dot'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
const operators = ['÷', 'x', '-', '+', '=', 'AC', '+/-', '%'];
const clasesSigns = ['dividBy', 'times', 'difference', 'add', 'equal', 'ac', 'sign', 'percent'];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <Numbers
          clasesNames={clasesNames}
          nums={nums}
          operators={operators}
          clasesSigns={clasesSigns}
        />
      </section>
    );
  }
}

export default Calculator;
