import { sample } from "./sample";

describe("sample function", () => {
  test("should return a random element from a non-empty array of numbers", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result); 
  });

  test("should return a random element from a non-empty array of strings", () => {
    const arr = ["apple", "banana", "cherry"];
    const result = sample(arr);
    expect(arr).toContain(result); 
  });

  test("should return a random element from a non-empty array of objects", () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = sample(arr);
    expect(arr).toContainEqual(result);
  });

  test("should throw an error if the input is not an array", () => {
    expect(() => sample(null as unknown as unknown[])).toThrow(
      "TypeError: Expected an array as input"
    );
    expect(() => sample(undefined as unknown as unknown[])).toThrow(
      "TypeError: Expected an array as input"
    );
    expect(() => sample({} as unknown as unknown[])).toThrow(
      "TypeError: Expected an array as input"
    );
    expect(() => sample("string" as unknown as unknown[])).toThrow(
      "TypeError: Expected an array as input"
    );
  });

  test("should throw an error if the input array is empty", () => {
    expect(() => sample([])).toThrow("Array cannot be empty.");
  });

  test("should work with an array containing mixed types", () => {
    const arr = [1, "apple", { id: 1 }, null];
    const result = sample(arr);
    expect(arr).toContain(result); 
  });

  test("should return the same element when the array has one element", () => {
    const arr = [42];
    const result = sample(arr);
    expect(result).toBe(42); 
  });
});
