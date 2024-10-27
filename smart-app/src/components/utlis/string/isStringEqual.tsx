// StringComparison.tsx
import React, { useState } from 'react';
import { isStringEqual } from "react-smart-utils";

interface StringComparisonProps {}

const IsStringEqual: React.FC<StringComparisonProps> = () => {
  const [str1, setStr1] = useState<string>('');
  const [str2, setStr2] = useState<string>('');
  const [ignoreWhitespace, setIgnoreWhitespace] = useState<boolean>(false);
  const [ignoreCase, setIgnoreCase] = useState<boolean>(false);
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCompare = () => {
    try {
      const areEqual = isStringEqual(str1, str2, { ignoreWhitespace, ignoreCase });
      setResult(areEqual);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Comparison</h1>
      
      <label>
        String 1:
        <input type="text" value={str1} onChange={(e) => setStr1(e.target.value)} />
      </label>
      
      <label>
        String 2:
        <input type="text" value={str2} onChange={(e) => setStr2(e.target.value)} />
      </label>
      
      <label>
        <input
          type="checkbox"
          checked={ignoreWhitespace}
          onChange={() => setIgnoreWhitespace(!ignoreWhitespace)}
        />
        Ignore Whitespace
      </label>
      
      <label>
        <input
          type="checkbox"
          checked={ignoreCase}
          onChange={() => setIgnoreCase(!ignoreCase)}
        />
        Ignore Case
      </label>
      
      <button onClick={handleCompare}>Compare</button>
      
      {result !== null && <p>Strings are {result ? 'equal' : 'not equal'}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IsStringEqual;
