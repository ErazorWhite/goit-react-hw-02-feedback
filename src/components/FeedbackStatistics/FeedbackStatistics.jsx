import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';

export class FeedbackStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleClickFeedBack = feedbackType => {
    this.setState(
      prevState => ({
        [feedbackType]: prevState[feedbackType] + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState({ total: good + neutral + bad });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const positivePercentage = total > 0 ? ((good * 100) / total).toFixed() : 0;
    this.setState({ positivePercentage });
  };

  render() {
    return (
      <>
        <h2>Please leave feedback!</h2>
        <button onClick={() => this.handleClickFeedBack('good')}>Good</button>
        <button onClick={() => this.handleClickFeedBack('neutral')}>
          Neutral
        </button>
        <button onClick={() => this.handleClickFeedBack('bad')}>Bad</button>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        ></Statistics>
      </>
    );
  }
}
