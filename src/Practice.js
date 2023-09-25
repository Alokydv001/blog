import React, { useState } from 'react';

function Practice() {
  const [data, setData] = useState('0');

  const updateData = () => {
    setData('its me');
  };
console.log();
  return (
    <div className="app">
      <h1>{data}</h1>
      <button onClick={updateData}>Update data</button>
    </div>
  );
}

export default Practice;
