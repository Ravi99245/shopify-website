import React, { useState, useEffect } from "react";

const AnimatedNumber = ({ number }) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    const targetNumber = number;
    let currentNumber = 0;
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        setDisplayedNumber(currentNumber);
      } else {
        clearInterval(interval);
      }
    }, 2);

    return () => clearInterval(interval);
  }, [number]);

  return <>{displayedNumber}</>;
};

export default AnimatedNumber;
