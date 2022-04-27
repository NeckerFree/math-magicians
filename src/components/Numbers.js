import React, { Component } from 'react';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="container">
        <div className="header">0</div>
        <div className="footer">0</div>
        <div className="ac">AC</div>
        <div className="sign">+/-</div>
        <div className="percent">%</div>
        <div className="dividBy">&#247;</div>
        <div className="times">x</div>
        <div className="difference">-</div>
        <div className="add">+</div>
        <div className="equal">=</div>
        <div className="seven">7</div>
        <div className="eight">8</div>
        <div className="nine">9</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="dot">.</div>
      </div>
    );
  }
}

export default Numbers;
