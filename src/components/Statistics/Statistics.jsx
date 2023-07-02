import { Component } from 'react';
import Section from 'components/Section/Section';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { options, total, positivePercentage } = this.props;
    const optionsEntries = Object.entries(options);
    return (
      <Section title={'Statistics'}>
        <ul className={css.statistics__list}>
          {optionsEntries.map(optionsEntry => {
            return (
              <li key={optionsEntry[0]}>
                {optionsEntry[0]}: {optionsEntry[1]}
              </li>
            );
          })}

          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      </Section>
    );
  }
}

Statistics.propTypes = {
  // good: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
