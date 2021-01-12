import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';

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
        <FeedbackOptions options={this.state} onLeaveFeedback={this.increment} />
        <Statistics props={this.state} total={this.countTotalFeedback} positiveFeedback={this.countPositiveFeedbackPercentage} />
      </>
    );
  }
}
