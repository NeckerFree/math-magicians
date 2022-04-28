import React from 'react';
import Numbers from './Numbers';

const clasesNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'dot'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['÷', 'x', '-', '+', '=', 'AC', '+/-', '%'];
const clasesSigns = ['dividBy', 'times', 'difference', 'add', 'equal', 'ac', 'sign', 'percent'];
const objectValue = { total: null, next: null, operation: null };
const Calculator = () => (
  <section>
    <Numbers
      clasesNames={clasesNames}
      nums={nums}
      operators={operators}
      clasesSigns={clasesSigns}
      initialObjectValue={objectValue}
    />
  </section>
);

export default Calculator;
