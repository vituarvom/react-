 import { renderHook, act } from "@testing-library/react-hooks";
import { useInterval } from "./useInterval";

describe("useInterval", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should call the callback every 1000ms", () => {
    const callback = jest.fn();

    renderHook(() => useInterval(callback, 1000));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should stop calling the callback when delay is null", () => {
    const callback = jest.fn();

    const { rerender } = renderHook(
      ({ delay }: { delay: number | null }) => useInterval(callback, delay),
      { initialProps: { delay: 1000 } }
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    rerender({ delay: null });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

