import { renderHook, act } from "@testing-library/react-hooks";
import useInterval from "./useInterval";

jest.useFakeTimers();

describe("useInterval", () => {
  it("should call the callback at specified intervals", () => {
    const callback = jest.fn();
    const delay = 1000;
    const { result } = renderHook(() => useInterval(callback, delay));

    act(() => {
      result.current.start();
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("should stop calling the callback when cleared", () => {
    const callback = jest.fn();
    const delay = 1000;
    const { result } = renderHook(() => useInterval(callback, delay));

    act(() => {
      result.current.start();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(callback).toHaveBeenCalledTimes(2);

    act(() => {
      result.current.clear();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should not call the callback if delay is null", () => {
    const callback = jest.fn();
    const delay = null;
    const { result } = renderHook(() => useInterval(callback, delay));

    act(() => {
      result.current.start();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
