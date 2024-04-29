import React, { useState, useEffect } from 'react';

function useCounter(initialValue = 0, steps = 0) {
  const [counter, setCounter] = useState(initialValue, steps);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setCount(count + 1);
    }, 3000);
    return () => clearInterval(timer);
  });
  const increment = () => {
    setCounter((prev) => prev + steps);
  };
  const decrement = () => {
    setCounter((prev) => prev - steps);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset, count };
}

export default useCounter;
