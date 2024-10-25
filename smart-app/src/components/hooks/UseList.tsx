// src/components/UseList.tsx
import React, { useState } from 'react';
import useList from '../../../../package/src/hooks/useList/useList';

const UseList: React.FC = () => {
  const { list, push, updateAt, removeAt, clear, insertAt, move } = useList<string>(['Apple', 'Cherry', 'Banana']);
  const [input, setInput] = useState<string>('');
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (input.trim() === '') return; // Ignore empty input
    const value = input.trim(); // Use the trimmed input
    if (updateIndex !== null) {
      updateAt(updateIndex, value);
      setUpdateIndex(null);
    } else {
      push(value);
    }
    setInput('');
  };

  return (
    <div>
      <h3>Manage Fruit List</h3>
      <ol>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeAt(index)}>Remove</button>
            <button onClick={() => { setUpdateIndex(index); setInput(item); }}>Edit</button>
            {index > 0 && <button onClick={() => move(index, index - 1)}>↑</button>}
            {index < list.length - 1 && <button onClick={() => move(index, index + 1)}>↓</button>}
          </li>
        ))}
      </ol>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a fruit name"
      />
      <button onClick={handleAddOrUpdate}>{updateIndex !== null ? 'Update' : 'Add'}</button>
      
      <button onClick={() => insertAt(0, input.trim())}>
        Add at Start
      </button>
      <button onClick={clear}>Clear List</button>
    </div>
  );
};

export default UseList;
