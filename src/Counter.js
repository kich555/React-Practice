import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(3);
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default Counter;
