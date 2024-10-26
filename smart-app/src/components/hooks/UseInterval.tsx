import React, { useState } from 'react';
import { useInterval } from "react-smart-utils";

const UseInterval: React.FC = () => {
  const [count, setCount] = useState(0);
  const { start, clear } = useInterval(() => setCount((c) => c + 1), 1000);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={start}>Start Counting</button>
      <button onClick={clear}>Stop Counting</button>
    </div>
  );
};

export default UseInterval;
