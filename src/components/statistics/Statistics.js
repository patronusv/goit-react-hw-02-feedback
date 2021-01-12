import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './StatisticsStyled';
const Statistics = ({ props, total, positiveFeedback }) => {
  return (
    <Wrapper>
      {Object.keys(props).map(item => (
        <p className="stat" key={item}>
          {item[0].toUpperCase() + item.slice(1)}: <span className="statNumber">{props[item]}</span>
        </p>
      ))}
      <p className="stat">Total: {total()}</p>
      <p className="stat">Positive feedback: {positiveFeedback()}%</p>
    </Wrapper>
  );
};

export default Statistics;
Statistics.propTypes = {
  props: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};
