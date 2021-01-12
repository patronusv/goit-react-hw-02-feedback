import React from 'react';
const Statistics = ({ props, total, positiveFeedback }) => {
  return (
    <>
      {Object.keys(props).map(item => (
        <p key={item}>
          {item[0].toUpperCase() + item.slice(1)}: <span>{props[item]}</span>
        </p>
      ))}
      <p>Total: {total()}</p>
      <p>Positive feedback: {positiveFeedback()}%</p>
    </>
  );
};

export default Statistics;
