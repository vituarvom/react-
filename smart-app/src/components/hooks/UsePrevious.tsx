import { useState, useEffect } from "react";
import { usePrevious } from "react-smart-utils";
import { SectionWrapper } from "../common/section-wrapper";

function UsePrevious() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count); // Track the previous value of count

  useEffect(() => {
    console.log(`Previous count: ${prevCount}, Current count: ${count}`);
  }, [count, prevCount]);

  return (
    <>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UsePrevious;
