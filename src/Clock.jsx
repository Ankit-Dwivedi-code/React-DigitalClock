import React, { useState, useEffect } from 'react';

function Clock() {
  // State to hold the current time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Function to update the time
    const updateClock = () => {
      setTime(new Date());
    };

    // Setting up the interval to call updateClock every second
    const intervalId = setInterval(updateClock, 1000);
    
    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
    