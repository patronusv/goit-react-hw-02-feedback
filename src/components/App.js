import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage = this.state.good ? this.state.good / this.countTotalFeedback() : 0;
    return Math.round(percentage * 100);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map(item => (
          <button onClick={this.increment} type="button" key={item} name={item}>
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}

        <h2>Statistics</h2>
        {Object.keys(this.state).map(item => (
          <p key={item}>
            {item[0].toUpperCase() + item.slice(1)}: <span>{this.state[item]}</span>
          </p>
        ))}
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}
