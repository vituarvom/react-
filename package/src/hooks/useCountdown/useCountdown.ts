import { useEffect, useState, useRef } from "react";
import { formatTime } from "../../services/common-services";
import type { CountdownControls, UseCountdownOptions } from "hooks";

export const useCountdown = (
  initialTimeInSeconds: number,
  { interval = 1000, onTick, onComplete, format }: UseCountdownOptions = {}
): [string | number | null, CountdownControls] => {
  const [count, setCount] = useState<number>(initialTimeInSeconds);
  const [paused, setPaused] = useState<boolean>(true);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;

    const updateCountdown = () => {
      setCount((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(timerId.current as NodeJS.Timeout);
          if (onComplete) onComplete();
          return 0; // Stop at 0
        }
        if (onTick) onTick();
        return prevCount - 1; // Decrement the count
      });
    };

    timerId.current = setInterval(updateCountdown, interval);
    return () => {
      clearInterval(timerId.current as NodeJS.Timeout);
    };
  }, [paused, interval, onTick, onComplete]);

  // Start the countdown
  const start = () => {
    if (count > 0) {
      setPaused(false);
    }
  };

  // Pause the countdown
  const pause = () => {
    setPaused(true);
    clearInterval(timerId.current as NodeJS.Timeout);
  };

  // Reset the countdown to the initial state
  const reset = () => {
    clearInterval(timerId.current as NodeJS.Timeout);
    setCount(initialTimeInSeconds); // Reset to initial time
    setPaused(true); // Ensure it's paused
  };

  // Increase time by X seconds
  const increaseTime = (seconds: number) => {
    setCount((prevCount) => Math.max(0, prevCount + seconds)); // Ensure non-negative
  };

  // Decrease time by X seconds (without going below 0)
  const decreaseTime = (seconds: number) => {
    setCount((prevCount) => Math.max(0, prevCount - seconds)); // Ensure non-negative
  };

  // Format and return the countdown value and control functions
  const formattedTime =
    typeof format === "function"
      ? format(count)
      : typeof format === "string"
      ? formatTime(format, count)
      : count;

  return [
    formattedTime,
    { start, pause, resume: start, reset, increaseTime, decreaseTime },
  ];
};
