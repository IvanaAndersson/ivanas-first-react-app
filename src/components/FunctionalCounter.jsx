import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default FunctionalCounter;
