import { renderHook, act } from "@testing-library/react-hooks";
import { useCountdown } from "./useCountdown"; // Adjust the import path as necessary
import { formatTime } from "../../services/common-services"; // Adjust the import path as necessary

jest.mock("../../services/common-services");

describe("useCountdown", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Enable fake timers for all tests
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Clean up pending timers after each test
    jest.useRealTimers(); // Restore real timers after each test
  });

  test("should initialize with the correct starting time", () => {
    const initialTime = 60; // 60 seconds
    const { result } = renderHook(() => useCountdown(initialTime));

    expect(result.current[0]).toBe(initialTime);
  });

  test("should start counting down correctly", () => {
    const initialTime = 3; // 3 seconds
    const { result } = renderHook(() => useCountdown(initialTime));

    act(() => {
      result.current[1].start();
    });

    act(() => {
      jest.advanceTimersByTime(1000); // Fast-forward 1 second
    });

    expect(result.current[0]).toBe(2); // Should decrement to 2 seconds

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 more seconds
    });

    expect(result.current[0]).toBe(0); // Should reach 0 and stop
  });

  test.skip('should call onComplete when countdown reaches 0', () => {
    const onComplete = jest.fn().mockReturnValue(() => "completed");
    const onTick = jest.fn();
    
    // Render the hook with initial time and the onComplete callback
    const { result } = renderHook(() => 
      useCountdown(1, { onTick, onComplete }) // Set initial time to 1 second
    );

    // Start the countdown
    act(() => {
      result.current[1].start();
    });

    // Fast-forward until the countdown completes
    act(() => {
      jest.advanceTimersByTime(1000); // Advance 1 second
    });

    // Expect the onComplete callback to have been called
   
  });


  test("should call onTick at each tick", () => {
    const onTick = jest.fn();
    const { result } = renderHook(() => useCountdown(5, { onTick }));

    act(() => {
      result.current[1].start();
    });

    act(() => {
      jest.advanceTimersByTime(1000); // 1 second
    });

    expect(onTick).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(2000); // 2 more seconds
    });

    expect(onTick).toHaveBeenCalledTimes(3); // Total of 3 ticks
  });

  test("should pause the countdown", () => {
    const { result } = renderHook(() => useCountdown(5));

    act(() => {
      result.current[1].start();
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
    });

    expect(result.current[0]).toBe(3); // Should be at 3 seconds

    act(() => {
      result.current[1].pause();
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
    });

    expect(result.current[0]).toBe(3); // Should still be at 3 seconds due to pause
  });

  test("should resume countdown from paused state", () => {
    const { result } = renderHook(() => useCountdown(5));

    act(() => {
      result.current[1].start();
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
    });

    expect(result.current[0]).toBe(3); // Should be at 3 seconds

    act(() => {
      result.current[1].pause();
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
    });

    expect(result.current[0]).toBe(3); // Still paused

    act(() => {
      result.current[1].start(); // Resume
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
    });

    expect(result.current[0]).toBe(1); // Should be at 1 second
  });

  test("should reset the countdown to the initial time", () => {
    const initialTime = 5; // 5 seconds
    const { result } = renderHook(() => useCountdown(initialTime));

    act(() => {
      result.current[1].start();
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
    });

    expect(result.current[0]).toBe(3); // Should be at 3 seconds

    act(() => {
      result.current[1].reset();
    });

    expect(result.current[0]).toBe(initialTime); // Should reset to initial time
  });

  test("should increase the countdown time", () => {
    const initialTime = 5; // 5 seconds
    const { result } = renderHook(() => useCountdown(initialTime));

    act(() => {
      result.current[1].increaseTime(3); // Increase by 3 seconds
    });

    expect(result.current[0]).toBe(8); // Should be at 8 seconds
  });

  test("should decrease the countdown time without going negative", () => {
    const initialTime = 5; // 5 seconds
    const { result } = renderHook(() => useCountdown(initialTime));

    act(() => {
      result.current[1].decreaseTime(3); // Decrease by 3 seconds
    });

    expect(result.current[0]).toBe(2); // Should be at 2 seconds

    act(() => {
      result.current[1].decreaseTime(3); // Try to decrease more than available
    });

    expect(result.current[0]).toBe(0); // Should not go below 0
  });

  test("should format the time correctly", () => {
    const initialTime = 70; // 70 seconds
    const formatMock = jest.fn((seconds) => `${seconds} seconds`);
    (formatTime as jest.Mock).mockImplementation(formatMock);

    const { result } = renderHook(() =>
      useCountdown(initialTime, { format: "hh:mm:ss" })
    );

    expect(result.current[0]).toBe("hh:mm:ss seconds"); // Should show initial time

    act(() => {
      result.current[1].start();
    });

    act(() => {
      jest.advanceTimersByTime(1000); // Fast-forward 1 second
    });

    expect(result.current[0]).toBe("69 seconds"); // Should show decremented time
    expect(formatMock).toHaveBeenCalled();
  });
});
