import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './FeedbackOptionsStyled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {Object.keys(options).map(item => (
        <button className="feedback-btn" onClick={onLeaveFeedback} type="button" key={item} name={item}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </Wrapper>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
