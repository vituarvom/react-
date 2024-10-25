import { useEffect, useRef, useCallback } from "react";

type UseIntervalReturn = {
  start: () => void;
  clear: () => void;
};


export function useInterval(
  callback: () => void,
  delay: number | null
): UseIntervalReturn {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = useCallback(() => {
    if (delay !== null) {
      intervalId.current = setInterval(() => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }, delay);
    }
  }, [delay]);

  const clear = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, []);

  useEffect(() => {
    return clear;
  }, [clear]);

  return { start, clear };
}

export default useInterval;