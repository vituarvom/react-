// UseQueue.tsx

import React, { useState } from 'react';
import { useQueue } from '../../../../package/src/hooks/useQueue/useQueue'; 

const UseQueueComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const queue = useQueue<string>(); 

  const handleEnqueue = () => {
    if (inputValue.trim() === '') return;
    queue.enqueue(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>Queue Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add to queue"
      />
      <button onClick={handleEnqueue}>Enqueue</button>
      <button onClick={queue.dequeue}>Dequeue</button>
      <button onClick={queue.clear}>Clear Queue</button>

      <h2>Queue Size: {queue.size}</h2>
      <ul>
        {queue.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseQueueComponent;
