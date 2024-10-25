import { renderHook, act } from "@testing-library/react-hooks";
import { useLocalStorage } from "./useLocalStorage"; // Replace with the actual path to your hook

// Mock localStorage for testing
beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

// Use fake timers to handle debounce
jest.useFakeTimers();

describe("useLocalStorage Hook", () => {
  it("should return initial value if localStorage is empty", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));

    expect(result.current[0]).toBe("defaultValue");
  });

  it("should retrieve and parse value from localStorage", () => {
    localStorage.setItem("testKey", JSON.stringify("storedValue"));
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));

    expect(result.current[0]).toBe("storedValue");
  });

  it("should store a value in localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));

    act(() => {
      result.current[1]("newValue");
    });

    // Fast-forward all timers (handle debounce delay)
    jest.runAllTimers();

    expect(localStorage.getItem("testKey")).toBe(JSON.stringify("newValue"));
    expect(result.current[0]).toBe("newValue");
  });

  it("should remove the key from localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));

    act(() => {
      result.current[1]("newValue");
    });

    // Fast-forward timers to apply the first setValue
    jest.runAllTimers();

    // Now remove the key
    act(() => {
      result.current[2]("testKey"); // removeKey
    });

    // Fast-forward timers after the remove call
    jest.runAllTimers();

    expect(localStorage.getItem("testKey")).toBeNull();
    expect(result.current[0]).toBe("defaultValue");
  });

  it("should remove key and reset to default value", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );
  
    // Set a new value in localStorage
    act(() => {
      result.current[1]("newValue");
    });
  
    // Fast-forward timers to apply the first setValue
    jest.runAllTimers();
  
    // Clear the key from localStorage
    act(() => {
      result.current[2]("testKey"); // Calling removeKey
    });
  
    // Fast-forward timers after clearing the key
    jest.runAllTimers();
  
    // Check if the localStorage key is removed
    expect(localStorage.getItem("testKey")).toBeNull(); // Assert that the key is cleared
  
    // Check if the state is reset to the initial value
    expect(result.current[0]).toBe("defaultValue"); // The value should revert to the initial/default value
  });
})  