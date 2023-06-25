import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedBack = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((acc, curr) => acc + curr, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = total > 0 ? ((good * 100) / total).toFixed() : 0;
    return Number(positivePercentage);
  };

  render() {
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickFeedBack}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage() || 0}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
