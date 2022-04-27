// eslint-disable-next-line react/prefer-stateless-function
import React, { Component } from 'react';
import Numbers from './Numbers';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<section><Numbers /></section>);
  }
}

export default Calculator;
