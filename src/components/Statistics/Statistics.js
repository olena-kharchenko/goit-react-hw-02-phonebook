import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={s.statisticList}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
