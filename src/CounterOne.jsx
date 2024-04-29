import React from 'react';
import useCounter from './useCounter';

const CounterOne = () => {
  const { counter, increment, decrement, reset, count } = useCounter(10, 20);

  return (
    <>
      <h1>
        COUNTER ! 1 | {counter} | {count}
      </h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default CounterOne;
