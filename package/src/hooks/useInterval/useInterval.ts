import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const clear = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const start = () => {
    if (delay === null) return;
    clear();
    intervalId.current = setInterval(() => savedCallback.current(), delay);
  };

  useEffect(() => {
    return clear;
  }, [delay]);

  return { start, clear };
}
