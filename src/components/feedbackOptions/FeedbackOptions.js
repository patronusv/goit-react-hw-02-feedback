import React from 'react';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      {Object.keys(options).map(item => (
        <button onClick={onLeaveFeedback} type="button" key={item} name={item}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
