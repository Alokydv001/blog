import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState(1); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(countdown + 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div>
      <p>Countdown Timer</p>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Countdown;
