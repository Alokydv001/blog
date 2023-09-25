import React from 'react';
import './App.css';
const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
