import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import CounterThree from './CounterThree';
import Todos from './Todos';
import Photos from './Photos';
import Albums from './Albums';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree /> */}
      <Todos />
      <hr />
      <Photos />
      <hr />
      <Albums />
    </>
  );
}

export default App;
