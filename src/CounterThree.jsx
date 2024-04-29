import React from 'react';
import useCounter from './useCounter';
const CounterThree = () => {
  const { counter, increment, decrement, reset, count } = useCounter(20, 40);

  return (
    <>
      <h1>
        COUNTER ! 3 | {counter} | {count}
      </h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default CounterThree;
