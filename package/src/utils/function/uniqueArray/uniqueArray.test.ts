import { uniqueArray } from "./uniqueArray";

describe("uniqueArray", () => {
  it("should return an empty array when input is an empty array", () => {
    const input: unknown[] = [];
    const result = uniqueArray(input);
    expect(result).toEqual([]);
  });

  it("should handle arrays with primitive values", () => {
    expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should handle arrays with mixed primitive types", () => {
    const input = [1, "1", 2, "2", 1, "1"];
    const result = uniqueArray(input);
    expect(result).toEqual([1, "1", 2, "2"]);
  });

  it("should handle arrays with mixed types", () => {
    expect(uniqueArray([1, "1", 2, "2", 1, "1"])).toEqual([1, "1", 2, "2"]);
  });

  it("should handle arrays with complex objects", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2 };
    expect(uniqueArray([obj1, obj1, obj2])).toEqual([obj1, obj2]);
  });

  it("should handle arrays with complex nested objects", () => {
    const obj1 = { a: 1, child: { b: 10, child: { c: 12 } } };
    const obj2 = { a: 1, child: { b: 10 } };
    expect(uniqueArray([obj1, obj1, obj1, obj2, obj2])).toEqual([obj1, obj2]);
  });

  it('should handle arrays with NaN values', () => {
    const input = [NaN, NaN, 1, 2];
    const result = uniqueArray(input);
    expect(result).toEqual([NaN, 1, 2]);
  });


  it('should handle arrays with mixed types including functions', () => {
    const fn1 = () => {};
    const fn2 = () => {};
    const input = [fn1, fn2, fn1, 1, 'a', 'a'];
    const result = uniqueArray(input);
    expect(result).toEqual([fn1, fn2, 1, 'a']);
  });


  it('should handle very large arrays efficiently', () => {
    const largeArray = new Array(100000).fill(1).map((_, i) => (i % 2 === 0 ? i : { num: i }));
    const result = uniqueArray(largeArray);
    expect(result.length).toBe(100000); 
  });
});
