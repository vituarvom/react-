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
    clear();
    if (delay !== null) {
      intervalId.current = setInterval(() => {
        if (savedCallback.current) {
          try{
            savedCallback.current();
          }catch(error){
            console.error('error in internal callback:',error);
          }
          
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
    if (delay !==null){
      start();
      return clear;
    }else{
      clear();
      return undefined;
    }
    
  }, [delay, start, clear]);

  return { start, clear };
}

export default useInterval;